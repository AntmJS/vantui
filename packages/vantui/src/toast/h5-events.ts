/* eslint-disable @typescript-eslint/no-unused-vars */
class Events {
  public events: Record<string, any>
  constructor() {
    this.events = {}
  }
  trigger(name: string, ...args: any[]): any {
    if (this.events[name]) this.events[name](...args)
  }

  on(name: string, listener: any): any {
    this.events[name] = listener
  }

  // @ts-ignore
  off(name: string, listener: any): any {
    delete this.events[name]
  }
}

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
