import type {
  MiniAppGetCssVarNameFn,
  ThemeParamsGetCssVarNameFn,
  ViewportGetCSSVarNameFn,
} from '@telegram-apps/sdk-solid'

export function camelToKebab(value: string): string {
  return value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
}

export function snakeToKebab(value: string): string {
  return value.replace(/_[a-z]/g, match => `-${match[1]}`)
}

export const formatThemeParamsCssVar: ThemeParamsGetCssVarNameFn = key => {
  return `--theme-${snakeToKebab(key)}`
}

export const formatViewportCssVar: ViewportGetCSSVarNameFn = key => {
  const kebabed = camelToKebab(key)
  return key.startsWith('safeArea') || key.startsWith('contentSafeArea')
    ? `--${kebabed}`
    : `--viewport-${kebabed}`
}

export const formatMiniAppCssVar: MiniAppGetCssVarNameFn = key => {
  return `--mini-app-${camelToKebab(key)}`
}
