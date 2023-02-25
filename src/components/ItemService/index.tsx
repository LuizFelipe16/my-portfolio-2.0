import { Icon, useBreakpointValue } from "@chakra-ui/react";
import { ItemServiceStyle } from './styles';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt'

interface IItemServiceProps {
  mt?: string;
  animatedFor: 'top' | 'bottom'
  icon: any;
  text: string;
  title: string;
}

export function ItemService({ mt, title, text, icon, animatedFor }: IItemServiceProps) {
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
    top: animatedFor === 'top',
    bottom: animatedFor === 'bottom'
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
        <ItemServiceStyle style={{ width, minWidth: width }}>
          <Icon as={icon} color="cyan.500" fontSize={["3rem", "3rem", "4rem"]} />
          <br />
          <h1>{title}</h1>
          <p>{text}</p>
        </ItemServiceStyle>
      </Tilt>
    </Fade>
  );
}