import { View } from '@tarojs/components'
import { Row, Col, Icon } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      <Row>
        <View className="demo-block__title">基本用法</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon
            name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">提示信息</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" dot></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" info="9"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" info="99+"></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">图标颜色</View>
        <Col className="col" span="6">
          <Icon
            color="#1989fa"
            name="chat-o"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon
            color="#07c160"
            name="chat-o"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">图标大小</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="40" className="icon"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="3rem" className="icon"></Icon>
        </Col>
      </Row>

      <Row>
        <View className="demo-block__title">自定义图标</View>
        <Col className="col" span="6">
          <Icon name="demo1" classPrefix="page-icon" size="40px" />
        </Col>
        <Col className="col" span="6">
          <Icon name="demo2" classPrefix="page-icon" size="40px" />
        </Col>
        <Col className="col" span="6">
          <Icon name="demo3" classPrefix="page-icon" size="40px" />
        </Col>
      </Row>
    </>
  )
}
