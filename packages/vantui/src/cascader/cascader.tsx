/* eslint-disable import/no-named-as-default */
import { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Tab from '../tab'
import Tabs from '../tabs'
import Popup from '../popup'
import {
  CascaderOption,
  CascaderValue,
  convertConfig,
  CascaderProps,
} from '../../types/cascader'
import { CascaderItem } from './cascaderItem'
import { convertListToOptions } from './helper'
import ScrollViewTimeout from './scrollViewTimeout'
import Tree from './tree'

export interface CascaderPane {
  nodes: []
  selectedNode: CascaderOption | null
  paneKey: string
}

const defaultProps = {
  className: '',
  style: {},
  visible: false,
  options: [],
  value: [],
  title: '',
  textKey: 'text',
  valueKey: 'value',
  childrenKey: 'children',
  convertConfig: {},
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  lazyLoad: () => {},
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
} as CascaderProps
const InternalCascader = (props: CascaderProps) => {
  const {
    className,
    style,
    visible,
    options,
    value,
    title,
    textKey,
    valueKey,
    childrenKey,
    convertConfig,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    lazyLoad,
    onClose,
    onChange,
    scrollIntoView,
    onPathChange,
  } = { ...defaultProps, ...props }

  const [tabvalue, setTabvalue] = useState('c1')
  const [optiosData, setOptiosData] = useState<CascaderPane[]>([])
  const [tabAnimate, settabAnimate] = useState(false)

  const isLazy = () => !!state.configs.lazy && Boolean(state.configs.lazyLoad)

  const [state] = useState({
    optionsData: [] as any,
    panes: [
      {
        nodes: [] as any,
        selectedNode: [] as CascaderOption | null,
        paneKey: '',
      },
    ],
    innerValue: value as CascaderValue,
    tree: new Tree([], {}),
    tabsCursor: 0, // 选中的tab项
    initLoading: false,
    currentProcessNode: [] as CascaderOption | null,
    configs: {
      lazy,
      lazyLoad,
      valueKey,
      textKey,
      childrenKey,
      convertConfig,
    },
    lazyLoadMap: new Map(),
  })

  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (value !== state.innerValue) {
      state.innerValue = value as CascaderValue
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  const initData = async () => {
    // 初始化开始处理数据
    state.lazyLoadMap.clear()
    if (convertConfig && Object.keys(convertConfig).length > 0) {
      state.optionsData = convertListToOptions(
        options as CascaderOption[],
        convertConfig as convertConfig,
      )
    } else {
      state.optionsData = options
    }
    state.tree = new Tree(state.optionsData as CascaderOption[], {
      value: state.configs.valueKey,
      text: state.configs.textKey,
      children: state.configs.childrenKey,
    })

    if (isLazy() && !state.tree.nodes.length) {
      await invokeLazyLoad({
        root: true,
        loading: true,
        text: '',
        value: '',
      })
    }

    state.panes = [
      {
        nodes: state.tree.nodes,
        selectedNode: null,
        paneKey: 'c1',
      },
    ]
    syncValue()

    setOptiosData(state.panes)
  }
  // 处理有默认值时的数据
  const syncValue = async () => {
    const currentValue = state.innerValue
    if (currentValue === undefined || !state.tree.nodes.length) {
      return
    }

    if (currentValue.length === 0) {
      state.tabsCursor = 0
      // state.panes = [{ nodes: state.tree.nodes, selectedNode: null }];
      return
    }

    let needToSync = currentValue

    if (isLazy() && Array.isArray(currentValue) && currentValue.length) {
      needToSync = []
      const parent: any = state.tree.nodes.find(
        (node) => node.value === currentValue[0],
      )

      if (parent) {
        needToSync = [parent.value]
        state.initLoading = true

        const last = await currentValue
          .slice(1)
          .reduce(async (p: Promise<CascaderOption | void>, value) => {
            const parent = await p

            await invokeLazyLoad(parent)
            const node: any = parent?.children?.find(
              (item: any) => item.value === value,
            )

            if (node) {
              needToSync.push(value)
            }

            return Promise.resolve(node)
          }, Promise.resolve(parent))

        await invokeLazyLoad(last)

        state.initLoading = false
      }
    }

    if (needToSync.length && currentValue === value) {
      const pathNodes = state.tree.getPathNodesByValue(needToSync)
      pathNodes.forEach((node, index) => {
        state.tabsCursor = index
        // 当有默认值时，不触发 chooseItem 里的 emit 事件
        chooseItem(node, true)
      })
    }
  }

  const invokeLazyLoad = async (node?: CascaderOption | void) => {
    if (!node) {
      return
    }

    if (!state.configs.lazyLoad) {
      node.leaf = true
      return
    }

    if (
      state.tree.isLeaf(node, isLazy()) ||
      state.tree.hasChildren(node, isLazy())
    ) {
      return
    }

    node.loading = true

    const parent = node.root ? null : node
    let lazyLoadPromise = state.lazyLoadMap.get(node)

    if (!lazyLoadPromise) {
      lazyLoadPromise = new Promise((resolve) => {
        // 外部必须resolve
        state.configs.lazyLoad?.(node, resolve)
      })
      state.lazyLoadMap.set(node, lazyLoadPromise)
    }

    const nodes: CascaderOption[] | void = await lazyLoadPromise

    if (Array.isArray(nodes) && nodes.length > 0) {
      state.tree.updateChildren(nodes, parent)
    } else {
      // 如果加载完成后没有提供子节点，作为叶子节点处理
      node.leaf = true
    }
    node.loading = false
    state.lazyLoadMap.delete(node)
  }

  const close = () => {
    settabAnimate(false)
    onClose && onClose()
  }

  const closePopup = () => {
    close()
    settabAnimate(false)
  }

  /* type: 是否是静默模式，是的话不触发事件
  tabsCursor: tab的索引 */
  const chooseItem = async (node: CascaderOption, type: boolean) => {
    // console.log('chooseItem', node)
    if ((!type && node.disabled) || !state.panes[state.tabsCursor]) {
      return
    }
    // 如果没有子节点
    if (state.tree.isLeaf(node, isLazy())) {
      node.leaf = true
      // @ts-ignore
      state.panes[state.tabsCursor].selectedNode = node
      state.panes = state.panes.slice(0, (node.level as number) + 1)
      if (!type) {
        const pathNodes = state.panes.map((item) => item.selectedNode)
        const optionParams = pathNodes.map((item: any) => item.value)
        onChange?.(optionParams, pathNodes)
        onPathChange?.(optionParams, pathNodes)

        setTimeout(() => {
          close()
        }, 600)
      }
      setOptiosData(state.panes)
      return
    }
    // 如果有子节点，滑到下一个
    // if (node.children && node.children.length > 0) {
    if (state.tree.hasChildren(node, isLazy())) {
      const level = (node.level as number) + 1
      // @ts-ignore
      state.panes[state.tabsCursor].selectedNode = node
      state.panes = state.panes.slice(0, level)
      state.tabsCursor = level
      state.panes.push({
        nodes: node.children || [],
        selectedNode: null,
        paneKey: `c${state.tabsCursor + 1}`,
      })

      setOptiosData(state.panes)
      // 延时触发优化交互
      setTimeout(() => {
        setTabvalue(`c${state.tabsCursor + 1}`)
      }, 600)

      if (!type) {
        const pathNodes = state.panes.map((item) => item.selectedNode)
        const optionParams = pathNodes.map((item: any) => item?.value)
        onPathChange?.(optionParams, pathNodes)
      }
      return
    }
    state.currentProcessNode = node

    if (node.loading) {
      return
    }

    await invokeLazyLoad(node)

    if (state.currentProcessNode === node) {
      // @ts-ignore
      state.panes[state.tabsCursor].selectedNode = node
      chooseItem(node, type)
    }
    setOptiosData(state.panes)
  }

  return (
    <View className={`van-cascader ${className}`} style={style}>
      <Popup
        className="van-cascadar-popup"
        show={visible}
        position="bottom"
        round
        closeable={closeable}
        closeIconPosition={closeIconPosition as any}
        closeIcon={closeIcon}
        onClickOverlay={closePopup}
        onClose={closePopup}
      >
        <View className={'van-cascader__title'}>{title}</View>
        <Tabs
          active={tabvalue}
          animated={tabAnimate}
          renderNavLeft={
            <View className="van-cascader-tab-box">
              {optiosData.map((pane, index) => (
                <View
                  onClick={() => {
                    if (!tabAnimate) settabAnimate(true)
                    setTabvalue(pane.paneKey)
                    state.tabsCursor = index
                  }}
                  className={`van-tabs__titles-item ${
                    tabvalue === pane.paneKey ? 'active' : ''
                  }`}
                  key={pane.paneKey}
                >
                  <Text className="van-tabs__titles-item__text">
                    {!state.initLoading &&
                      state.panes.length &&
                      pane?.selectedNode?.text}
                    {!state.initLoading &&
                      state.panes.length &&
                      !pane?.selectedNode?.text &&
                      '请选择'}
                    {!(!state.initLoading && state.panes.length) &&
                      'Loading...'}
                  </Text>
                </View>
              ))}
            </View>
          }
        >
          {!state.initLoading && state.panes.length ? (
            optiosData.map((pane, index) => (
              <Tab
                key={pane.paneKey}
                active={tabvalue === pane.paneKey}
                name={pane.paneKey}
                lazyRender={true}
                lazyTimeout={100}
                onClick={() => {
                  if (!tabAnimate && index !== optiosData.length - 1)
                    settabAnimate(true)
                }}
              >
                <ScrollViewTimeout
                  timeout={400}
                  optiosData={optiosData}
                  tabvalue={tabvalue}
                  value={value}
                  scrollIntoView={scrollIntoView}
                >
                  {pane.nodes &&
                    pane.nodes.map((node: any, index: number) => (
                      <CascaderItem
                        key={index}
                        {...props}
                        data={node}
                        checked={pane.selectedNode?.value === node.value}
                        chooseItem={(node: any) => chooseItem(node, false)}
                        id={`vant-cascader-item${node.value}`}
                      />
                    ))}
                </ScrollViewTimeout>
              </Tab>
            ))
          ) : (
            <Tab key="-999" active name="-999" lazyRender>
              <View className="van-cascader-tab" />
            </Tab>
          )}
        </Tabs>
      </Popup>
    </View>
  )
}

export const Cascader = InternalCascader
