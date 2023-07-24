import Link from 'next/link';
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";
import { ItemNavStyles, ItemLinkNavStyles } from "../styles";
import Tilt from 'react-parallax-tilt'

interface IItemNavProps {
  text: string;
  href: string;
  isPage?: boolean;
}

export function ItemNav({ href, text, isPage = false }: IItemNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

  if (isPage === true) {
    return (
      <Tilt 
        tiltEnable={true} 
        scale={true ? 1.05 : 1} 
      >
        <Link href={`/${href}`} passHref>
          <ItemLinkNavStyles>
            {text}
            <hr />
          </ItemLinkNavStyles>
        </Link>
      </Tilt>
    );
  } else {
    return (
      <Tilt 
        tiltEnable={true} 
        scale={true ? 1.05 : 1} 
      >
        <ItemNavStyles onClick={scroll}>
          {text}
          <hr />
        </ItemNavStyles>
      </Tilt>
    );
  }
}