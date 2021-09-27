function isActive(activeList: any, itemId: number | string) {
  if (Array.isArray(activeList)) {
    return activeList.indexOf(itemId) > -1
  }

  return activeList === itemId
}

export { isActive }
