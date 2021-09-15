export interface TransitionProps {
  show?: boolean
  duration?: number | { enter: number; leave: number }
  name?: string
  beforeEnter?: (...arg: any[]) => any
  beforeLeave?: (...arg: any[]) => any
  afterEnter?: (...arg: any[]) => any
  afterLeave?: (...arg: any[]) => any
  enter?: (...arg: any[]) => any
  leave?: (...arg: any[]) => any
}
