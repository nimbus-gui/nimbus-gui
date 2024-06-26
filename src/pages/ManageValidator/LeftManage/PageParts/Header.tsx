import { XStack } from 'tamagui'
import { PopupIcon } from '@status-im/icons'

import Titles from '../../../../components/General/Titles'

const Header = () => {
  return (
    <XStack
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 25px 0px 30px',
      }}
    >
      <XStack alignItems="flex-end">
        <Titles title="Manage Validator" titleSize={27} subtitle="" />
      </XStack>
      <PopupIcon size={20} />
    </XStack>
  )
}
export default Header
