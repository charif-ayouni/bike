const ToLocalDateString = date => {
  const event = Date.parse(date)
  date = new Date(event)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
export default ToLocalDateString
