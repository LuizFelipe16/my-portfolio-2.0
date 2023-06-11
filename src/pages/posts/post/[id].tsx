import { useEffect, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

import { getPrismicClient } from '../../../services';
import { Author, Footer, HeaderPost, OptionsButtons } from '../../../components';
import { TitlePage, View, Text, Divider } from '../../../_app';
import { PostData } from '../../../types';

import { Post } from '../../../styles/pages/Post';
import { useAppSelector } from '../../../contexts';
import { Spinner } from '@chakra-ui/react';

interface PostProps {
  post: PostData;
}

function CommentsSection() {
  const [created, setCreated] = useState(false)

  useEffect(() => {
    if (created) return

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'LuizFelipe16/spaceblog-comments')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-dark')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true; 

    document?.getElementById?.('utterances-comments')?.appendChild?.(script)

    setCreated(true)
  }, [])

  return <>
    <div style={{ width: '100%', minHeight: '300px', zIndex: 2, position: 'relative' }} id="utterances-comments">
    <Spinner style={{ 
      position: 'absolute', 
      zIndex: 0,
      top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
      }} color='cyan.500' size="xl" />
    </div>
    
  </>
}

function PagePost({ post }: PostProps) {
  const { Theme } = useAppSelector(['Theme'])

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

        <CommentsSection />

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
