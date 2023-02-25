import { Button, useBreakpoint, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { ItemPortfolioFolderStyle } from './styles';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt'

interface IItemPortfolioFolderProps {
  title: string;
  text: string;
  href: string;
  animatedFor: 'left' | 'right';
}

export function ItemPortfolioFolder({ text, title, animatedFor, href }: IItemPortfolioFolderProps) {
  const animated = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    '2xl': true,
  });

  const width = useBreakpointValue({
    base: '100%',
    sm: '100%',
    md: '100%',
    lg: '25rem',
    xl: '25rem',
    '2xl': '25rem',
  });

  const animationProps = {
    left: animatedFor === "left",
    right: animatedFor === 'right'
  }

  return (
    <Fade {...animationProps}>
      <Tilt 
        tiltEnable={animated} 
        scale={animated ? 1.05 : 1} 
        glarePosition={animated ? 'all' : undefined}
        glareEnable={animated} 
        glareColor='#48CDD0' 
        glareMaxOpacity={0.09}
      >
        <ItemPortfolioFolderStyle style={{ width, minWidth: width }}>
          <h1>{title}</h1>
          <p>{text}</p>

          <Link href={href} passHref>
            <Button
              as="a"
              w="100%"
              borderRadius="full"
              bg="cyan.500"
              mt="6"
              size="lg"
              transition="0.2s"

              _hover={{
                bg: 'cyan.600'
              }}
            >
              Ver Portfólio
            </Button>
          </Link>
        </ItemPortfolioFolderStyle>
      </Tilt>
    </Fade>
  );
}