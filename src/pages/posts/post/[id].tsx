import { useEffect, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

import { getPrismicClient } from '../../../services';
import { Author, Footer, HeaderPost, Loading, OptionsButtons } from '../../../components';
import { TitlePage, View, Text, Divider } from '../../../_app';
import { PostData } from '../../../types';

import { Post } from '../../../styles/pages/Post';
import { useAppSelector, useTheme } from '../../../contexts';

interface PostProps {
  post: PostData;
}

function PagePost({ post }: PostProps) {
  const { Theme, AppStatus } = useAppSelector(['AppStatus', 'Theme'])

  // useEffect(() => { 
  //   if (AppStatus.is === 'loading') {
  //     AppStatus.set('done')
  //   }
  // }, []);

  function SectionComments() {
    return (
      <section
        style={{ width: '90%' }}
        ref={
          element => {
            if (!element) {
              return
            }
  
            const scriptElement = document.createElement('script')
            scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
            scriptElement.setAttribute('repo', 'LuizFelipe16/spaceblog-comments')
            scriptElement.setAttribute('issue-term', 'pathname')
            scriptElement.setAttribute('theme', 'photon-dark')
            scriptElement.setAttribute('crossorigin', 'anonymous')
            scriptElement.setAttribute('async', 'true')
            element.replaceChildren(scriptElement)
          }
        }
      />
    );
  }

  return (
    <Post theme={Theme.theme}>
      <TitlePage t={post.data.title} />
      <OptionsButtons />
      <HeaderPost banner={post.data.banner.url} headline={post.data.title} description={post.data.description} />

      <View type='main' style='post'>
        <View style='post_content'>
          <Text type='h1' style='post_title' text={post.data.title} />
          <Text type='h2' style='post_subtitle' text={post.data.subtitle} />
          <Divider style='divider' />
          <View style='post_information'>
            <h2><FaUserAlt /> {post.data.author}</h2>
            <time><BsCalendar2WeekFill /> {post?.first_publication_date}</time>
          </View>

          {post.data.content.map((content, i) => (
            <div key={`${content.heading}-post-${i}`} className='body_post'>
              <h1>{content.heading}</h1>
              <div
                className='postContent'
                dangerouslySetInnerHTML={{ __html: content.body }}
              />
              <img src={content.thumb.url} alt={content.thumb.alt} />
            </div>
          ))}
        </View>

        {/* {SectionComments()} */}

        <Author name={post.data.author} />
      </View>

      <Footer isBlog />
    </Post>
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

  const { id } = params as any;
  const [postId, postType] = id.split('&');

  const response = await prismic.getByUID(postType, String(postId), {});

  const post = {
    first_publication_date: new Date(String(response?.first_publication_date)).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url
      },
      description: response.data.description,
      subtitle: response.data.subtitle,
      author: response.data.author,
      content: response.data.content.map((content: any) => {
        return {
          heading: content.heading,
          body: RichText.asHtml(content.body),
          thumb: {
            url: content.thumb.url,
            alt: content.thumb.alt,
          },
        }
      })
    }
  }

  // console.log(post.data.content)

  return {
    props: {
      post
    }
  }
};

export default PagePost;
