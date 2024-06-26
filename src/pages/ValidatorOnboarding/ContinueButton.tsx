import { XStack, YStack } from 'tamagui'
import { Button } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import LinkWithArrow from '../../components/General/LinkWithArrow'
import { setActiveStep } from '../../redux/ValidatorOnboarding/slice'
import {
  KEYSTORE_FILES_OPTION,
  STEPPER_PATHS,
  PATHS,
  VALIDATOR_ONBOARDING_SUB_PATHS,
} from '../../constants'
import {
  setIsConfirmPhraseStage,
  setIsCopyPastedPhrase,
  setValidWords,
} from '../../redux/ValidatorOnboarding/KeyGeneration/slice'
import { useWindowSize } from '../../hooks/useWindowSize'
import CopyPastedRecoveryPhrase from './CopyPastedRecoveryPhrase'
import BackButton from './ValidatorSetup/BackButton'

const ContinueButton = () => {
  const windowSize = useWindowSize()
  const [isDisabled, setIsDisabled] = useState(false)
  const {
    isCopyPastedPhrase,
    mnemonic,
    validWords,
    isConfirmPhraseStage,
    recoveryMechanism,
    generatedMnemonic,
  } = useSelector((state: RootState) => state.keyGeneration)

  const { activeStep, subStepValidatorSetup } = useSelector(
    (state: RootState) => state.validatorOnboarding,
  )
  const dispatch = useDispatch()

  const pathToStepMap = {
    [`${PATHS.VALIDATOR_ONBOARDING}/`]: 0,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES}`]: 1,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP}`]: 2,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL}`]: 3,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION}`]: 4,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP}`]: 5,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP}`]: 6,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION}`]: 7,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT}`]: 8,
    [`${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION}`]: 9,
  }
  const handleActiveStep = () => {
    if (
      location.pathname ===
      `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.RECOVERY_PHRASE}`
    ) {
      return 7
    }
    return pathToStepMap[location.pathname as keyof typeof pathToStepMap] || 0
  }
  dispatch(setActiveStep(handleActiveStep()))

  const { isValidatorSet } = useSelector(
    (state: RootState) => state.validatorSetup,
  )

  const navigate = useNavigate()

  const isActivationValScreen = activeStep === 5

  useEffect(() => {
    const getDisabledButton = () => {
      if (activeStep === 7 && isConfirmPhraseStage) {
        if (
          validWords.some(w => w === false) ||
          generatedMnemonic.some((w, i) => w !== mnemonic[i])
        ) {
          return true
        }
      } else if (activeStep === 6 && !isValidatorSet) {
        return true
      }
      return false
    }

    setIsDisabled(getDisabledButton())
  }, [
    activeStep,
    subStepValidatorSetup,
    isConfirmPhraseStage,
    mnemonic,
    validWords,
    isValidatorSet,
  ])

  const handleRecoveryMechanism = () => {
    if (!isConfirmPhraseStage && recoveryMechanism === KEYSTORE_FILES_OPTION) {
      return dispatch(setActiveStep(activeStep + 1))
    }
    if (!isConfirmPhraseStage) {
      return dispatch(setIsConfirmPhraseStage(true))
    }

    if (isConfirmPhraseStage) {
      const newValidWords = mnemonic.map(
        (w, index) => generatedMnemonic[index] === w,
      )
      dispatch(setValidWords(newValidWords))

      if (!newValidWords.includes(false)) {
        dispatch(setActiveStep(activeStep + 1))
        if (isCopyPastedPhrase) {
          dispatch(setIsCopyPastedPhrase(false))
        }
      }
    }
  }

  const continueHandler = () => {
    let nextPath = STEPPER_PATHS[activeStep + 1] || ''

    if (activeStep === 7 && !isConfirmPhraseStage) {
      return handleRecoveryMechanism()
    } else if (activeStep === 7 && isConfirmPhraseStage) {
      nextPath = `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT}`
    } else if (activeStep === 8) {
      nextPath = `${PATHS.VALIDATOR_ONBOARDING}/${VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION}`
    } else if (activeStep === 9) {
      nextPath = PATHS.DASHBOARD
    }
    navigate(nextPath)
  }

  return (
    <YStack style={{ width: '100%' }}>
      {windowSize.width < 1155 && (
        <CopyPastedRecoveryPhrase isSmallScreen={true} />
      )}
      <XStack
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          marginTop: '12px',
        }}
      >
        {windowSize.width >= 1155 && <CopyPastedRecoveryPhrase />}
        <BackButton></BackButton>
        {isActivationValScreen && (
          <LinkWithArrow
            text="Skip to Dashboard"
            to={PATHS.DASHBOARD}
            arrowRight={true}
            style={{ fontWeight: 'bold', zIndex: 999 }}
          />
        )}
        <Button onPress={continueHandler} size={40} disabled={isDisabled}>
          {'Continue'}
        </Button>
      </XStack>
    </YStack>
  )
}

export default ContinueButton
