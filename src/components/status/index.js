import React from 'react'
import { Label } from './status.style'
import { CgUnavailable } from 'react-icons/cg'
import { GiCheckMark } from 'react-icons/gi'

const Status = props => {
  let { status } = { ...props }
  const translate = status => {
    let statuses = {
      available: 'disponible',
      unavailable: 'indisponible'
    }
    return statuses[status]
  }
  return (
    <Label available={status === 'available'}>
      {translate(status)}
      <Icon icon={status} available={status === 'available'} />
    </Label>
  )
}
export default Status

const Icon = props => {
  let { icon, available } = { ...props }
  let color = available ? '#2c570a' : '#db0000'
  switch (icon) {
    case 'available':
      return <GiCheckMark style={{ margin: '0 10px' }} color={color} />
    case 'unavailable':
      return <CgUnavailable style={{ margin: '0 10px' }} color={color} />
    default:
      return null
  }
}
