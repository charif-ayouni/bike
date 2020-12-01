import React from 'react'
import { Input, Label, Form, Box, WhereBox, Button, Icon } from './search.style'
import { CgSearchLoading } from 'react-icons/cg'

const SearchForm = () => {
  return (
    <Form>
      <Box>
        <Icon>
          <CgSearchLoading color='#757575' size={40} />
        </Icon>
        <WhereBox>
          <Label>Où ?</Label>
          <Input name='where' placeholder='Ville, Rue, Cartier...' />
        </WhereBox>
      </Box>
      <Button>Voir les vélos</Button>
    </Form>
  )
}

export default SearchForm
