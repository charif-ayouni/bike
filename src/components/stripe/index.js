import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import StripeCheckout from './checkout'

const Stripe = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY_PUBLIC)

  return (
    <Elements stripe={stripePromise}>
      <StripeCheckout />
    </Elements>
  )
}

export default Stripe
