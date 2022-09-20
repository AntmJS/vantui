/* eslint-disable */
import react from 'react'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="加载中..." />
    </>
  )
}
