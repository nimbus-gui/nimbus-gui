import debug from 'debug'
// import { writeFileSync } from 'fs'

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

debug.enable('nimbus-gui:*,waku:noise:pairing,waku:*')

const shardId = 'xxxx'
const contentTopic = `/nimbus-gui/0.0.0/${shardId}/proto`

const encoder = createEncoder({
  pubsubTopic: '/waku/2/default-waku/proto',
  contentTopic,
})

import protobuf from 'protobufjs'
async function main() {
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

  // Create a message structure using Protobuf
  const ChatMessage = new protobuf.Type('ChatMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('message', 3, 'string'))

  // Create a new message object
  const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: 'Alice',
    message: 'Hello, World!',
  })

  // Serialise the message using Protobuf
  const serialisedMessage = ChatMessage.encode(protoMessage).finish()
  console.log(serialisedMessage)
  // Send the message using Light Push
  console.log(encoder)
  await node.lightPush.send(encoder, {
    payload: serialisedMessage,
  })
}

main().then(() => {
  console.log('Message sent')
})
