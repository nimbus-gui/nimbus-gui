import debug from 'debug'
import { readFileSync, writeFileSync } from 'fs'

import { randomBytes } from '@stablelib/random'
import { HMACDRBG } from '@stablelib/hmac-drbg'

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
} from '@waku/noise'

import { CustomHandshakeResult } from './handshake'
import { bytes32 } from '@waku/noise/dist/@types/basic'

const log = debug('nimbus-gui:waku:utils')

export type HandshakeResultWrapper = {
  csOutbound: CipherState
  csInbound: CipherState
  nametagsInbound: MessageNametagBuffer
  nametagsOutbound: MessageNametagBuffer
  rs: bytes32
  h: bytes32
}

export function getPairingObject(node: LightNode): WakuPairing {
  const dhKey = new X25519DHKey()
  const rng = new HMACDRBG()

  const nimbusGUIStaticKey = dhKey.generateKeyPair()

  const applicationName = 'nimbus-gui'
  const applicationVersion = '0.0.0'
  const shardIdAsBytes = randomBytes(16, rng)

  const shardId = bytesToHex(shardIdAsBytes)

  const pairingObj = new WakuPairing(
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

// Function to serialize the object to a JSON string
function serializeObject(obj: HandshakeResult): string {
  // Convert Uint8Array fields to arrays of numbers
  const serializedObj = JSON.stringify(obj, (key, value) => {
    if (value instanceof Uint8Array) {
      return Array.from(value)
    }
    return value
  })
  return serializedObj
}

// Function to deserialize the JSON string back into an object
function deserializeObject(serializedObj: string): HandshakeResultWrapper {
  const obj = JSON.parse(serializedObj, (key, value) => {
    if (Array.isArray(value) && value.every(v => typeof v === 'number')) {
      return new Uint8Array(value)
    }
    return value
  })
  return obj
}

export async function proceedHandshake(pairingObj: WakuPairing): Promise<{
  encoder: NoiseSecureTransferEncoder
  decoder: NoiseSecureTransferDecoder
  handshakeResult: HandshakeResult
}> {
  const pExecute = pairingObj.execute(120000) // timeout after 2m
  await scheduleHandshakeAuthConfirmation(pairingObj)
  log('Authcode confirmed')
  const [encoder] = await pExecute

  const handshakeResult = pairingObj.getHandshakeResult()
  handshakeResult ? log('Handshake successful') : log('Handshake failed')

  console.log('Handshake result:', serializeObject(handshakeResult))

  writeFileSync('./somefile.json', serializeObject(handshakeResult))

  const smt = deserializeObject(readFileSync('./somefile.json', 'utf8'))
  console.log(smt)

  const customHandshakeResult = new CustomHandshakeResult(
    smt.csOutbound,
    smt.csInbound,
    smt.nametagsInbound,
    smt.nametagsOutbound,
    smt.rs,
    smt.h,
  )

  const decoder = new NoiseSecureTransferDecoder(
    pairingObj.contentTopic,
    customHandshakeResult,
  )
  return { encoder, decoder, handshakeResult: customHandshakeResult }
}
