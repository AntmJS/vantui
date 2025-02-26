import { IDefaultProps } from '../../types/index'

let defaultProps: IDefaultProps = {}

function set(props: IDefaultProps) {
  const backupProps = defaultProps
  defaultProps = {
    ...defaultProps,
    ...props,
  }

  return backupProps
}

function get() {
  return defaultProps
}

export { set, get }

export default { set, get }
