import React from 'react'
import { Row, Column, Item } from './specification.style.js'
import { useTranslation } from 'react-i18next'

const Specification = () => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <Row border={true}>
        <Column>{t('frame')}</Column>
        <Column>
          <ul>
            <Item>
              {t('frameType')}
              <span>Unisex</span>
            </Item>
            <Item>
              {t('frameMaterials')}
              <span>Aluminium</span>
            </Item>
          </ul>
        </Column>
        <Column>
          <ul>
            <Item>
              {t('frameSize')}
              <span>Medium 49cm, Grande 53cm</span>
            </Item>
          </ul>
        </Column>
      </Row>
      <Row>
        <Column>{t('wheel')}</Column>
        <Column>
          <ul>
            <Item>
              {t('wheelSize')}
              <span>28 pouces</span>
            </Item>
            <Item>
              {t('emblematiqueBlueFrontTire')}
              <span>Bien sûr</span>
            </Item>
          </ul>
        </Column>
        <Column>
          <ul>
            <Item>
              {t('tires')}
              <span>Roues de 47 mm pour un confort extra</span>
            </Item>
          </ul>
        </Column>
      </Row>
    </React.Fragment>
  )
}

export default Specification
