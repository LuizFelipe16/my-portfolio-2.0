import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { ItemSkill } from "../../../components/ItemSkill";

import { Skills } from "../../../styles/sessions/skills";

export function SessionSkills() {
  const width = useBreakpointValue({
    base: '100%',
    sm: '95%',
    md: '85%',
    lg: '40rem',
    xl: '40rem',
    '2xl': '40rem',
  });

  return (
    <Skills id="skills">
      <h1>Soft Skills</h1>
      <Flex display={'flex'} w={width} alignItems='center' justifyContent='center' direction="column">
        <ItemSkill
          animatedFor='left'
          mt="5rem"
          img="/illustrations/code.svg"
          title="Clean Code"
          text={`
              Desenvolvo códigos prezando à qualidade e sempre com o objetivo de seguir as melhores práticas do mercado.
            `}
        />
        <ItemSkill
          animatedFor='left'
          mt="10rem"
          img="/illustrations/design.svg"
          title="Design de Alta Qualidade"
          text={`
              Trabalho com foco em designs de imagens e interfaces claras e objetivos de alta fidelidade, 
              para a melhor experiência do usuário, assim como superar as expectativas do projeto.
            `}
        />
      </Flex>
      <div className="line">
        <div />
        <div />
        <div />
        <div />
      </div>
      <Flex w={width} alignItems='center' justifyContent='center' direction="column">
        <ItemSkill
          animatedFor='right'
          mt="15rem"
          img="/illustrations/modern.svg"
          title="Desenvolvimento Moderno"
          text={`
              Desenvolvo projetos usando as melhores e mais modernas ferramentas do 
              mercado, com interfaces que transmitem modernidade e intuitividade.
            `}
        />
        <ItemSkill
          animatedFor='right'
          mt="13rem"
          img="/illustrations/problens.svg"
          title="Resolução de Problemas"
          text={`
              Solucionar os diversos problemas, independentemente do nível de dificuldade ou do quão diferente possa ser, com criatividade e qualidade é o principal.
            `}
        />
      </Flex>
    </Skills>
  );
}