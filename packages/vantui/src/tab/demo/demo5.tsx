import { Tabs, Tab, Toast } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Tabs
      onDisabled={(e) =>
        Toast.show({
          message: e.detail.title + '已被禁',
          selector: '#tabs-demo4',
        })
      }
    >
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2" disabled={true}>
        内容 2
      </Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Toast id="tabs-demo4" />
    </Tabs>
  )
}
