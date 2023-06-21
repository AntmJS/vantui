import { Tabs, Tab, Toast } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Tabs
      active={1}
      onChange={(e) =>
        Toast.show({
          message: e.detail.name,
          selector: '#tabs-demo1',
        })
      }
    >
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
      <Toast id="tabs-demo1" />
    </Tabs>
  )
}
