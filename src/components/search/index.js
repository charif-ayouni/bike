import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Label, Form, Box, WhereBox, Button, Icon } from './search.style'
import { CgSearchLoading } from 'react-icons/cg'
import { findAllStatic } from '../../services/api'
import { setBikes } from '../../redux/actions/bikeActions'
import { useDispatch } from 'react-redux'
import { setCurrentDisplayType } from '../../redux/actions/bikeActions'
import { useTranslation } from 'react-i18next'

const SearchForm = () => {
  let [where, setWhere] = useState()
  const history = useHistory()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const searchData = event => {
    event.preventDefault()

    if (!where) {
      return
    }

    findAllStatic(where)
      .then(res => {
        dispatch(setBikes(res))
      })
      .then(() => {
        dispatch(setCurrentDisplayType('bikes'))
        history.push('/search')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = event => {
    let value = event.target.value
    setWhere(value)
  }

  return (
    <Form>
      <Box>
        <Icon>
          <CgSearchLoading color='#757575' size={40} />
        </Icon>
        <WhereBox>
          <Label>{t('where')} ?</Label>
          <Input
            name='where'
            placeholder={t('wherePlaceholder')}
            onChange={event => handleChange(event)}
          />
        </WhereBox>
      </Box>
      <Button onClick={event => searchData(event)}>{t('searchButton')}</Button>
    </Form>
  )
}

export default SearchForm
