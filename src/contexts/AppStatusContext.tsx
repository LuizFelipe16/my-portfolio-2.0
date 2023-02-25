import { useDisclosure } from '@chakra-ui/react';
import { createContext, useState, useContext, useEffect, SetStateAction, Dispatch } from 'react';

export type TAppStatus = 'loading' | 'done' | 'none';

export type TAppStatusProvider = {
  isShow: boolean;
  AppStatus: {
    set: Dispatch<SetStateAction<TAppStatus>>;
    get: () => TAppStatus;
    is: TAppStatus;
    showAppStatus: () => void;
    closeAppStatus: () => void;
  },
  appStatus: TAppStatus;
  setAppStatus: Dispatch<SetStateAction<TAppStatus>>;
  set: Dispatch<SetStateAction<TAppStatus>>;
  is: TAppStatus;
};

const AppStatusContent = createContext({} as TAppStatusProvider);

export function AppStatusProvider({ children }: any) {
  const { isOpen: isShow, onOpen: showAppStatus, onClose: closeAppStatus } = useDisclosure();
  const [appStatus, setAppStatus] = useState<TAppStatus>('none');
  
  const AppStatus = {
    set: setAppStatus,
    get: () => appStatus,
    is: appStatus,
    showAppStatus,
    closeAppStatus
  };

  useEffect(() => {
    if (appStatus === 'loading') {
      showAppStatus()
    }
    if (appStatus === 'none') {
      closeAppStatus()
    }
    if (appStatus === 'done') {
      setTimeout(() => {
        setAppStatus('none');
      }, 2000)
    }
  }, [appStatus]);

  return (
    <AppStatusContent.Provider value={{ 
      AppStatus, 
      isShow: !isShow, 
      setAppStatus, 
      appStatus,
      set: setAppStatus,
      is: appStatus,
    }}>
      {children}
    </AppStatusContent.Provider>
  )
}

export const useAppStatus = () => useContext(AppStatusContent);
