import { Button, DropdownMenu, Input } from '@status-im/components'
import { Stack, XStack } from 'tamagui'
import { SearchIcon, DropdownIcon } from '@status-im/icons'

import TamaguiSwitch from '../../components/General/TamaguiSwitch'

type HeaderBtnsProps = {
  setDropdownMenuItem: (dropdownMenuItem: string) => void
  dropdownMenuItem: string
  timestamps: boolean
  setTimestamps: (timestamps: boolean) => void
  searchInput: string
  setSearchInput: (searchInput: string) => void
  triggerSearch: (isTriggered: boolean) => void
  indexesVisible: boolean
  setIndexesVisible: (indexesVisible: boolean) => void
}

const HeaderBtns = ({
  setDropdownMenuItem,
  dropdownMenuItem,
  timestamps,
  setTimestamps,
  searchInput,
  setSearchInput,
  triggerSearch,
  indexesVisible,
  setIndexesVisible,
}: HeaderBtnsProps) => {
  return (
    <XStack space={'$4'}>
      <Input
        variant="retractable"
        color={'black'}
        icon={<SearchIcon size={16} />}
        onChange={(e: any) => setSearchInput(e.target.value)}
        value={searchInput}
        onBlur={() => triggerSearch(true)}
      ></Input>
      <Stack>
        <DropdownMenu>
          <Button variant="outline" icon={<DropdownIcon size={16} />}>
            {dropdownMenuItem}
          </Button>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              danger={true}
              label="Show all"
              onSelect={() => setDropdownMenuItem('')}
            />
            {Object.entries(LogsTypes).map(([key, val]) => {
              return (
                <DropdownMenu.Item
                  label={val}
                  onSelect={() => setDropdownMenuItem(key)}
                />
              )
            })}
          </DropdownMenu.Content>
        </DropdownMenu>
      </Stack>
      <Button
        variant="outline"
        icon={<SwitchComponent value={timestamps} setValue={setTimestamps} />}
      >
        Timestamps
      </Button>
      <Button
        variant="outline"
        icon={
          <TamaguiSwitch
            isSwitchOn={timestamps}
            onSwitchChange={setTimestamps}
          />
        }
      >
        indexesVisible
      </Button>
    </XStack>
  )
}

export default HeaderBtns
