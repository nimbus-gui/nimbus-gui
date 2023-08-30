import { Text } from '@status-im/components'
import { Link } from 'react-router-dom'
import { Stack, XStack } from 'tamagui'
import { ArrowLeftIcon, ArrowRightIcon } from '@status-im/icons'

type LinkWithArrowProps = {
  text: string
  to: string
  arrowLeft?: boolean
  arrowRight?: boolean
  style?: React.CSSProperties
}

const LinkWithArrow = ({ text, to, arrowLeft, arrowRight, style }: LinkWithArrowProps) => {
  return (
    <Stack style={{ maxWidth: 'fit-content', ...style }}>
      <Text size={15}>
        <XStack space={'$1'} style={{ alignItems: 'center' }}>
          {arrowLeft && <ArrowLeftIcon size={16} color="#2A4CF4" />}
          <Link style={{ color: '#2A4CF4' }} to={to}>
            {text}
          </Link>
          {arrowRight && <ArrowRightIcon size={16} color="#2A4CF4" />}
        </XStack>
      </Text>
    </Stack>
  )
}

export default LinkWithArrow
