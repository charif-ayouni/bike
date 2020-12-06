import React from 'react'
import { useTranslation } from 'react-i18next'
import { Label } from './status.style'
import { CgUnavailable } from 'react-icons/cg'
import { GiCheckMark } from 'react-icons/gi'
import { VscLoading } from 'react-icons/vsc'

const Status = props => {
  let { status } = { ...props }
  const { t } = useTranslation()

  return (
    <Label color={Color(status)}>
      {t(status)}
      <Icon icon={status} />
    </Label>
  )
}
export default Status

const Icon = props => {
  let { icon } = { ...props }
  switch (icon) {
    case 'available':
    case 'confirmed':
      return <GiCheckMark style={{ margin: '0 10px' }} color={Color(icon)} />
    case 'unavailable':
      return <CgUnavailable style={{ margin: '0 10px' }} color={Color(icon)} />
    case 'pending':
      return <VscLoading style={{ margin: '0 10px' }} color={Color(icon)} />
    default:
      return null
  }
}

const Color = icon => {
  switch (icon) {
    case 'available':
    case 'confirmed':
      return '#2c570a'
    case 'unavailable':
      return '#db0000'
    case 'pending':
      return '#ff7841'
    default:
      return null
  }
}
