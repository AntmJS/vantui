import { NotifyProps } from '../../../types/notify'
import { trigger } from './events'

const Notify = function (options: NotifyProps | string) {
  trigger('show', options)
}

Notify.clear = function (options?: NotifyProps) {
  trigger('clear', options)
}

export default Notify
