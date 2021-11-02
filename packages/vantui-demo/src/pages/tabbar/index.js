import { Component } from 'react'
import { showToast } from '@tarojs/taro'

import { TabbarItem, Tabbar, Image } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    active: 0,
    active2: 'home',
    active3: 0,
    active4: 0,
    active5: 0,
    active6: 0,
    icon: {
      normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
      active: 'https://img.yzcdn.cn/vant/user-active.png',
    },
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
  }

  handleChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
    showToast({ title: `点击标签 ${event.detail + 1}`, icon: 'none' })
  }

  render() {
    const { active, active2, active3, active4, icon, active5, active6 } =
      this.state
    return (
      <DemoPage title="Tabbar 标签栏">
        <>
          <DemoBlock title="基础用法">
            <Tabbar
              active={active}
              className="tabbar-position"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active' },
                  },
                  target: {
                    dataset: { key: 'active' },
                  },
                })
              }}
            >
              <TabbarItem icon="home-o">标签</TabbarItem>
              <TabbarItem icon="search">标签</TabbarItem>
              <TabbarItem icon="friends-o">标签</TabbarItem>
              <TabbarItem icon="setting-o">标签</TabbarItem>
            </Tabbar>
          </DemoBlock>
          <DemoBlock title="通过名称匹配">
            <Tabbar
              active={active2}
              className="tabbar-position"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active2' },
                  },
                  target: {
                    dataset: { key: 'active2' },
                  },
                })
              }}
            >
              <TabbarItem name="home" icon="home-o">
                标签
              </TabbarItem>
              <TabbarItem name="search" icon="search">
                标签
              </TabbarItem>
              <TabbarItem name="friends" icon="friends-o">
                标签
              </TabbarItem>
              <TabbarItem name="setting" icon="setting-o">
                标签
              </TabbarItem>
            </Tabbar>
          </DemoBlock>
          <DemoBlock title="显示徽标">
            <Tabbar
              active={active3}
              className="tabbar-position"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active3' },
                  },
                  target: {
                    dataset: { key: 'active3' },
                  },
                })
              }}
            >
              <TabbarItem icon="home-o">标签</TabbarItem>
              <TabbarItem icon="search" dot>
                标签
              </TabbarItem>
              <TabbarItem icon="friends-o" info="5">
                标签
              </TabbarItem>
              <TabbarItem icon="setting-o" info="20">
                标签
              </TabbarItem>
            </Tabbar>
          </DemoBlock>
          <DemoBlock title="自定义图标">
            <Tabbar
              active={active4}
              className="tabbar-position"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active4' },
                  },
                  target: {
                    dataset: { key: 'active4' },
                  },
                })
              }}
            >
              <TabbarItem
                info="3"
                renderIcon={
                  <>
                    <Image
                      src={icon.normal}
                      mode="aspectFit"
                      style="width: 30px; height: 18px;"
                    ></Image>
                  </>
                }
                renderIconActive={
                  <>
                    <Image
                      src={icon.active}
                      mode="aspectFit"
                      style="width: 30px; height: 18px;"
                    ></Image>
                  </>
                }
              >
                自定义
              </TabbarItem>
              <TabbarItem icon="search">标签</TabbarItem>
              <TabbarItem icon="setting-o">标签</TabbarItem>
            </Tabbar>
          </DemoBlock>
          <DemoBlock title="自定义颜色">
            <Tabbar
              active={active5}
              className="tabbar-position"
              activeColor="#07c160"
              inactiveColor="#000"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active5' },
                  },
                  target: {
                    dataset: { key: 'active5' },
                  },
                })
              }}
            >
              <TabbarItem icon="home-o">标签</TabbarItem>
              <TabbarItem icon="search">标签</TabbarItem>
              <TabbarItem icon="friends-o">标签</TabbarItem>
              <TabbarItem icon="setting-o">标签</TabbarItem>
            </Tabbar>
          </DemoBlock>
          <DemoBlock title="切换标签事件">
            <Tabbar
              active={active6}
              className="tabbar-position"
              safeAreaInsetBottom={false}
              onChange={(e) => {
                this.handleChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'active6' },
                  },
                  target: {
                    dataset: { key: 'active6' },
                  },
                })
              }}
            >
              <TabbarItem icon="home-o">标签1</TabbarItem>
              <TabbarItem icon="search">标签2</TabbarItem>
              <TabbarItem icon="friends-o">标签3</TabbarItem>
              <TabbarItem icon="setting-o">标签4</TabbarItem>
            </Tabbar>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
