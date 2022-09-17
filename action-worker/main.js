const _ = require('./helpers/utils')
const request = require('./helpers/request')

const main = (args) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  }
}

exports.main = main
