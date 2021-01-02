import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormContainer, Title, Alert, Success } from './checkout.style'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js'
import { useTranslation } from 'react-i18next'

const StripeCheckout = () => {
  const { t } = useTranslation()
  const [errors, setErrors] = useState(null)
  const [success, setSuccess] = useState(null)
  const stripe = useStripe()
  const elements = useElements()
  const options = {
    style: {
      base: {
        fontSize: '18px',
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }
  const history = useHistory()

  const handleChange = event => {
    if (event.error) {
      setErrors(event.error.message)
    } else {
      setErrors(null)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement)
    })

    if (!error) {
      try {
        /*
        // CALL API is disabled
        const { id } = paymentMethod
        const response = await axios.post(
          'http://localhost:8080/stripe/charge',
          {
            amount: XXX,
            id: id
          }
        )
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
        */
        setSuccess('acceptedPayment')
        setTimeout(() => {
          history.push('/')
        }, 3000)
      } catch (error) {
        setErrors(t('refusedPayment'))
      }
    } else {
      setErrors(t('refusedPayment'))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title size={24} m={14}>
        {t('paymentTitle')}
      </Title>
      <FormContainer>
        <label>
          {t('CardNumber')}
          <CardNumberElement
            options={options}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          {t('ExpirationDate')}
          <CardExpiryElement
            options={options}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          {t('cvc')}
          <CardCvcElement options={options} onChange={e => handleChange(e)} />
        </label>
      </FormContainer>
      <Alert>{t(errors)}</Alert>
      <Success>{t(success)}</Success>
      <Button type='submit' disabled={!stripe}>
        {t('pay')}
      </Button>
    </form>
  )
}

export default StripeCheckout
