import { NotifyProps } from '../../types/notify'
import { createExtraNode, ExtraNode } from '../wxs/extra-node'
import { Notify } from './notify'

const extraNode: ExtraNode = createExtraNode()
const defaultDuration = 3000
let timer: NodeJS.Timeout | null = null

export function show(options_: NotifyProps | string) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }

  let options: NotifyProps = {}
  if (options_ && typeof options_ === 'string') {
    options.message = options_
  } else if (typeof options_ === 'object') {
    options = options_
  }
  extraNode.renderNode?.(<Notify {...options} />)
  timer = setTimeout(() => {
    hide()
  }, options.duration || defaultDuration)
}

export function hide() {
  extraNode.removeNode?.()
}
