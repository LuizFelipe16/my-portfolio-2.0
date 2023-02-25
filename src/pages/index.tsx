import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { MenuButtons } from "../components/MenuButtons";
import { Footer } from "../components/Footer";

import {
  SessionWelcome,
  SessionAbout,
  SessionSkills,
  SessionServices,
  SessionPortfolio,
  SessionEntry
} from "../components/SessionsPageIndex";

function IndexPage() {
  return (
    <>
      <Flex maxWidth='100vw' minWidth='100vw' direction="column">
        <Head><title>Luiz Felipe | Meu Portfólio</title></Head>
        <MenuButtons />

        <SessionEntry />
        {/* <SessionWelcome /> */}
        <SessionAbout />
        <SessionSkills />
        <SessionServices />
        <SessionPortfolio />

        <Footer />
      </Flex>
    </>
  );
}

export default IndexPage;
