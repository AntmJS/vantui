/* eslint-disable */
import react from 'react'
import { TreeSelect } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { items } = COMMON
  const [state, changeState] = react.useState({
    mainActiveIndex: 0,
    activeId: undefined,
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
    const activeId = state.activeId === detail.id ? null : detail.id
    setState({
      activeId,
    })
  }

  return (
    <TreeSelect
      items={items}
      mainActiveIndex={state.mainActiveIndex}
      activeId={state.activeId}
      onClickNav={onClickNav}
      onClickItem={onClickItem}
    />
  )
}
