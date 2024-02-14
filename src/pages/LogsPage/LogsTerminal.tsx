import './scroller.css'
import React, { useEffect, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import TerminalRow from './TerminalRow'
import { LogType, simulateLogs } from '../../constants'
import { useDispatch } from 'react-redux'
import {
  incrementErrorLogs,
  incrementNoticeCount,
  incrementWarningCount,
} from '../../redux/LogsTerminal/slice'
type ListOnScrollProps = {
  scrollDirection: 'forward' | 'backward'
  scrollUpdateWasRequested: boolean
}
type LogsTerminalProps = {
  windowWidth: number
  dropdownMenuItem: string
  timestamps: boolean
  searchInput: string
  setSearchInput: (searchInput: string) => void
  highLightSearched: boolean
  indexesVisible: boolean
}

const LogsTerminal = ({
  windowWidth,
  searchInput,
  timestamps,
  dropdownMenuItem,
  indexesVisible,
}: LogsTerminalProps) => {
  const dispatch = useDispatch()
  const [logs, setLogs] = useState<LogType[]>([])
  const listRef = useRef<List>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      const newLog = simulateLogs[currentIndex % simulateLogs.length]
      setLogs(prevLogs => [...prevLogs, newLog])
      updateLogCounts(newLog)
      currentIndex++
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (isAutoScroll && listRef.current) {
      listRef.current.scrollToItem(logs.length - 1, 'end')
    }
  }, [logs, isAutoScroll])

  const handleScroll = ({
    scrollDirection,
    scrollUpdateWasRequested,
  }: ListOnScrollProps) => {
    if (!scrollUpdateWasRequested) {
      const isUserScrollingUp = scrollDirection === 'backward'
      setIsAutoScroll(!isUserScrollingUp)
    }
  }

  const updateLogCounts = (newLog: LogType) => {
    if (newLog.lvl === 'NTC') dispatch(incrementNoticeCount())
    else if (newLog.lvl === 'WRN') dispatch(incrementWarningCount())
    else if (newLog.lvl === 'ERR') dispatch(incrementErrorLogs())
  }

  const filteredLogs = logs.filter(log => {
    return (
      (dropdownMenuItem === '' || log.lvl === dropdownMenuItem) &&
      (searchInput === '' ||
        log.msg.toLowerCase().includes(searchInput.toLowerCase()))
    )
  })
  const Row = ({
    index,
    style,
  }: {
    index: number
    style: React.CSSProperties
  }) => {
    const log = filteredLogs[index]
    return (
      <div style={style}>
        <TerminalRow
          log={log}
          index={index}
          searchInput={searchInput}
          timestamps={timestamps}
          indexesVisible={indexesVisible}
        />
      </div>
    )
  }

  return (
    <List
      height={650}
      itemCount={filteredLogs.length}
      itemSize={20}
      width={windowWidth - 500}
      ref={listRef}
      onItemsRendered={({ visibleStopIndex }) => {
        if (
          isAutoScroll &&
          visibleStopIndex === logs.length - 1 &&
          listRef.current
        ) {
          listRef.current.scrollToItem(logs.length, 'end')
        }
      }}
      onScroll={handleScroll}
      style={{
        height: '650px',
        overflowX: 'auto',
        width: windowWidth - 500,
        border: '1px solid #E7EAEE',
        borderRadius: '15px',
        backgroundColor: '#282c34',
      }}
    >
      {Row}
    </List>
  )
}

export default LogsTerminal
