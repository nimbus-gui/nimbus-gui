import { useEffect, useRef, useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Avatar, Text } from '@status-im/components'
import { ReactionIcon } from '@status-im/icons'
import { Emoji, EmojiClickData, EmojiStyle } from 'emoji-picker-react'

import LabelInputField from '../LabelInputField'
import ColorPicker from '../ColorPicker/ColorPicker'
import EmojiPickerDialog from '../EmojiPickerDialog'
import './CreateAvatar.css'

const CreateAvatar = () => {
  const [chosenColor, setChosenColor] = useState('#2A4AF5')
  const [isEmojiDialogOpen, setIsEmojiDialogOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState<string>('1f600')
  const emojiRef = useRef<HTMLDivElement | null>(null)

  const changeEmoji = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.unified)
  }

  const handleClickOutside = (event: any) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setIsEmojiDialogOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [emojiRef])

  return (
    <YStack>
      <LabelInputField
        labelText="Device Name"
        placeholderText="Stake and chips"
        width="100%"
      />
      <XStack space={'$3'} justifyContent={'space-between'}>
        <YStack>
          <Text size={13} weight="semibold" color={'#647084'}>
            Device Avatar
          </Text>
          <XStack my={10} alignItems={'end'}>
            <div className="device-avatar" style={{ background: chosenColor }}>
              {selectedEmoji ? (
                <Emoji
                  unified={selectedEmoji}
                  emojiStyle={EmojiStyle.TWITTER}
                  size={30}
                />
              ) : null}
            </div>
            <Avatar
              type="icon"
              size={32}
              icon={
                <ReactionIcon
                  size={20}
                  onClick={() => setIsEmojiDialogOpen(prev => !prev)}
                  style={{ cursor: 'pointer' }}
                />
              }
            />
            <div ref={emojiRef}>
              {isEmojiDialogOpen && (
                <EmojiPickerDialog
                  changeEmoji={changeEmoji}
                  emojiStyle="TWITTER"
                />
              )}
            </div>
          </XStack>
        </YStack>
        <YStack flexWrap="wrap" width="73%">
          <Text size={13} weight="semibold" color={'#647084'}>
            Highlight Color
          </Text>
          <ColorPicker setChosenColor={setChosenColor} />
        </YStack>
      </XStack>
    </YStack>
  )
}

export default CreateAvatar
