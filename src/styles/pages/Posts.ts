import styled from 'styled-components';
import { styledPresets as theme } from '../../_app';

const postBorder = 12

export const Posts = styled.div`
  width: 100vw;
  min-height: 120vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  
  background-color: transparent;
  /* padding: 2rem; */
  color: var(--white);
  
  .goBack {
    cursor: pointer;
  }

  .blog-content {
    width: 100%;
    height: 100%;
    min-height: 100vh;

    border: 1px solid red;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 2rem;

    .blog-title {
      color: var(--cyan-500);
      font: 500 1.6rem 'Montserrat', sans-serif;
      margin-top: 4rem;
      z-index: 100;

      .icon {
        margin-right: 0.5rem;
      }
    }
    
    .blog-subtitle {
      font: 200 1.1rem 'Nunito', sans-serif;
      margin-top: 1rem;
      z-index: 100;
    }
  }

  .posts {
    width: 100% !important;
    margin-top: ${theme.spacing.size(2)};
    z-index: 100;

    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 30px;
    row-gap: 20px;
    justify-content: space-between;
  }

  .footer-copyright {
    bottom: 0;
    left: 0;
  }

  .backPage {
    color: var(--cyan-500);
    font-size: ${theme.font.size(1.8)};
    opacity: 0.5;
    position: absolute;
    top: 20px;
    left: 20px;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
  
  @media (min-width: 220px) and (max-width: 968px) {
    .container {
      .illustration {
        display: none;
      }
    
      .content {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (min-width: 686px) and (max-width: 968px) {
    .posts {
      width: 100% !important;
      ${theme.padding.vertical.p1}
      grid-template-columns: auto auto;
    }
  }

  @media (min-width: 120px) and (max-width: 685px) {
    .posts {
      width: 100% !important;
      ${theme.padding.vertical.p1}
      grid-template-columns: auto;
    }
  }
`

export const Post = styled.div`
  /* min-width: 18rem; */
  /* max-width: 22rem; */
  /* min-height: 12rem; */
  max-width: 400px;
  height: 25rem;
  padding-bottom: 1rem;

  opacity: 0.8;
  background: var(--gray-700);
  border-top-width: 3px;
  border-radius: ${postBorder}px;
  border-color: var(--cyan-500);
  animation: blinker_neon 4s infinite both;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;

  transition: 0.6s;

  &:hover {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-top-left-radius: ${postBorder / 2}px;
    border-top-right-radius: ${postBorder / 2}px;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 1rem 1.2rem 0 1.2rem;
    gap: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      overflow: hidden;
      font: 500 1.2rem 'Montserrat', sans-serif;
    }

    p {
      height: 5rem;
      max-height: 5rem;
      font: 500 1rem 'Nunito', sans-serif;
      line-height: 1.2rem;
      overflow: hidden;
      margin-top: 0.5rem;

      background: -webkit-linear-gradient(#eee, #3331);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(1px 1px #3331);
    }

    a {
      width: 100%;
      font-family: 'Montserrat', monospace;
      color: var(--cyan-500);
      font-size: 0.9rem;
  
      ${theme.centerRow}

      &:hover { text-decoration: underline; }
    }
  }

  @media (min-width: 120px) and (max-width: 685px) {
    & {
      width: 100%;
      max-width: none;
    }
  }
`;
