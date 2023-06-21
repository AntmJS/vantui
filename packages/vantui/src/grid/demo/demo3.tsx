import { Grid, GridItem, Image } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Grid columnNum="3" border={false}>
      {[1, 2, 3].map((index) => (
        <GridItem key={index}>
          <Image
            style="width: 100%; height: 90px;"
            src={`https://img.yzcdn.cn/vant/apple-${index + 1}.jpg`}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
