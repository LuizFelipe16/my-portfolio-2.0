import { TAppStatusProvider, useAppStatus } from './AppStatusContext'
import { ThemeProviderData, useTheme } from './Theme'

type Selector = 'Theme' | 'AppStatus'

const captureSelector = (selector: Selector): TAppStatusProvider | {} | ThemeProviderData => {
  if (selector === 'AppStatus') {
    const AppStatus = useAppStatus()
    return {
      AppStatus,
    }
  } else if (selector === 'Theme') {
    const Theme = useTheme()
    return {
      Theme,
    }
  } else {
    return {}
  }
}

type AppSelector = {
  Theme: ThemeProviderData;
  AppStatus: TAppStatusProvider;
}

export function useAppSelector(selector: Selector | Selector[]): AppSelector {
  if (Array.isArray(selector)) {
    let selectors = {}

    selector.forEach(s => {
      const capturedSelector = captureSelector(s)
      
      selectors = {
        ...selectors,
        ...capturedSelector,
      }

      return
    })

    return selectors
  } else if (typeof selector === 'string') {
    return captureSelector(selector)
  }

  return {}
}
