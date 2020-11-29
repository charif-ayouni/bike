import React from 'react'
import { Row, Column, Item } from './specification.style.js'

const Specification = () => {
  return (
    <React.Fragment>
      <Row border={true}>
        <Column>Cadre</Column>
        <Column>
          <ul>
            <Item>
              Type de cadre
              <span>Unisex</span>
            </Item>
            <Item>
              Matériaux du cadre
              <span>Aluminium</span>
            </Item>
          </ul>
        </Column>
        <Column>
          <ul>
            <Item>
              Taille du cadre
              <span>Medium 49cm, Grande 53cm</span>
            </Item>
          </ul>
        </Column>
      </Row>
      <Row>
        <Column>Roue</Column>
        <Column>
          <ul>
            <Item>
              Taille des roues
              <span>28 pouces</span>
            </Item>
            <Item>
              Pneu avant bleu emblématique
              <span>Bien sûr</span>
            </Item>
          </ul>
        </Column>
        <Column>
          <ul>
            <Item>
              Pneus
              <span>Roues de 47 mm pour un confort extra</span>
            </Item>
          </ul>
        </Column>
      </Row>
    </React.Fragment>
  )
}

export default Specification
