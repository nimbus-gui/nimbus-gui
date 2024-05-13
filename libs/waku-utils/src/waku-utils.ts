import debug from 'debug'

import { randomBytes } from '@stablelib/random'
import { HMACDRBG } from '@stablelib/hmac-drbg'

import * as utils from '@waku/utils/bytes'

import { Protocols, createLightNode, waitForRemotePeer } from '@waku/sdk'
import { LightNode } from '@waku/interfaces'
import { bytesToHex } from '@waku/utils/bytes'
import {
  HandshakeResult,
  WakuPairing,
  X25519DHKey,
  ResponderParameters,
  NoiseSecureTransferEncoder,
  NoiseSecureTransferDecoder,
  CipherState,
  MessageNametagBuffer,
  ChaChaPoly,
  Nonce,
} from '@waku/noise'

import { bytes32 } from '@waku/noise/dist/@types/basic'

import { CustomHandshakeResult } from './handshake'
import { statusProdBootstrapPeers, wakuDefaultPubsubTopic } from './const'

export type HandshakeResultWrapper = {
  csOutbound: CipherState
  csInbound: CipherState
  nametagsInbound: MessageNametagBuffer
  nametagsOutbound: MessageNametagBuffer
  rs: bytes32
  h: bytes32
}

debug.enable('nimbus-gui:*,waku:*')
const log = debug('nimbus-gui:waku:utils')

export function getPairingObject(node: LightNode): WakuPairing {
  const dhKey = new X25519DHKey()
  const rng = new HMACDRBG()

  const nimbusGUIStaticKey = dhKey.generateKeyPair()

  const applicationName = 'nimbus-gui'
  const applicationVersion = '0.0.0'
  const shardIdAsBytes = randomBytes(16, rng)
  const shardId = bytesToHex(shardIdAsBytes)

  const pairingObj = new WakuPairing(
    wakuDefaultPubsubTopic,
    node.lightPush,
    node.filter,
    nimbusGUIStaticKey,
    new ResponderParameters(applicationName, applicationVersion, shardId),
  )

  const pInfo = pairingObj.getPairingInfo()
  log(`Initial messageNameTag: "${bytesToHex(pInfo.qrMessageNameTag)}"`)
  log(`QR Code: "${pInfo.qrCode}"`)
  log(`Content topic: "${pairingObj.contentTopic}"`)

  return pairingObj
}

export async function scheduleHandshakeAuthConfirmation(
  pairingObj: WakuPairing,
) {
  const authCode = await pairingObj.getAuthCode()
  log('Auth code is: ' + authCode)
  pairingObj.validateAuthCode(true)
}

export async function proceedHandshake(
  pairingObj: WakuPairing,
  node: any,
): Promise<{
  encoder: NoiseSecureTransferEncoder
  decoder: NoiseSecureTransferDecoder
  handshakeResult: HandshakeResult
}> {
  const savedHanshakeResult = window.localStorage.getItem('handshakeResult')
  if (savedHanshakeResult) {
    console.log('Im in')
    const handshakeResult = deserializeObject(savedHanshakeResult)
    const customHandshakeResult = new CustomHandshakeResult(
      handshakeResult.getCSOutbound(),
      handshakeResult.getCSInbound(),
      handshakeResult.nametagsInbound,
      handshakeResult.nametagsOutbound,
      handshakeResult.rs,
      handshakeResult.h,
    )

    const decoder = new NoiseSecureTransferDecoder(
      window.localStorage.getItem('contentTopic'),
      wakuDefaultPubsubTopic,
      customHandshakeResult,
    )

    console.log('Decoder:', decoder)

    return { encoder: null, decoder, handshakeResult: customHandshakeResult }
  }

  console.log('Im out')
  const pExecute = pairingObj.execute(120000) // timeout after 2m
  await scheduleHandshakeAuthConfirmation(pairingObj)
  log('Authcode confirmed')
  const [encoder] = await pExecute
  const handshakeResult = pairingObj.getHandshakeResult()
  handshakeResult ? log('Handshake successful') : log('Handshake failed')

  const customHandshakeResult = new CustomHandshakeResult(
    handshakeResult.getCSOutbound(),
    handshakeResult.getCSInbound(),
    handshakeResult.nametagsInbound,
    handshakeResult.nametagsOutbound,
    handshakeResult.rs,
    handshakeResult.h,
  )

  const decoder = new NoiseSecureTransferDecoder(
    pairingObj.contentTopic,
    wakuDefaultPubsubTopic,
    customHandshakeResult,
  )

  console.log('Decoder right after handshake:', decoder)
  window.localStorage.setItem(
    'handshakeResult',
    serializeObject(handshakeResult),
  )

  window.localStorage.setItem('contentTopic', pairingObj.contentTopic)
  return { encoder, decoder, handshakeResult: customHandshakeResult }
}

