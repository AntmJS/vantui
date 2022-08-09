import { View, ScrollView } from '@tarojs/components'
import { useCallback, useState, useEffect } from 'react'
import * as utils from '../wxs/utils'
import VanSidebarItem from '../sidebar-item/index'
import VanSidebar from '../sidebar/index'
import VanIcon from '../icon/index'
import * as computed from './wxs'
import { TreeSelectProps } from './../../types/tree-select'
export function TreeSelect(props: TreeSelectProps) {
  const {
    items = [],
    selectedIcon = 'success',
    height = 300,
    mainActiveIndex = 0,
    activeId,
    max = Infinity,
    onClickItem,
    onClickNav,
    renderContent,
  } = props
  const [subItems, setSubItems] = useState<any[]>([])
  const _onSelectItem = useCallback(
    (event, item) => {
      const isArray = Array.isArray(activeId)
      // 判断有没有超出右侧选择的最大数
      const isOverMax = isArray && (activeId as any[]).length >= max
      // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
      const isSelected = isArray
        ? (activeId as any[]).includes(item.id)
        : activeId === item.id
      if (!item.disabled && (!isOverMax || isSelected)) {
        Object.defineProperty(event, 'detail', {
          value: item,
        })
        onClickItem?.(event)
      }
    },
    [activeId, max, onClickItem],
  )

  const _onClickNav = useCallback(
    ({ detail: index }: any) => {
      const item = items[index]
      if (!item?.disabled) {
        onClickNav?.({ detail: { index } })
      }
    },
    [onClickNav, items],
  )

  useEffect(() => {
    const { children = [] } = items[mainActiveIndex] || {}
    setSubItems(children)
  }, [items, mainActiveIndex, setSubItems])

  return (
    <View
      className="van-tree-select"
      style={'height: ' + utils.addUnit(height)}
    >
      <ScrollView scrollY className="van-tree-select__nav">
        <VanSidebar
          activeKey={mainActiveIndex}
          onChange={_onClickNav}
          className="van-tree-select__nav__inner"
        >
          {items.map((item: any, index: number) => {
            return (
              <VanSidebarItem
                key={index}
                className="main-item-class"
                // activeClass="main-active-class"
                // disabledClass="main-disabled-class"
                badge={item.badge}
                dot={item.dot}
                title={item.text}
                disabled={item.disabled}
              ></VanSidebarItem>
            )
          })}
        </VanSidebar>
      </ScrollView>
      <ScrollView scrollY className="van-tree-select__content">
        {renderContent}
        {subItems.map((item: any) => {
          return (
            <View
              key={item.id}
              className={
                'van-ellipsis content-item-class ' +
                utils.bem('tree-select__item', {
                  active: computed.isActive(activeId, item.id),
                  disabled: item.disabled,
                }) +
                ' ' +
                (computed.isActive(activeId, item.id)
                  ? 'content-active-class'
                  : '') +
                ' ' +
                (item.disabled ? 'content-disabled-class' : '')
              }
              data-item={item}
              onClick={(e) => {
                _onSelectItem(e, item)
              }}
            >
              {item.text}
              {computed.isActive(activeId, item.id) && (
                <VanIcon
                  name={selectedIcon}
                  size="16px"
                  className="van-tree-select__selected"
                ></VanIcon>
              )}
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
export default TreeSelect
