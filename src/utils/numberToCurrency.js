const NumberToCurrency = (number, currency = 'USD', local = 'en-US') => {
  return `${currency} ${new Intl.NumberFormat(local).format(number)}`
}
export default NumberToCurrency
