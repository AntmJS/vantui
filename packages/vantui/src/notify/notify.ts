import { NotifyProps } from '../../types/notify'
import { trigger } from './events'

const Notify = function (options: NotifyProps | string) {
  trigger('notify_show', options)
}

Notify.clear = function (options?: NotifyProps) {
  trigger('notify_clear', options)
}

export default Notify
