import { createExtraNode, ExtraNode } from '../wxs/extra-node'

let extraNode: ExtraNode = {}

if (!Object.keys(extraNode).length) {
  extraNode = createExtraNode()
}

export default extraNode
