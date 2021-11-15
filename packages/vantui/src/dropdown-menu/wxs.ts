/* eslint-disable */
function displayTitle(item: any) {
  if (item.title) {
    return item.title
  }

  var match = item.options.filter(function (option: any) {
    return option.value === item.value
  })
  var displayTitle = match.length ? match[0].text : ''
  return displayTitle
}

export { displayTitle }
