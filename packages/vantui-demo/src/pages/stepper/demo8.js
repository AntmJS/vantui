/* eslint-disable */
import react from 'react'
import { Stepper, Toast } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState()
  function onChange(value) {
    Toast.loading({
      forbidClick: true,
    })
    setTimeout(() => {
      Toast.clear()
      setValue(value.detail)
    }, 1000)
  }

  return (
    <>
      <Stepper value={value} asyncChange onChange={onChange} />
      <Toast />
    </>
  )
}
