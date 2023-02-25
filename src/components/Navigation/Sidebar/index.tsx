import { Box, Flex, Drawer, HStack, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue, Button, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { FaIndent } from "react-icons/fa";
import Link from 'next/link';
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";
import { ItemSidebarNav } from "./ItemSidebarNav";

export function SidebarNav() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
        w="100vw"
        h="14vh"
        position="fixed"
        bg="transparent"
        zIndex="999"
        align="center"
        justify="flex-end"
        py="6"
        px="8"
        top="0"
      >
        <Button bg='cyan.500' size="md" color="gray.900" onClick={onOpen}>
          <Icon as={FaIndent} />
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay zIndex="999">
          <DrawerContent bg="gray.900" p="4">
            <DrawerCloseButton onClick={onClose} color="gray.50" mt="6" />
            <DrawerHeader
              display="flex"
              flexDirection="row"
              mb="12"
              color="cyan.500"
              fontSize="2xl"
            >
              Navegue
            </DrawerHeader>
            <DrawerBody>
              <VStack
                w="100%"
                color="gray.50"
                fontSize="lg"
                spacing="10"
                align="flex-start"
                fontFamily="Montserrat"
              >
                <ItemSidebarNav href="about" text="QUEM SOU" />
                <ItemSidebarNav href="services" text="O QUE FAÇO" />
                <ItemSidebarNav href="portfolio" text="PROJETOS" />
                <ItemSidebarNav href="contact" text="FALE COMIGO" />
                <ItemSidebarNav isPage href="posts/web-react" text="BLOG" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}