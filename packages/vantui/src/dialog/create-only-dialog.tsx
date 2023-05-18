let idIndex = 1

export function createOnlyDialog(Dialog) {
  const id = `van-create-dialog${idIndex++}`
  const Dialog_ = function Modal(props = {}) {
    return <Dialog {...props} id={id} />
  }

  const actionNames = [
    'alert',
    'confirm',
    'setDefaultOptions',
    'resetDefaultOptions',
    'close',
    'stopLoading',
    'createOnlyDialog',
  ]

  for (let i = 0; i < actionNames.length; i++) {
    const name = actionNames[i]
    if (name && Dialog[name])
      Dialog_[name] = function (props) {
        return Dialog[name]({
          ...props,
          selector: `#${id}`,
        })
      }
  }

  return Dialog_
}
