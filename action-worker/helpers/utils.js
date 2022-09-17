const isEmptyObject = (value) => {
  return Object.keys(value).length === 0 && value.constructor === Object
}

const isEmpty = (str) => {
  return !str || str.length === 0
}

const existKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

exports.isEmptyObject = isEmptyObject
exports.isEmpty = isEmpty
exports.existKey = existKey
