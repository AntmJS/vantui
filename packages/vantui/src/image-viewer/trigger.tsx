import { ImageViewerProps } from '../../types/index'
import { removeNode, renderNode } from './node'
import { ImageViewer } from './image-viewer'

export function show(props: ImageViewerProps) {
  renderNode(<ImageViewer {...props} />)
}

export function close() {
  removeNode()
}
