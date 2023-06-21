import { Grid, GridItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Grid clickable columnNum="2">
      <GridItem
        icon="homeO"
        linkType="navigateTo"
        url="/pages/dashboard/index"
        text="Navigate 跳转"
      />
      <GridItem
        icon="search"
        linkType="reLaunch"
        url="/pages/dashboard/index"
        text="ReLaunch 跳转"
      />
    </Grid>
  )
}
