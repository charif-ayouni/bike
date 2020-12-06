import React from 'react'
import { Label } from './review.style'
import { useTranslation } from 'react-i18next'

const Review = props => {
  let { review } = { ...props }
  let { t } = useTranslation()
  return (
    <Label>
      {review} {t('reviews')}
    </Label>
  )
}
export default Review
