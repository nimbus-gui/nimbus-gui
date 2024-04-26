import debug from 'debug'
import { writeFileSync } from 'fs'

import {
  IDecoder,
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
  waitForRemotePeer,
} from '@waku/sdk'
import * as utils from '@waku/utils/bytes'

import { getPairingObject, proceedHandshake } from 'waku-utils/src/waku-utils'
import { HMACDRBG } from '@stablelib/hmac-drbg'
import { NoiseHandshakeDecoder, NoiseSecureMessage } from '@waku/noise'
import { randomBytes } from '@stablelib/random'
import { wakuDnsDiscovery, enrTree } from '@waku/discovery'

import { X25519DHKey } from '@waku/noise'
import { contentTopicToPubsubTopic } from '@waku/utils'

debug.enable('nimbus-gui:*,waku:noise:pairing,waku:*,waku:error:filter:v2')

const log = debug('nimbus-gui:waku:demo')

export async function startNode() {
  // const node = await createLightNode({
  //   defaultBootstrap: true,
  // })

  const dhKey = new X25519DHKey()
  const rng = new HMACDRBG()

  const nimbusGUIStaticKey = dhKey.generateKeyPair()

  const applicationName = 'nimbus-gui'
  const applicationVersion = '0.0.0'
  const shardIdAsBytes = randomBytes(16, rng)
  // const shardId = utils.bytesToHex(shardIdAsBytes)
  const shardId = 'xxxx'

  console.log('Shard ID:', shardId)

  const contentTopic = `/nimbus-gui/0.0.0/${shardId}/proto`

  const node = await createLightNode({
    defaultBootstrap: false,
    pubsubTopics: ['/waku/2/default-waku/proto'],
    bootstrapPeers: [
      '/dns4/node-01.ac-cn-hongkong-c.wakuv2.test.status.im/tcp/8000/wss/p2p/16Uiu2HAkvWiyFsgRhuJEb9JfjYxEkoHLgnUQmr1N5mKWnYjxYRVm',
      '/dns4/node-01.gc-us-central1-a.wakuv2.test.status.im/tcp/8000/wss/p2p/16Uiu2HAmJb2e28qLXxT5kZxVUUoJt72EMzNGXB47Rxx5hw3q4YjS',
      '/dns4/node-01.ac-cn-hongkong-c.wakuv2.test.status.im/tcp/8000/wss/p2p/16Uiu2HAkvWiyFsgRhuJEb9JfjYxEkoHLgnUQmr1N5mKWnYjxYRVm',
    ],
  })

  await node.start()
  await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])

  // Choose a content topic
  // const contentTopic = '/light-guide/1/message/proto'

  // // Create a message encoder and decoder
  // const encoder = createEncoder({ contentTopic })
  // const decoder = createDecoder(contentTopic)

  // console.log('DEMO Typeof Decoder', typeof decoder)
  // console.log('DEMO Decoder', decoder)

  const pairingObj = getPairingObject(
    node,
    nimbusGUIStaticKey,
    applicationName,
    applicationVersion,
    shardId,
  )

  const pInfo = pairingObj.getPairingInfo()

  // writeFileSync(
  //   process.env['QR_MESSAGE_PATH']!,
  //   utils.bytesToHex(pInfo.qrMessageNameTag),
  // )

  // writeFileSync(process.env['QR_PATH']!, pInfo.qrCode)

  console.log(
    `./build/status_node_manager waku pair --qr=${pInfo.qrCode} --qr-message-nametag=${utils.bytesToHex(pInfo.qrMessageNameTag)}`,
  )

  // const callback = (wakuMessage: NoiseSecureMessage) => {
  //   log('New message received. Payload:', wakuMessage.payload)
  // }
  // console.log('xxxx', node.filter)
  // await node.filter.subscribe(decoder, callback)

  // await proceedHandshake(pairingObj)

  // const { decoder } = await proceedHandshake(pairingObj)
  // console.log('Handshake completed')

  const decoder = createDecoder(contentTopic, '/waku/2/default-waku/proto')
  const callback = wakuMessage => {
    log('New message received. Payload:', wakuMessage)
  }

  // console.log('xxxx', contentTopicToPubsubTopic(contentTopic))

  const subscription = await node.filter.createSubscription(
    '/waku/2/default-waku/proto',
  )

  await subscription.subscribe([decoder], callback)

  await node.filter.subscribe(decoder, callback)
  // log('Subscription created')
}
log('Starting Waku')
startNode()
