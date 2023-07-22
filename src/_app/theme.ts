import React from 'react'

type Style = React.CSSProperties

const presets = {
  fixed: {
    position: 'fixed',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
}

type KeyPresets = keyof typeof presets

type ThemePresets = Record<KeyPresets, Style>

// 

const functionsPresets = {
  index: function (zValue: number): Style {
    return {
      zIndex: zValue,
    }
  },

  onHover: function (style: Style): Style {
    return {
      '&:hover': style,
    } as Style
  }
}

type ThemeFunctionPresets = typeof functionsPresets

// 

const spacingBaseValue = 0.5

const AppTheme = {
  values: {
    spacing: spacingBaseValue,
    width: '100vw',
    height: '100svh',
    auto: 'auto',
  },
  colors: {
    transparent: '#FFFFFF00'
  },
  spacing: {
    value: function (multiplier: number, unity: 'rem' | 'px' = 'rem') {
      return `${multiplier * spacingBaseValue}${unity}`
    },

    gap: function (multiplier: number, unity: 'rem' | 'px' = 'rem') {
      return {
        gap: `${multiplier * spacingBaseValue}${unity}`,
      }
    },
  },
  presets: presets as ThemePresets,
  funcs: functionsPresets as ThemeFunctionPresets,
}

type Theme = typeof AppTheme

export const theme: Theme = AppTheme as Theme

export const themeProvider = {
  createComponentStyle: (createStyle: (_theme: Theme) => Style) => {
    const style: Style = createStyle(theme)

    return style
  },
}
