/* eslint-disable */
export const sku = [
  {
    id: 1,
    name: '颜色',
    items: [
      {
        name: '亮黑色',
        id: 11,
        color: '#131111',
        // 自定义属性...
      },
      {
        name: '釉白色',
        id: 12,
        mark: '首发',
        color: '#ffff',
      },
      {
        name: '秘银色',
        id: 13,
        color: '#d2cccc',
      },
      {
        name: '夏日胡杨',
        id: 14,
        color: '#dd5151',
      },
    ],
  },
  {
    id: 2,
    name: '版本',
    items: [
      {
        name: '8GB+128GB',
        id: 21,
      },
      {
        name: '8GB+256GB',
        id: 22,
      },
    ],
  },
]
export const goodsList = [
  {
    id: 1,
    skuIds: [11, 21], // 可以无序
    skuName: '亮黑色&8GB+128GB', // 自定义属性
    // 自定义属性...
  },
  {
    id: 2,
    skuIds: [11, 22],
    skuName: '亮黑色&8GB+256GB',
    count: 0, // 自定义属性
  },
  {
    id: 3,
    skuIds: [12, 21],
    skuName: '釉白色&8GB+128GB',
  },
  {
    id: 4,
    skuIds: [12, 22],
    skuName: '釉白色&8GB+256GB',
  },
  {
    id: 4,
    skuIds: [21, 13],
    skuName: '秘银色&8GB+128GB',
  },
  {
    id: 6,
    skuIds: [13, 22],
    skuName: '秘银色&8GB+256GB',
    disabled: true, // 无法选择的商品
  },
  {
    id: 7,
    skuIds: [14, 22],
    skuName: '夏日胡杨&8GB+256GB',
  },
]
