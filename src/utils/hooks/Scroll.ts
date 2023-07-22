import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window?.pageYOffset || document?.documentElement?.scrollTop

      setIsScrollAtTop(scrollTop === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    atTop: isScrollAtTop,
  }
}
