import { Stack, XStack, YStack } from 'tamagui'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import LogsTerminal from './LogsTerminal'
import LogsSumCard from './LogsSumCard'
import SupportCard from './SupportCard'
import HeaderBtns from './HeaderBtns'
import TitleLogo from '../../components/General/TitleLogo'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import { RootState } from '../../redux/store'

const LogsPage = () => {
  const [highLightSearched, setHighLightSearched] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [timestamps, setTimestamps] = useState(true)
  const [indexesVisible, setIndexesVisible] = useState(true)
  const logsCount = useSelector((state: RootState) => state.logsTerminal)
  const [dropdownMenuItem, setDropdownMenuItem] = useState('')
  const triggerSearch = (isTriggered: boolean) => {
    setHighLightSearched(isTriggered)
  }

  return (
    <SidebarsWrapper>
      <YStack
        space="$4"
        alignItems="flex-start"
        minWidth="500px"
        width="50vh"
        style={{
          flexGrow: '1',
          overflowY: 'auto',
        }}
        className={'transparent-scrollbar'}
      >
        <XStack justifyContent="space-between" width={'100%'} flexWrap="wrap">
          <TitleLogo />
          <HeaderBtns
            dropdownMenuItem={dropdownMenuItem}
            setDropdownMenuItem={setDropdownMenuItem}
            setTimestamps={setTimestamps}
            timestamps={timestamps}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            triggerSearch={triggerSearch}
            indexesVisible={indexesVisible}
            setIndexesVisible={setIndexesVisible}
          />
        </XStack>
        <Stack
          style={{ width: '100%', alignItems: 'center', flexWrap: 'wrap' }}
          space={'$4'}
        >
          <LogsTerminal
            dropdownMenuItem={dropdownMenuItem}
            timestamps={timestamps}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            highLightSearched={highLightSearched}
            indexesVisible={indexesVisible}
          />
          <Stack
            space="$4"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1vw',
              width: '100%',
            }}
          >
            <LogsSumCard
              type={'WRN'}
              icon={'/icons/thunder.png'}
              iconText={'Good'}
              count={logsCount.warningLogs}
              setDropdownMenuItem={setDropdownMenuItem}
            />
            <LogsSumCard
              type={'NTC'}
              count={logsCount.noticeLogs}
              icon="/icons/small-warn.png"
              iconText={'Good'}
              setDropdownMenuItem={setDropdownMenuItem}
            />
            <LogsSumCard
              type={'ERR'}
              icon={'/icons/small-error.png'}
              iconText={'Good'}
              count={logsCount.errorLogs}
              setDropdownMenuItem={setDropdownMenuItem}
            />
            <SupportCard />
          </Stack>
        </Stack>
      </YStack>
    </SidebarsWrapper>
  )
}

export default LogsPage
