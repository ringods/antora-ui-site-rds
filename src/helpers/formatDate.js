'use strict'

module.exports = (dateString) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
