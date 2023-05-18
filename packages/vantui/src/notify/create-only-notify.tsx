let idIndex = 1

export function createOnlyNotify(Notify) {
  const id = `van-create-notify${idIndex++}`
  const Notify_ = function Modal(props) {
    return <Notify {...props} id={id} />
  }

  const actionNames = ['show', 'clear']

  for (let i = 0; i < actionNames.length; i++) {
    const name = actionNames[i]
    if (name && Notify_[name]) {
      Notify_[name] = function (props) {
        return Notify[name]({
          ...props,
          selector: `#${id}`,
        })
      }
    }
  }

  return Notify_
}
