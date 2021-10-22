export interface TransitionProps {
  show?: boolean
  duration?:
    | string
    | number
    | { enter: string | number; leave: string | number }
  name?: string
  onBeforeEnter?: () => void
  onBeforeLeave?: () => void
  onAfterEnter?: () => void
  onAfterLeave?: () => void
  onEnter?: () => void
  onLeave?: () => void
  enterClass?: string
  enterActiveClass?: string
  enterToClass?: string
  leaveClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
}
