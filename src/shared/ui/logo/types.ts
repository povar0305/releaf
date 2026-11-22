export const LogoVariant = {
  Default: 'default',
  Joy: 'joy',
  Love: 'love',
  Sad: 'sad',
  Sleep: 'sleep',
  Think: 'think',
  Wink: 'wink',
  Wow: 'wow',
} as const;

export type LogoVariantType = typeof LogoVariant[keyof typeof LogoVariant]

export const LogoLayout = {
  Horizontal: 'horizontal',
  Bottom: 'bottom',
} as const

export type LogoLayoutType = typeof LogoLayout[keyof typeof LogoLayout]

export type RLogoProps = {
  color?: string
  label?: string
  size?: number
  variant?: LogoVariantType
  showBrand?: boolean
  layout?: LogoLayoutType
}

