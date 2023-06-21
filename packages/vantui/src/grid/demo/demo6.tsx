import { Grid, GridItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Grid direction="horizontal" columnNum="2">
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
      <GridItem icon="photo-o" text="文字" />
    </Grid>
  )
}
