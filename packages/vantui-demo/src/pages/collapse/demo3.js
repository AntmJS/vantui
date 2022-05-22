/* eslint-disable */
import react from 'react'
import { Collapse, CollapseItem, Toast } from '@antmjs/vantui'

export default function Demo() {
  const [values, setValues] = react.useState(['1'])

  return (
    <>
      <Collapse
        value={values}
        onChange={(e) => setValues(e.detail)}
        onOpen={(e) => Toast.show(`打开${e.detail}`)}
        onClose={(e) => Toast.show(`关闭${e.detail}`)}
      >
        <CollapseItem title="有赞微商城" name="1">
          提供多样店铺模板，快速搭建网上商城
        </CollapseItem>
        <CollapseItem title="有赞零售" name="2">
          网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
        </CollapseItem>
        <CollapseItem title="有赞美业" name="3">
          线上拓客，随时预约，贴心顺手的开单收银
        </CollapseItem>
      </Collapse>
      <Toast id="collapse-mess" />
    </>
  )
}
