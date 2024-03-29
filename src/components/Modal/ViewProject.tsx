import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Link,
  Icon,
  VStack,
  Flex,
  HStack
} from '@chakra-ui/react';
import { FaGithub, FaEye, FaDesktop } from 'react-icons/fa';
import { Project } from '../../services';

interface IModalViewProjectProps {
  isOpen: boolean;
  onClose: () => void;

  project: Project;
}

export function ModalViewProject({ isOpen, onClose, project }: IModalViewProjectProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent bg="gray.900" color="gray.100" maxWidth={'95%'}>
        <ModalHeader>
          <HStack spacing={2}>
            <Icon as={FaDesktop} ml="2" mt='1' fontSize="xl" color={'cyan.500'} />
            <Text fontSize={'2xl'}>{project.title}</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <Text fontFamily="Nunito" lineHeight="7" fontWeight="300" fontSize="lg">
              {project.description}
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter fontFamily="Montserrat" gap={['4', '4', '0']} flexDirection={['column', 'column', 'row']}>
          {!!project?.github && (
            <Flex
              align="center"
              justify="center"
              mr="4"
              p="2"
              px="4"
              borderRadius="full"
              bg="cyan.500"
              color="gray.900"
              fontWeight="600"
              minHeight={'40px'}
              fontSize="sm"
              textAlign="center"
              width={['100%', '100%', 'auto']}

              transition="0.2s"
              _hover={{
                textDecoration: 'none',
                bg: 'cyan.600'
              }}
            >
              <Link href={project?.github} target="_blank">
                Acessar Código/Documentação
              </Link>
              <Icon as={FaGithub} ml="2" fontSize="lg" />
            </Flex>
          )}
          {!!project?.link && (
            <Flex
              align="center"
              justify="center"
              mr="4"
              p="2"
              px="4"
              borderRadius="full"
              bg="cyan.500"
              color="gray.900"
              fontWeight="600"
              fontSize="sm"
              minHeight={'40px'}
              textAlign="center"
              width={['100%', '100%', 'auto']}

              transition="0.2s"
              _hover={{
                textDecoration: 'none',
                bg: 'cyan.600'
              }}
            >
              <Link href={project?.link} target="_blank">
                Acessar Site/Plataforma Web
              </Link>
              <Icon as={FaEye} ml="2" fontSize="lg" />
            </Flex>
          )}
          <Button
            // color="gray.900"
            onClick={onClose}
            // borderRadius="full"
            // fontFamily="Montserrat"
            // fontWeight="600"
            // width={['100%', '100%', 'auto']}
            // fontSize="sm"
            // bg="cyan.500"
            // size="md"
            // transition="0.2s"

            // _hover={{
            //   bg: 'cyan.600'
            // }}

              align="center"
              justify="center"
              mr="4"
              p="2"
              px="4"
              borderRadius="full"
              bg="cyan.500"
              color="gray.900"
              fontWeight="600"
              fontSize="sm"
              textAlign="center"
              width={['100%', '100%', 'auto']}
              minWidth='100'
              minHeight={'40px'}

              transition="0.2s"
              _hover={{
                bg: 'cyan.600'
              }}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}