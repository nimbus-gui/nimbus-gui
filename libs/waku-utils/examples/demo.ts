import debug from 'debug'
// import { writeFileSync } from 'fs'

import {
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
  waitForRemotePeer,
} from '@waku/sdk'
import * as utils from '@waku/utils/bytes'

import { getPairingObject, proceedHandshake } from 'waku-utils/src/waku-utils'
import { NoiseSecureMessage } from '@waku/noise/dist/codec'

debug.enable('nimbus-gui:*,waku:*')

const log = debug('nimbus-gui:waku:demo')

export async function startNode() {
  const node = await createLightNode({
    defaultBootstrap: true,
  })

  await node.start()
  await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])

  // Choose a content topic
  const contentTopic = '/light-guide/1/message/proto'

  // Create a message encoder and decoder
  const encoder = createEncoder({ contentTopic })
  const decoder = createDecoder(contentTopic)

  console.log('DEMO Typeof Decoder', typeof decoder)
  console.log('DEMO Decoder', decoder)

  const pairingObj = getPairingObject(node)
  const pInfo = pairingObj.getPairingInfo()

  // // writeFileSync(
  // //   process.env['QR_MESSAGE_PATH']!,
  // //   utils.bytesToHex(pInfo.qrMessageNameTag),
  // // )

  // // writeFileSync(process.env['QR_PATH']!, pInfo.qrCode)

  console.log(
    `./build/status_node_manager waku pair --qr=${pInfo.qrCode} --qr-message-nametag=${utils.bytesToHex(pInfo.qrMessageNameTag)}`,
  )

  await proceedHandshake(pairingObj)
  // const { decoder } = await proceedHandshake(pairingObj)
  // console.log('Handshake completed')
  // const callback = (wakuMessage: NoiseSecureMessage) => {
  //   log('New message received. Payload:', wakuMessage.payload)
  // }

  // await node.filter.subscribe(decoder, callback)
  // log('Subscription created')
}
log('Starting Waku')
startNode()
