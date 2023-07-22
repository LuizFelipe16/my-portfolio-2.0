import { HStack } from "@chakra-ui/react";
import { valueLeftContentTexts } from "../../SessionsPageIndex/Entry/styles";

import { ItemNav } from './ItemNav';

export function Navbar() {
  return (
    <HStack
      w="100vw"
      h="auto"
      position="fixed"
      top="0"
      pl={valueLeftContentTexts}
      py="3"
      pt='5'

      // boxShadow="dark-lg"
      textShadow="dark-lg"
      zIndex="999"

      // background="primaryGray.1"
      // borderBottomColor="cyan.500"
      // borderBottomWidth={2}
      backdropFilter='blur(4px) brightness(85%)'
      spacing="12"
      align="center"
      justify="flex-start"
    >
      <ItemNav href="about" text="Quem sou" />
      <ItemNav href="services" text="O que faço" />
      <ItemNav href="portfolio" text="Projetos" />
      <ItemNav href="contact" text="Fale comigo" />
      <ItemNav isPage href="posts/web-react" text="Blog" />
    </HStack>
  );
}