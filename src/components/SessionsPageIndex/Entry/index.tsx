import NLink from "next/link";
import { Text, Button, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

import { Navigation } from "../../../components/Navigation";
import { Interactive3DElement, View } from "../../../_app";

import { Entry } from "./styles";
import { MyParticles } from "../../MyParticles";
import { Settings } from "../../../_app/Settings";
import { useAppStatus } from "../../../contexts";

export function SessionEntry() {
  const { AppStatus } = useAppStatus()
  const [isLoadingElements, setIsLoadingElements] = useState(true);
  const textTyping = useRef(null);

  const timeout = useRef<any>(null)

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const texts = {
    mobile: ['Criando soluções para o futuro...'],
    large: ['Desenvolvendo soluções para o futuro...']
  }

  useEffect(() => {
    AppStatus.set('loading')
    timeout.current = setTimeout(() => {
      setIsLoadingElements(false)
          AppStatus.set('done')
    }, 15000)
  }, [])

  useEffect(() => {
    const typed = new Typed(textTyping.current as any, {
      strings: texts[!isMobileVersion ? 'mobile' : 'large'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <Entry>
      <Navigation />

      {!isLoadingElements && <MyParticles id='bgParticlesPageApp' />}

      {/* {!!isLoadingElements && !isMobileVersion && <div className="loading-element-3d"><Spinner color='cyan.500' size="xl" /></div>} */}
      
      <Interactive3DElement
        style="element-3d"
        scene="https://prod.spline.design/CvPbd63Q829YZyZk/scene.splinecode"
        onLoad={(SplineApplication) => {
          SplineApplication.setZoom(0.8);
          setIsLoadingElements(false)
          AppStatus.set('done')
        }}
      />

      <View style="content">
        <Text
          className="title-gradient"
          bgGradient='linear(to-l, #D1D2DC, #48CDD0)'
          bgClip='text'
          fontSize={['4xl', '5xl', '6xl']}
          fontWeight='extrabold'
          fontFamily="JetBrains Mono"
          textShadow="2xl"
        >
          {Settings.Site.Name}
        </Text>

        <h1 className="text-typing" ref={textTyping} />

        <div data-aos='fade-right' data-aos-duration='1000'>
          <NLink href='/posts/web-react' passHref>
            <Button 
              className='access-button'
              boxShadow='dark-lg'
            >
              Blog
            </Button>
          </NLink>
        </div>
      </View>
    </Entry>
  );
}
