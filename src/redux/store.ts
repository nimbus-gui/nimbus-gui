import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './theme/slice'
import deviceHealthReducer from './DeviceHealthCheck/slice'
import pinnedMessageReducer from './PinnedMessage/slice'
import execClientReducer from './ValidatorOnboarding/ClientSetup/slice'
import keyGenerationReducer from './ValidatorOnboarding/KeyGeneration/slice'
import depositReducer from './Deposit/slice'
import rightSidebarReducer from './RightSidebar/slice'
import validatorOnboardingReducer from './ValidatorOnboarding/slice'
import advisoriesReducer from './ValidatorOnboarding/Advisories/slice'
import validatorSetupReducer from './ValidatorOnboarding/ValidatorSetup/slice'
import pairDeviceReducer from './PairDevice/slice'
import manageValidatorTabReducer from './ManageValidatorTab/slice'
import logsTerminalReducer from './LogsTerminal/slice'
import currencyReducer from './Currency/slice'
import navigationFlowReducer from './NavigationFlow/slice'

const store = configureStore({
  reducer: {
    deviceHealth: deviceHealthReducer,
    pinnedMessage: pinnedMessageReducer,
    execClient: execClientReducer,
    theme: themeReducer,
    keyGeneration: keyGenerationReducer,
    deposit: depositReducer,
    rightSidebar: rightSidebarReducer,
    validatorOnboarding: validatorOnboardingReducer,
    advisories: advisoriesReducer,
    validatorSetup: validatorSetupReducer,
    pairDevice: pairDeviceReducer,
    manageValidatorTab: manageValidatorTabReducer,
    logsTerminal: logsTerminalReducer,
    currency: currencyReducer,
    navigationFLow: navigationFlowReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