// Function to serialize the object to a JSON string
export function serializeObject1(obj: HandshakeResult): string {
  // Convert Uint8Array fields to arrays of numbers
  const serializedObj = JSON.stringify(obj, (key, value) => {
    if (value instanceof Uint8Array) {
      return Array.from(value)
    }
    return value
  })
  return serializedObj
}

// export function serializeObject(obj: HandshakeResult): string {
//   const serializedObj: any = {}

//   // Convert Uint8Array fields to arrays of numbers
//   for (const key in obj) {
//     console.log(key)
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const value = obj[key]
//       if (value instanceof Uint8Array) {
//         serializedObj[key] = {
//           key,
//           _type: value.constructor.name,
//           value: Array.from(value),
//         }
//       } else {
//         serializedObj[key] = {
//           key,
//           _type: value.constructor.name,
//           value: value,
//         }
//       }
//     }
//   }

//   return JSON.stringify(serializedObj)
// }
export function removeUnderscores(input: string): string {
  return input.replace(/_/g, '')
}

export function serializeObject(obj: HandshakeResult): string {
  const serializedObj: any = {}

  function serializeValue(key: string, value: any): any {
    if (key == 'cipher') {
      return {
        _type: removeUnderscores(value.constructor.name),
        value: value,
      }
    }
    if (value instanceof Uint8Array) {
      return {
        _type: removeUnderscores(value.constructor.name),
        value: Array.from(value),
      }
    } else if (typeof value === 'object' && value !== null) {
      const obj: any = {}
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          obj[key] = serializeValue(key, value[key])
        }
      }
      return {
        _type: removeUnderscores(value.constructor.name),
        value: obj,
      }
    } else {
      return {
        _type: removeUnderscores(value.constructor.name),
        value: value,
      }
    }
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      serializedObj[key] = serializeValue(key, obj[key])
    }
  }

  return JSON.stringify(serializedObj)
}

// Function to deserialize the JSON string back into an object
function deserializeObject1(serializedObj: string): HandshakeResultWrapper {
  const obj = JSON.parse(serializedObj, (key, value) => {
    if (Array.isArray(value) && value.every(v => typeof v === 'number')) {
      return new Uint8Array(value)
    }
    return value
  })
  return obj
}

const constructors: { [key: string]: any } = {
  CipherState: CipherState,
  Uint8Array: Uint8Array,
  Nonce: Nonce,
  Number: Number,
  DataView: DataView,
  ChaChaPoly: ChaChaPoly,
  MessageNametagBuffer: MessageNametagBuffer,
  Array: Array,
}

export function deserializeObject(serialized: string): HandshakeResult {
  const serializedObj = JSON.parse(serialized)
  // console.log(serializedObj)

  function deserializeValue(type: string, value: any): any {
    const Constructor = constructors[type]
    if (Constructor === Uint8Array) {
      return new Uint8Array(value)
    } else if (Constructor === Nonce) {
      return new Nonce(value)
    } else if (typeof value === 'object' && value !== null) {
      const obj: any = new Constructor()
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          obj[key] = deserializeValue(value[key]._type, value[key].value)
        }
      }
      return obj
    } else {
      return value
    }
  }

  let deserializedObj = Object.create(HandshakeResult.prototype)

  for (const key in serializedObj) {
    if (Object.prototype.hasOwnProperty.call(serializedObj, key)) {
      deserializedObj[key] = deserializeValue(
        serializedObj[key]._type,
        serializedObj[key].value,
      )
    }
  }

  return deserializedObj
}

export async function startNode() {
  const node = await createLightNode({
    defaultBootstrap: false,
    pubsubTopics: [wakuDefaultPubsubTopic],
    bootstrapPeers: statusProdBootstrapPeers,
  })

  await node.start()
  await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])

  log('Node started')
  return node
}

export async function getNoiseSession() {
  console.log('getNoiseSession')
}

export async function connectToWaku() {
  const node = await startNode()

  const pairingObj = getPairingObject(node)

  const pInfo = pairingObj.getPairingInfo()
  console.log(
    `./build/status_node_manager waku pair --qr=${pInfo.qrCode} --qr-message-nametag=${utils.bytesToHex(pInfo.qrMessageNameTag)}`,
  )

  const { decoder, handshakeResult } = await proceedHandshake(pairingObj, node)

  console.log('Handshake result:', serializeObject(handshakeResult))
  console.log(decoder)

  const callback = (wakuMessage: NoiseSecureMessage) => {
    log('New message received. Payload:', wakuMessage.payload)
    console.log(decoder)
  }
  await node.filter.subscribe([decoder], callback)
  log('Subscription created')

  // window.localStorage.setItem(
  //   'handshakeResult',
  //   serializeObject(handshakeResult),
  // )

  // window.localStorage.setItem('contentTopic', pairingObj.contentTopic)

  getNoiseSession
}
