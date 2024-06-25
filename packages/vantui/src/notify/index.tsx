import { NotifyProps } from '../../types/notify'
import { createOnlyNotify } from './create-only-notify'
import { show, hide } from './node'

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Notify(props: NotifyProps) {
  return <></>
}

Notify.show = show
Notify.clear = hide
Notify.createOnlyNotify = () => createOnlyNotify(Notify)

export { Notify }

export default Notify
