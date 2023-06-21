export function transformValueByType(values, config, formComponents) {
  for (const key in values) {
    let type = ''
    let outProps: any = {}
    for (let i = 0; i < config.length; i++) {
      const cc = config[i]
      if (cc?.key === key) {
        type = cc.type
        outProps = cc.props
      }
    }
    const transform = formComponents[type]?.transformDefaultValue
    // @ts-ignore
    const propsNew = formComponents?.[type]?.transformProps(outProps, {})
    if (transform) {
      values[key] = transform(values[key], propsNew)
    }
  }

  return values
}
