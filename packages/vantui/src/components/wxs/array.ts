function isArray(array: any) {
  return array && toString.call(array) === '[object Array]'
}

export { isArray }
