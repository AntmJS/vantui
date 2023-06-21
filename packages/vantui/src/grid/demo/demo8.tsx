import { Grid, GridItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Grid columnNum="2">
      <GridItem icon="home-o" text="文字" dot />
      <GridItem icon="search" text="文字" badge="99+" />
    </Grid>
  )
}
