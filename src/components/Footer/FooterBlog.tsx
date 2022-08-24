import { VStack, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import { Settings } from '../../_app/Settings';

export function FooterBlog() {
  return (
    <VStack
      w="100vw"
      minH="25vh"
      spacing={4}
      zIndex={10}
      bg="gray.700"
      color='gray.200'
      align="center"
      px={2}
      py={2}
      fontSize="sm"
      justify="center"
      className="footer-copyright"
      fontFamily="Montserrat"
    >
      <HStack spacing={3}>
       <Text
          as='a'
          href={Settings.Networks.Instagram}
          target="_blank"
          rel="noreferrer noopener"
          fontSize='2xl'
          transition='0.2s'
          _hover={{ color: 'primaryColor.500' }}
        >
          <AiFillInstagram />
        </Text>
       <Text
          as='button'
          onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
          fontSize='xl'
          transition='0.2s'
          _hover={{ color: 'primaryColor.500' }}
        >
          <FaLongArrowAltUp />
        </Text>
      </HStack>
      <Text fontWeight="300" textAlign={'center'}>Meu Blog © 2022 • Publicado com código...</Text>
      <Link href='/' passHref>
        <Text 
          textDecoration={'underline'} 
          cursor={'pointer'} 
          fontWeight="400"
        >
          Visitar página principal
        </Text>
      </Link>
    </VStack>
  );
}
