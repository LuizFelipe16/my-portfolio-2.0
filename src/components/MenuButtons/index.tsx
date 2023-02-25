import { useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { animateScroll } from 'react-scroll';
import Rotate from 'react-reveal/Rotate';
import { BsArrowUpShort } from 'react-icons/bs';
import { RiMenu5Fill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io';
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

import { MenuTools } from "./styles";
import { Settings } from "../../_app/Settings";

interface IMenuButtonProps {
  isMenuOpen?: boolean;
}

export function MenuButtons({ isMenuOpen = false }: IMenuButtonProps) {
  const [isMenu, setIsMenu] = useState(isMenuOpen);
  const handleOnOpenOrCloseMenu = () => setIsMenu(!isMenu);

  const props = !isMenu ? {
    as: 'div',
    onClick: () => null,
    cursor: 'default'
  } : {
    as: 'a',
  }

  return (
    <MenuTools>
      <Rotate top right when={isMenu}>
        <Button
          href={Settings.Networks.Github}
          target="_blank"
          className="button-tool"
          boxShadow="lg"
          {...props}
        >
          <Icon fontSize={21} as={AiFillGithub} />
        </Button>

        <Button
          href={Settings.Networks.Instagram}
          target="_blank"
          className="button-tool"
          boxShadow="lg"
          {...props}
        >
          <Icon fontSize={21} as={AiOutlineInstagram} />
        </Button>

        <Button
          href={Settings.Networks.Linkedin}
          target="_blank"
          className="button-tool"
          boxShadow="lg"
          {...props}
        >
          <Icon fontSize={21} as={AiFillLinkedin} />
        </Button>

        <Button
          className="button-tool"
          boxShadow="lg"
          cursor='pointer'
          onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
          {...props}
        >
          <Icon fontSize={23} as={BsArrowUpShort} />
        </Button>
      </Rotate>

      <Button
        className="button-tool animated-tool"
        bgColor="#48CDD0"
        color="#171923"
        boxShadow="lg"
        onClick={handleOnOpenOrCloseMenu}
      >
        {!!isMenu ? (
          <Icon fontSize={21} as={IoMdClose} />
        ) : (
          <Icon fontSize={21} as={RiMenu5Fill} />
        )}
      </Button>
    </MenuTools>
  );
}