import { YStack } from 'tamagui'

import AddCard from './AddCard'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'
import { getHeightPercentages } from '../../../utilities'

const AddCardsContainer = () => {
  const cards = 2

  return (
    <DashboardCardWrapper padding="0" minWidth="50px" >
      <YStack height={'100%'}>
        {Array.from({ length: cards }).map((_, index) => (
          <AddCard key={index} style={{ padding: '56px', height: getHeightPercentages(cards) }} />
        ))}
      </YStack>
    </DashboardCardWrapper>
  )
}

export default AddCardsContainer
