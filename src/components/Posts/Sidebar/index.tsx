import { Flex, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button, Icon, useDisclosure, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { FaIndent } from "react-icons/fa";
import { Category } from "../../../types";
import { Settings } from "../../../_app/Settings";
import { ItemSidebarNav } from "./ItemSidebarNav";

type NavbarProps = {
  category: Category;
};

export function SidebarNav({ category }: NavbarProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex
        w="100vw"
        h="14vh"
        position="fixed"
        bg="transparent"
        zIndex="10000"
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
        <DrawerOverlay zIndex="100000">
          <DrawerContent bg="gray.900" p="4">
            <DrawerCloseButton onClick={onClose} color="gray.50" mt="6" />
            <DrawerHeader
              display="flex"
              flexDirection="row"
              mb="5"
              color="cyan.500"
              fontSize="2xl"
            >
              {Settings.Site.BlogTitle}
            </DrawerHeader>
            <DrawerBody>
              <VStack
                w="100%"
                color="gray.50"
                fontSize="md"
                spacing="3"
                align="flex-start"
                fontFamily="Montserrat"
              >
                <ItemSidebarNav 
                  isPage 
                  isActive={category === 'web-react'}
                  href="posts/web-react" 
                  text="WEB"
                />
                <ItemSidebarNav 
                  isPage 
                  isActive={category === 'mobile-react-native'}
                  href="posts/mobile-react-native"  
                  text="Mobile" 
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
