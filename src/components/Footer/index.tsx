import { FormEvent, useState } from "react";
import { Stack, Text, Heading, VStack, Button, Flex, Image, useBreakpointValue, Tooltip, Icon, HStack } from "@chakra-ui/react";
import { scrollAnimationToSessionPageById } from "../../utils/scrollAnimationToSessionPageById";

import { Textarea } from "../Form/AreaText";
import { Input } from "../Form/Input";

import { Link } from './styles';
import { FooterBlog } from "./FooterBlog";
import { Settings } from "../../_app/Settings";
import { FaCopyright, FaRegCopyright } from "react-icons/fa";

type FooterProps = {
  isNotContact?: boolean;
  isNotSessions?: boolean;
  isBlog?: boolean;
};

export function Footer({ isNotContact = false, isNotSessions = false, isBlog = false }: FooterProps) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');

  const isWideVersionBreakLayoutMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  function sendMessage(e: FormEvent): void {
    e.preventDefault();

    const body = `Meu Nome é ${name}, meu email para contato é ${email}. ${subject}`;

    const message = body.split(" ").join("%20");

    const link =
      `https://api.whatsapp.com/send?phone=5519992169073&text=${message}`;

    window.location.href = link;
  }

  return (
    <>
      {!isNotContact && !isBlog && (
        <Stack
          id="contact"
          w="100vw"
          maxW='100vw'
          minH="100vh"
          bg="gray.900"
          bgRepeat={'no-repeat'}
          bgImage="/images/footer-bg.png"
          objectFit="cover"
          p={["5", "7", "8"]}
          pb="14"
          direction="column"
          align="center"
          justify="center"
          spacing="12"
          zIndex={10}
        >
          <VStack data-aos="fade-down" data-aos-duration="1500">
            <Heading
              color="cyan.500"
              fontWeight="400"
              fontFamily="JetBrains Mono"
            >
              Fale Comigo
            </Heading>
            <Text
              color="gray.100"
              fontWeight="100"
              fontFamily="Nunito"
              textAlign="center"
            >
              se você ficou com alguma dúvida, preencha os campos abaixo e
              clique em enviar que entrarei em contato o mais rápido possível.
            </Text>
          </VStack>

          <VStack as="form" onSubmit={sendMessage} w={["100%", "90%", "80%"]} spacing="9">
            <Stack w="100%" direction={["column", "column", "row"]} spacing="4">
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                name="name"
                text="Seu Nome"
                w={["100%", "100%", "50%"]}
              />
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                text="Seu Melhor E-mail"
                w={["100%", "100%", "50%"]}
              />
              {/* <Input name="phone" text="Telefone de Contato" w="25%" /> */}
            </Stack>
            {/* <Stack w="100%" direction="row" spacing="6">
              <Input name="title" text="Qual é o Assunto?" w="100%" />
            </Stack> */}
            <Textarea
              value={subject}
              onChange={e => setSubject(e.target.value)}
              name="subject"
              text="Escreva sua mensagem..."
              w="100%"
            />
            <Button
              w="100%"
              type="submit"
              borderRadius="full"
              bg="cyan.500"
              size="lg"
              transition="0.2s"

              _hover={{
                bg: 'cyan.600'
              }}
            >
              Enviar
            </Button>
          </VStack>
        </Stack>
      )}
      
      {!isNotSessions && !isBlog && (
        <Flex
          w="100vw"
          minH="70vh"
          bg="transparent"
          px="20"
          py={["7", "7", "2"]}
          zIndex={10}
          direction={["column", "column", "row"]}
          align="center"
        >
          <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            spacing="6"
            color="gray.100"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
          >
            <Heading
              color="cyan.500"
              fontFamily="Montserrat"
              fontSize="2xl"
            >
              Menu
            </Heading>
            <Link onClick={() => scrollAnimationToSessionPageById('about')}>Quem sou</Link>
            <Link onClick={() => scrollAnimationToSessionPageById('services')}>O que faço</Link>
            <Link onClick={() => scrollAnimationToSessionPageById('portfolio')}>Portfólio</Link>
            <Link onClick={() => scrollAnimationToSessionPageById('contact')}>Fale comigo</Link>
          </VStack>
          <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            spacing="6"
            color="gray.100"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
            textAlign={["center", "center", "start"]}
          >
            <Heading
              color="cyan.500"
              fontFamily="Montserrat"
              fontSize="2xl"
            >
              Redes Sociais
            </Heading>
            <Text 
              as="a" 
              href={Settings.Networks.Linkedin}
              target="_blank"
              transition='0.2s'
              _hover={{ color: 'primaryColor.500' }}
            >
              Linkedin
            </Text>
            <Text 
              as="a" 
              href={Settings.Networks.Github}
              target="_blank"
              transition='0.2s'
              _hover={{ color: 'primaryColor.500' }}
            >
              Github
            </Text>
            <Text 
              as="a" 
              href={Settings.Networks.Instagram}
              target="_blank"
              transition='0.2s'
              _hover={{ color: 'primaryColor.500' }}
            >
              Instagram
            </Text>
          </VStack>
          <VStack
            w={["100%", "100%", "33%"]}
            h="80%"
            p="10"
            spacing="6"
            color="gray.100"
            fontFamily="Montserrat"
            align={["center", "center", "flex-start"]}
            justify={["center", "center", "flex-start"]}
            textAlign={["center", "center", "start"]}
          >
            <Heading
              color="cyan.500"
              fontFamily="Montserrat"
              fontSize="2xl"
            >
              Entre em Contato
            </Heading>
            <Text>(19) 99216 9073</Text>
            <Text>felipefelizatti215@gmail.com</Text>
          </VStack>

          {
            !isWideVersionBreakLayoutMobile && (
              <Tooltip 
                label="Hey, Hora de Codar!" 
                color="primaryGray.1"
                bg="primaryColor.500" 
                aria-label="Tooltop: é hora de codar"
              >
                <Image src="/robot-happy.gif" h="20rem" />
              </Tooltip>
            )
          }
        </Flex>
      )}
      
      {!isBlog && (
        <Flex
          w="100vw"
          h={['24vh', '20vh', '14vh']}
          zIndex={10}
          bg="gray.800"
          direction={['column', 'column', 'row']}
          align="center"
          justify={['center', 'space-between', 'space-between']}
          gap={4}
          py={6}
          px={[6, 8, 16]}
          className="footer-copyright"
          fontFamily="JetBrains Mono"
          fontWeight="700" 
          color="cyan.500"
          fontSize="md"
        >
          <HStack justify='center' align='center'>
            <Icon as={FaRegCopyright} />
            <Text>luizcode.com.br | 2022</Text>
          </HStack>
          <Text>Powered by {Settings.Site.Name}</Text>
        </Flex>
      )}

      {!!isBlog && <FooterBlog />}
    </>
  );
}
