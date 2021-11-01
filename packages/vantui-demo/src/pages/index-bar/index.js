import { Text } from '@tarojs/components'
import { Component, Fragment } from 'react'

import { IndexAnchor, IndexBar, Tabs, Tab, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

const indexList = []
const charCodeOfA = 'A'.charCodeAt(0)
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i))
}

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    activeTab: 0,
    indexList,
    customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    scrollTop: 0,
  }

  onChange = (event) => {
    this.setState({
      activeTab: event.detail.name,
    })
  }

  onPageScroll = (event) => {
    this.setState({
      scrollTop: event.scrollTop,
    })
  }

  render() {
    const { activeTab, scrollTop, indexList, customIndexList } = this.state
    return (
      <DemoPage title="IndexBar 索引栏">
        <Tabs active={activeTab} onChange={this.onChange}>
          <Tab title="基础用法">
            {activeTab === 0 && (
              <IndexBar scrollTop={scrollTop}>
                {indexList.map((item) => {
                  return (
                    <Fragment key={item.item}>
                      <IndexAnchor index={item}></IndexAnchor>
                      <Cell title="文本"></Cell>
                      <Cell title="文本"></Cell>
                      <Cell title="文本"></Cell>
                    </Fragment>
                  )
                })}
              </IndexBar>
            )}
          </Tab>
          <Tab title="自定义索引列表">
            {activeTab === 1 && (
              <IndexBar indexList={customIndexList} scrollTop={scrollTop}>
                {customIndexList.map((item) => {
                  return (
                    <Fragment key={item.index}>
                      <IndexAnchor index={item}>
                        <Text>{'标题' + item}</Text>
                      </IndexAnchor>
                      <Cell title="文本"></Cell>
                      <Cell title="文本"></Cell>
                      <Cell title="文本"></Cell>
                    </Fragment>
                  )
                })}
              </IndexBar>
            )}
          </Tab>
        </Tabs>
      </DemoPage>
    )
  }
}
