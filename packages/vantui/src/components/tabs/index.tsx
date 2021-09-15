import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
// import Sticky from '../sticky/index'
// import Info from '../info/index'
import { TabsProps } from '../../../types/tabs'
// import * as computed from './wxs'

export default function Index(props: TabsProps) {
  const {
    // swipeable,
    // active = 0,
    // lazyRender = true,

    type = 'line',
    // sticky,
    // zIndex = 1,
    // offsetTop = 0,
    // container,
    // scrollable,
    // border,
    // scrollWithAnimation,
    // scrollLeft,
    // color,
    // ellipsis = true,
    // lineOffsetLeft,
    // lineHeight = -1,
    // skipTransition,
    // duration = 0.3,
    // lineWidth = 40,
    // currentIndex,
    // titleActiveColor,
    // titleInactiveColor,
    // swipeThreshold = 5,
    // tabs,
    // animated,
    // style,
    // className,
    // children,
    // ...others
  } = props

  return (
    <View className={'custom-class ' + utils.bem('tabs', [type])}>
      {/* <Sticky
        disabled={!sticky}
        zIndex={zIndex}
        offsetTop={offsetTop}
        container={container}
        onScroll={this.onTouchScroll}
      >
        <View
          className={
            utils.bem('tabs__wrap', {
              scrollable,
            }) +
            ' ' +
            (type === 'line' && border ? 'van-hairline--top-bottom' : '')
          }
        >
          {this.props.renderNavleft}
          <ScrollView
            scrollX={scrollable}
            scrollWithAnimation={scrollWithAnimation}
            scrollLeft={scrollLeft}
            className={utils.bem('tabs__scroll', [type])}
            style={color ? 'border-color: ' + color : ''}
          >
            <View
              className={
                utils.bem('tabs__nav', [
                  type,
                  {
                    complete: !ellipsis,
                  },
                ]) + ' nav-class'
              }
              style={computed.navStyle(color, type)}
            >
              {type === 'line' && (
                <View
                  className="van-tabs__line"
                  style={computed.lineStyle({
                    color,
                    lineOffsetLeft,
                    lineHeight,
                    skipTransition,
                    duration,
                    lineWidth,
                  })}
                ></View>
              )}
              {tabs.map((item: any, index: any) => {
                return (
                  <View
                    key={item.index}
                    data-index={index}
                    className={
                      computed.tabClass(index === currentIndex, ellipsis) +
                      ' ' +
                      utils.bem('tab', {
                        active: index === currentIndex,
                        disabled: item.disabled,
                        complete: !ellipsis,
                      })
                    }
                    style={computed.tabStyle({
                      active: index === currentIndex,
                      ellipsis,
                      color,
                      type,
                      disabled: item.disabled,
                      titleActiveColor,
                      titleInactiveColor,
                      swipeThreshold,
                      scrollable,
                    })}
                    onTap={this.onTap}
                  >
                    <View
                      className={ellipsis ? 'van-ellipsis' : ''}
                      style={item.titleStyle}
                    >
                      {item.title}
                      {(item.info !== null || item.dot) && (
                        <Info
                          info={item.info}
                          dot={item.dot}
                          className="van-tab__title__info"
                        ></Info>
                      )}
                    </View>
                  </View>
                )
              })}
            </View>
          </ScrollView>
          {this.props.renderNavright}
        </View>
      </Sticky>
      <View
        className="van-tabs__content"
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <View
          className={
            utils.bem('tabs__track', [
              {
                animated,
              },
            ]) + ' van-tabs__track'
          }
          style={computed.trackStyle({
            duration,
            currentIndex,
            animated,
          })}
        >
          {children}
        </View>
      </View> */}
    </View>
  )
}
