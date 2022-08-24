import { Text } from "@chakra-ui/react";
import Link from 'next/link';
import styled from "styled-components";
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";

interface IItemSidebarNavProps {
  text: string;
  href: string;
  isPage?: boolean;
  isActive?: boolean;
}

export function ItemSidebarNav({ href, text, isPage = false, isActive = false }: IItemSidebarNavProps) {
  const scroll = () => scrollAnimationToSessionPageById(href);

  if (isPage === true) {
    return (
      <Link href={`/${href}`} passHref>  
        <BlogPage className={`${isActive && 'active'}`}>
          {text}
        </BlogPage>
      </Link>
    );
  } else {
    return (
      <Text
        w="100%"
        bg="gray.900"
        p="3"
        borderRadius="lg"
        fontWeight="600"
        onClick={scroll}
        transition="0.2s"
        _hover={{
          bg: 'cyan.500',
          color: 'gray.900'
        }}
      >
        {text}
      </Text>
    );
  }
}

const BlogPage = styled.p`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: var(--gray-900);
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    margin-left: 0.5rem;
  }

  &.active {
    background-color: var(--cyan-500) !important;
    color: var(--gray-900) !important;
  }
`;
