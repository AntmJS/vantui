import { Events } from '@tarojs/taro'
type EventNames =
  | 'toast_clear'
  | 'toast_show'
  | 'toast_setDefaultOptions'
  | 'toast_resetDefaultOptions'

const events = new Events()

function trigger(eventName: EventNames, ...args: any[]): boolean {
  return events.trigger(eventName, ...args)
}

function on(
  eventName: EventNames,
  listener: (...args: any[]) => void,
): TaroGeneral.Events {
  return events.on(eventName, listener)
}

function off(
  eventName: EventNames,
  listener?: ((...args: any[]) => void) | undefined,
): TaroGeneral.Events {
  return events.off(eventName, listener)
}

export { on, off, trigger }
