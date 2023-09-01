import { configureStore } from '@reduxjs/toolkit'
import deviceHealthReducer from './deviceHealthCheck/slice'
import pinnedMessageReducer from './PinnedMessage/slice'
import execClientReducer from './ValidatorOnboarding/ValidatorSetup/slice'
import themeReducer from './theme/slice'
import keyGenerationReducer from './ValidatorOnboarding/KeyGeneration/slice'

const store = configureStore({
  reducer: {
    deviceHealth: deviceHealthReducer,
    pinnedMessage: pinnedMessageReducer,
    execClient: execClientReducer,
    theme: themeReducer,
    keyGeneration: keyGenerationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
