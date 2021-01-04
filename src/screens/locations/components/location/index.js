import React from 'react'
import {
  Location as Box,
  Title,
  Row,
  Picture,
  Button,
  Column,
  Text,
  Span
} from './location.style'
import { useTranslation } from 'react-i18next'
import { BsChevronCompactRight } from 'react-icons/bs'
import Status from '../../../../components/status'

const Location = props => {
  let { location } = { ...props }
  const { t } = useTranslation()
  return (
    <Box>
      <Row border={true}>
        <Picture src={location.bike.image} />
        <Column direction='column' alignItems='flex-start'>
          <Title>{location.bike.title}</Title>
          <Status status={location.status} />
          <Text>
            {t('order')} N° {location.uid}
          </Text>
          <Span>
            {t('effectedOn')} {location.createdAt}
          </Span>
          <Text>
            {t('total')}: {location.bike.price}
          </Text>
        </Column>
        <Column width={10} alignItems='center'>
          <Button>
            <BsChevronCompactRight />
          </Button>
        </Column>
      </Row>
    </Box>
  )
}

export default Location
