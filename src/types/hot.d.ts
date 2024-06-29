import type { PageResult, GoodsItem } from './global'

export type HotResult = {
  id: string
  bannerPicture: string
  title: string
  subTypes: SubTypeItem[]
}
export type SubTypeItem = {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}
