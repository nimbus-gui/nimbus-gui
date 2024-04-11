import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RECOVERY_PHRASE_OPTION } from '../../../constants'

type KeyGenerationState = {
  mnemonic: string[]
  isCopyPastedPhrase: boolean
  validWords: boolean[]
  generatedMnemonic: string[]
  isConfirmPhraseStage: boolean
  recoveryMechanism: string
}

type wordProps = {
  index: number
  word: string
}

const initialState: KeyGenerationState = {
  mnemonic: Array(24).fill(''),
  isCopyPastedPhrase: false,
  validWords: Array(24).fill(true),
  generatedMnemonic: [],
  isConfirmPhraseStage: false,
  recoveryMechanism: RECOVERY_PHRASE_OPTION,
}

const keyGenerationSlice = createSlice({
  name: 'keyGeneration',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<wordProps>) => {
      const newMnemonic = [...state.mnemonic]
      newMnemonic[action.payload.index] = action.payload.word
      state.mnemonic = newMnemonic
    },
    setIsCopyPastedPhrase: (state, action: PayloadAction<boolean>) => {
      state.isCopyPastedPhrase = action.payload
    },
    setValidWords: (state, action: PayloadAction<boolean[]>) => {
      state.validWords = action.payload
    },
    setGeneratedMnemonic: (state, action: PayloadAction<string[]>) => {
      state.generatedMnemonic = action.payload
    },
    setIsConfirmPhraseStage: (state, action: PayloadAction<boolean>) => {
      state.isConfirmPhraseStage = action.payload
    },
    setRecoveryMechanism: (state, action: PayloadAction<string>) => {
      state.recoveryMechanism = action.payload
    },
  },
})

export const {
  setWord,
  setIsCopyPastedPhrase,
  setValidWords,
  setGeneratedMnemonic,
  setIsConfirmPhraseStage,
  setRecoveryMechanism,
} = keyGenerationSlice.actions

export default keyGenerationSlice.reducer
