function main(params) {
  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://interbank.pe',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Request-Headers': '*',
      'Access-Control-Allow-Headers': 'content-type'
    }
  }
}
