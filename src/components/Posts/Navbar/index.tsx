import styled from "styled-components";
import NLink from 'next/link';
import { Text } from "../../../_app";
import { Category } from "../../../types";
import { Settings } from "../../../_app/Settings";
import { useUpdateRouteQuery } from '../../../utils';

type NavbarProps = {
  category: Category;
};

export function Navbar({ category }: NavbarProps) {
  const { onNavigate } = useUpdateRouteQuery({ query: 'category' })

  return (
    <Navigation>
      <NLink href='/' passHref>
        <Text className='goBack' type='h1' text={Settings.Site.BlogTitle} />
      </NLink>
      <hr className='nave-line' />
      <NLink href='/posts/web-react' passHref>
        <Text onClick={onNavigate} className={`${category === 'web-react' && 'active'}`} text='Web' />
      </NLink>
      <NLink href='/posts/mobile-react-native' passHref>
        <Text onClick={onNavigate} className={`${category === 'mobile-react-native' && 'active'}`} text='Mobile' />
      </NLink>
    </Navigation>
  );
}

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  background-color: var(--gray-800);
  position: absolute;
  top: 0;
  left: 0;
  padding-right: 2rem;
  padding-left: 2rem;
  gap: 2rem;

  .nave-line {
    width: 0.15rem;
    height: 1.5rem;
    background: var(--cyan-500);
    border: none;
  }
    
  > h1 {
    font-family: 'Montserrat';
    color: var(--cyan-500);
    font-weight: 500;
    font-size: 1.3rem;
  }
    
  > p {
    font-family: 'Nunito';
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 200;
    opacity: 0.5;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
    
    &.active {
      opacity: 1;
    }
  }
`;
