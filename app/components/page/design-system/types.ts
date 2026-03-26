// 色彩語意鍵
export type PaletteKey =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

// 導覽主題
export type Topic = {
  id: string
  icon: string
  title: string
  description: string
}

// 色票資料
export type Swatch = {
  key: PaletteKey
  shade: number
  bgClass: string
  hex: string
  textClass: string
}

// 色票群組
export type ColorGroup = {
  name: string
  usage: string
  swatches: Swatch[]
}

// 字體樣本
export type TypographySample = {
  token: string
  className: string
  text: string
  usage: string
}

// 圖示樣本
export type IconSample = {
  label: string
  icon: string
  usage: string
}

// 規格樣本
export type RadiusToken = {
  token: string
  value: string
  previewClass: string
  usage: string
}

export type ShadowToken = {
  token: string
  usage: string
  previewClass: string
  value: string
}

export type SpaceToken = {
  token: string
  value: string
  widthClass: string
  usage: string
}

// 版型規格
export type Breakpoint = {
  width: string
  device: string
  padding: string
}

export type GridRule = {
  condition: string
  columns: string
}

export type HeaderHeight = {
  token: string
  value: string
  usage: string
  barClass: string
}
