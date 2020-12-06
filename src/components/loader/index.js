import React from 'react'
import { Root, SpinnerBorder, LoadingText } from './loader.style'
import { useTranslation } from 'react-i18next'

const Loader = () => {
  const { t } = useTranslation()
  return (
    <Root>
      <SpinnerBorder />
      <LoadingText>{t('loading')}</LoadingText>
    </Root>
  )
}

export default Loader
