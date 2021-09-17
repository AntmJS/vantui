export interface TransitionProps {
  show?: boolean
  duration?: number | { enter: number; leave: number }
  name?: string
  onBeforeEnter?: (...arg: any[]) => any
  onBeforeLeave?: (...arg: any[]) => any
  onAfterEnter?: (...arg: any[]) => any
  onAfterLeave?: (...arg: any[]) => any
  onEnter?: (...arg: any[]) => any
  onLeave?: (...arg: any[]) => any
}
