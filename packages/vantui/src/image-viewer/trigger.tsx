import { ImageViewerProps } from '../../types/index'
import extraNode from './node'
import { ImageViewer } from './image-viewer'

const { removeNode, renderNode } = extraNode

export function show(props: ImageViewerProps) {
  renderNode?.(<ImageViewer {...props} />)
}

export function close() {
  removeNode?.()
}
