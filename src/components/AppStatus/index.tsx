import { 
  Spinner,
  Icon, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody
} from "@chakra-ui/react";
import { useAppStatus } from "../../contexts";
import { FaCheck } from "react-icons/fa";

import { AppStatusStyles } from './styles'

type TAppStatusProps = { };

const size = '5rem';

export const AppStatus = ({ }: TAppStatusProps) => {
  const { AppStatus, appStatus } = useAppStatus();

  const isShow = appStatus === 'loading' || appStatus === 'done';
  
  return (
    <Modal isOpen={isShow} onClose={AppStatus.closeAppStatus} isCentered>
      <ModalOverlay zIndex={1000} />
      <ModalContent zIndex={1001} w={size} h={size} borderRadius={9999} backgroundColor={'#000000'}>
        <ModalBody
          bg={'#171923'}
          borderRadius={20}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <AppStatusStyles>
            {appStatus === 'loading' && <Spinner thickness='4px' size={'lg'} color={'#48CDD0'} />}
            {appStatus === 'done' && <Icon as={FaCheck} className='status-done' fontSize={'3xl'} color={'#48CDD0'} />}
          </AppStatusStyles>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
