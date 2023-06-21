/* eslint-disable */
export const mockGoods = () => {
  const initData = [
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title:
        '中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】',
      price: '¥165.00',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: 'HLA海澜之家马丁靴男士高帮男靴复古工装鞋',
      price: '¥361.00',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title:
        '洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】',
      price: '¥22.50',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: '夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌',
      price: '¥212.00',
    },
  ]
  return new Array(33).fill('').map((_, index) => {
    return {
      index,
      ...initData[index % 4],
      isCutPrice: index % 2 === 0 ? true : false,
    }
  })
}
