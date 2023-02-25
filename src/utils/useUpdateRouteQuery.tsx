import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppSelector } from '../contexts'

type UseUpdateRouteQueryProps = {
  onNavigate?: () => any;
  query: 'category' | 'id'
}

const timeout = 150

export const useUpdateRouteQuery = ({ query, onNavigate = () => null }: UseUpdateRouteQueryProps) => {
  const router = useRouter()

  const { AppStatus } = useAppSelector('AppStatus')

  const onScreenNavigate = () => {
    AppStatus.set('loading')
    onNavigate()
  }

  useEffect(() => {
    if (AppStatus.is === 'loading') {
      setTimeout(() => {
        AppStatus.set('done')
      }, timeout)
    }
  }, [router?.query?.[query]])

  return {
    onNavigate: onScreenNavigate,
  }
}
