const REGEXP = new RegExp('{|}|"', 'g')

function keys(obj: any) {
  return JSON.stringify(obj)
    .replace(REGEXP, '')
    .split(',')
    .map(function (item) {
      return item.split(':')[0]
    })
}

export { keys }
