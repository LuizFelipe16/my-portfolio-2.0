import { Heading, Img, Progress, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';

interface IItemSkillProps {
  title: string;
  text: string;
  img: string;
  mt: string;
  animatedFor: 'left' | 'right'
}

export function ItemSkill({ mt, title, text, img, animatedFor }: IItemSkillProps) {
  const height = useBreakpointValue({
    base: 'auto',
    sm: 'auto',
    md: 'auto',
    lg: '12rem',
    xl: '12rem',
    '2xl': '12rem',
  });

  const textAlign = useBreakpointValue({
    base: 'center',
    sm: 'center',
    md: 'center',
    lg: 'justify',
    xl: 'justify',
    '2xl': 'justify',
  });

  const align = useBreakpointValue({
    base: 'center',
    sm: 'center',
    md: 'center',
    lg: 'flex-start',
    xl: 'flex-start',
    '2xl': 'flex-start'
  });

  const justify = useBreakpointValue({
    base: 'center',
    sm: 'center',
    md: 'center',
    lg: 'space-between',
    xl: 'space-between',
    '2xl': 'space-between'
  });

  const direction = useBreakpointValue({
    base: 'column',
    sm: 'column',
    md: 'column',
    lg: 'row',
    xl: 'row',
    '2xl': 'row'
  });

  const marginTop = useBreakpointValue({
    base: '6',
    sm: '6',
    md: '10',
    lg: '10',
    xl: mt,
    '2xl': mt
  });

  const animationProps = {
    left: animatedFor === "left",
    right: animatedFor === 'right'
  }

  return (
    <Fade {...animationProps}>
      <Stack
        className="item-skill"
        w={'100%'}
        h={height}
        mt={marginTop}
        p="6"
        py="9"
        direction={direction}
        boxShadow="2xl"
        bgColor="gray.900"
        borderRadius="2xl"
        align="center"
        justify={justify}
        spacing="6"
        color="cyan.500"

        _hover={{
          bg: 'gray.800',
        }}
      >
        <Img w="8rem" src={img} objectFit="cover" alt="Code" />

        <VStack align={align} textAlign={textAlign}>
          <Heading fontFamily="Montserrat" fontWeight="500" fontSize="xl">{title}</Heading>
          <Text fontFamily="Nunito" fontWeight="300" fontSize="md">
            {text}
          </Text>
        </VStack>
      </Stack>
    </Fade>
  );
}