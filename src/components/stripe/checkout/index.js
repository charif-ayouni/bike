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
import { sendNotification, setLocation } from '../../../services/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../../../redux/actions/orderActions'
import { useAuth } from '../../../context/authContext'

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
  const dispatch = useDispatch()
  const { bike } = useSelector(state => state.bikeReducers)
  const { order } = useSelector(state => state.orderReducer)
  const { user } = useAuth()

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

    const { error, paymentMethod } = await stripe.createPaymentMethod({
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
        let _order = {
          uid: user.uid,
          date: order.date,
          bike: {
            title: bike.title,
            price: bike.price,
            image: bike.image
          },
          code: {
            brand: paymentMethod.card.brand,
            country: paymentMethod.card.country,
            last4: paymentMethod.card.last4
          },
          createdAt: new Date().toLocaleDateString(),
          status: 'pending'
        }
        dispatch(addOrder(_order))

        setLocation(_order, paymentMethod.id)

        let to = localStorage.getItem('fcm-token')
          ? localStorage.getItem('fcm-token')
          : null

        if (to) {
          let notification = {
            to: to,
            priority: 'high',
            notification: {
              title: t('orderConfirmationTitle'),
              body: t('orderConfirmationBody')
            }
          }
          sendNotification(notification)
            .then()
            .catch(err => {
              console.log(err)
            })
        }

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
