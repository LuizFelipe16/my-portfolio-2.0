import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs'

import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services';

import type { PostData, RouterCategories } from '../../types';
import { Footer, Loading } from '../../components';
import { Link, Text, TitlePage, View } from '../../_app';

import { Posts, Post } from '../../styles/pages/Posts';
import { Icon, useBreakpointValue, VStack } from '@chakra-ui/react';
import { MyParticles } from '../../components/MyParticles';
import { Navigation } from '../../components/Posts';
import { useAppSelector } from '../../contexts';

interface PostPagination {
  next_page: string;
  results: PostData[];
}

interface PostsProps {
  postsPagination: PostPagination;
  loading: boolean
}

function PagePosts({ postsPagination }: PostsProps) {
  const { query } = useRouter() as RouterCategories;
  const { AppStatus } = useAppSelector('AppStatus')

  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
    sm: false,
    lg: false,
    xl: false,
  });

  const titleLenght = isMobileVersion ? 40 : 45;
  const descriptionLenght = isMobileVersion ? 100 : 150;

  const reduceString = (s: string, lenght: number) => {
    const lengthString = s.length
    const newString = lengthString > lenght ? `${s.slice(0, lenght).trimEnd()}...` : s;
    return newString;
  }

  return (
    <Posts>
      <TitlePage t={`Posts Programação`} />

      <MyParticles opacity={0.1} id='bgParticlesPageBlog' />

      <Navigation category={query?.category} />

      <View className='blog-content'>
        <VStack align={'flex-start'} spacing={2}>
          <h1 className='blog-title'>
            <Icon className='icon' as={BsFillFileEarmarkCodeFill} color="cyan.500" fontSize={["1.2rem", "1.3rem", "1.4rem"]} />
            {postsPagination.results.length < 1 
              ? 'Ops...'
              : 'Hey, hora de codar!'
            }
          </h1>
          <Text style='blog-subtitle' text={
            postsPagination.results.length < 1 
              ? 'Não encontramos nenhum post aqui'
              : 'Confira os vários conteúdos sobre Programação'
            } 
          />
        </VStack>

        <View type='main' style='posts'>
          {postsPagination.results.map(post => {
            const title = reduceString(post.data.title, titleLenght)
            const description = reduceString(post.data.description, descriptionLenght)

            return (
              <Post key={post.uid}>
                <img src={post.data.banner.url} alt={post.data.title} />
  
                <View style='content'>
                  <Text type='h1' text={title} />
                  <Text text={description} />
                  <Link href={{
                    pathname: `/posts/post/${post.uid}&${post.type}`,
                    query: { id: post.uid, type: post.type, category: post.data.title },
                  }}>
                    <a onClick={() => {
                      // AppStatus.set('loading')
                    }}>Ver Post</a>
                  </Link>
                </View>
              </Post>
            )
          })}
        </View>
      </View>

      <Footer isBlog />
    </Posts>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { category } = params as any;

  const postsResponse = await prismic.query([
    Prismic.Predicates.at('document.type', !category ? 'web-react' : category),
  ], {
    pageSize: 20
  });

  const posts = postsResponse.results?.map(post => {
    return {
      uid: post.uid,
      type: post.type,
      first_publication_date: new Date(String(post.first_publication_date)).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      data: {
        title: post.data.title,
        description: post.data.description,
        author: post.data.author,
        banner: post.data.banner
      }
    }
  });

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: posts
      },
      loading: false
    }
  }
};

export default PagePosts;
