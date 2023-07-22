import React from 'react'

type Style = React.CSSProperties

const presets = {
  fixed: {
    position: 'fixed',
  },
  absolute: {
    position: 'absolute',
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
  whole: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
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
const baseUnit = 'rem'

type ThemeUnit = 'rem' | 'px'

const AppTheme = {
  values: {
    spacing: spacingBaseValue,
    unit: baseUnit,
    width: '100vw',
    height: '100svh',
    auto: 'auto',
  },
  colors: {
    primary1: '#48CDD0',
    primary2: '#10CDD0',
    primary3: '#00CDD0',
    secondary1: '#171923',
    transparent: '#FFFFFF00'
  },
  spacing: {
    value: function (multiplier: number, unit: ThemeUnit = baseUnit) {
      return `${multiplier * spacingBaseValue}${unit}`
    },

    gap: function (multiplier: number, unit: ThemeUnit = baseUnit) {
      return {
        gap: `${multiplier * spacingBaseValue}${unit}`,
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
