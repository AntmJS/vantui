/* eslint-disable */
import react from 'react'
import { TreeSelect } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { items } = COMMON
  const [state, changeState] = react.useState<any>({
    mainActiveIndex: 0,
    activeIds: [],
  })

  const setState = (newState) => {
    changeState({
      ...state,
      ...newState,
    })
  }

  const onClickNav = ({ detail }) => {
    setState({
      mainActiveIndex: detail?.index || 0,
    })
  }

  const onClickItem = ({ detail }) => {
    const { activeIds } = state
    if (activeIds.includes(detail?.id || '')) {
      activeIds.splice(activeIds.indexOf(detail?.id || ''), 1)
    } else {
      activeIds.push(detail.id)
    }
    console.info(activeIds)
    setState({
      activeIds: [...activeIds],
    })
  }

  return (
    <TreeSelect
      items={items}
      mainActiveIndex={state.mainActiveIndex}
      activeId={state.activeIds}
      onClickNav={onClickNav}
      onClickItem={onClickItem}
      max={2}
    />
  )
}
