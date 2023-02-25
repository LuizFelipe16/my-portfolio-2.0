import { Text, useBreakpointValue } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tilt from 'react-parallax-tilt'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { TecSkillsStyles } from './styles';

export function TecSkills() {
  const slidesPerView = useBreakpointValue({
    base: 1,
    lg: 7,
    xl: 7,
    md: 5,
    sm: 1,
    '2xl': 7,
  });

  const weight = 'semibold'

  return (
    <TecSkillsStyles>
      <Swiper
        className="swiper-skills"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidesPerView}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/html.png" alt="HTML" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">HTML</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/javascript.png" alt="JavaScript" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">JavaScript</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/typescript.svg" alt="TypeScript" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">TypeScript</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/react.png" alt="React" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">ReactJS</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/reactnative.png" alt="React" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">React Native</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/next.png" alt="Next" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">NextJS</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/form.png" alt="ReactHook" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">React Hook Form</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/query.png" alt="Query" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">React Query</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/nodejs.png" alt="NodeJS" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">NodeJS</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/typeorm.png" alt="TypeORM" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">TypeORM</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/jest.png" alt="Jest" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">Jest</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/chakra.png" alt="ChakraUI" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">ChakraUI</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/sass.png" alt="Sass" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">Sass</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/styled.png" alt="Styled" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">Styled-components</Text>
            </div>
          </Tilt>
        </SwiperSlide>

        <SwiperSlide className="swiper-content-item">
          <Tilt>
            <div className="item">
              <div className="icon"><img src="/skills/canva.png" alt="Canva" /></div>
              <Text fontSize="sm" fontWeight={weight} color="gray.500">Canva</Text>
            </div>
          </Tilt>
        </SwiperSlide>
      </Swiper>
    </TecSkillsStyles>
  );
}