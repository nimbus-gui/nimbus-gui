import { DragIcon, StatusIcon, ChevronRightIcon } from '@status-im/icons'
import { Stack, Tooltip, XStack, YStack } from 'tamagui'
import Icon from '../Icon'
import { Text } from '@status-im/components'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
const NodeType = 'Node'
const DraggableNode = ({
  id,
  content,
  index,
  moveNode,
}: {
  id: string
  content: string
  index: number
  moveNode: (dragIndex: number, hoverIndex: number) => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: NodeType,
    hover(item: { type: string; id: string; index: number }) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      moveNode(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: NodeType,
    item: () => ({ id, index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
      <XStack
        alignItems="center"
        justifyContent="space-between"
        width="250px"
        backgroundColor="#FAFBFC"
        borderRadius={15}
        padding="8px"
      >
        <XStack space="$3" alignItems="center">
          <div {...drag}>
            <DragIcon size={20} color="#09101C" />
          </div>
          <StatusIcon size={20} />
          <YStack>
            <Text size={15} weight="semibold">
              {content}
            </Text>
            <Text size={13} color="#647084">
              Validators
            </Text>
          </YStack>
        </XStack>
        <Tooltip>
          <Tooltip.Trigger>
            <Stack padding="3px">
              <ChevronRightIcon size={20} />
            </Stack>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <XStack alignItems="center" space="$1">
              <Icon src="icons/tooltipIcon.png" width={22} height={22} />
              <YStack space="$2">
                <Text size={15} weight="semibold">
                  Client Name
                </Text>
                <Text size={15} weight="semibold">
                  Host Name
                </Text>
              </YStack>
            </XStack>
          </Tooltip.Content>
        </Tooltip>
      </XStack>
    </div>
  )
}
export default DraggableNode