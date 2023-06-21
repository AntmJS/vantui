import { Tabs, Tab, Toast } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Tabs
      active={'a'}
      onChange={(e) =>
        Toast.show({
          message: e.detail.name,
          selector: '#tabs-demo2',
        })
      }
    >
      <Tab title="标签 a" name="a">
        内容 a
      </Tab>
      <Tab title="标签 b" name="b">
        内容 b
      </Tab>
      <Tab title="标签 c" name="c">
        内容 c
      </Tab>
      <Toast id="tabs-demo2" />
    </Tabs>
  )
}
