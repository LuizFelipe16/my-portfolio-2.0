import { useToast } from '@chakra-ui/react';
import { AiOutlineLink, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai';
import { FaLongArrowAltLeft, FaLongArrowAltUp, FaMoon } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';
import Router from 'next/router';

import { copyToClipboard } from '../../../../utils';
import { Link, View } from '../../../../_app';

import styles from './styles.module.scss';
import { useTheme } from '../../../../contexts';
import { BsSunFill } from 'react-icons/bs';

export const OptionsButtons = () => {
  const { theme, changeTheme } = useTheme();
  const toast = useToast();

  const copyRouteToClipboard = () => {
    copyToClipboard(`https://www.cybernegocio.com.br${Router.asPath}`);

    toast({
      title: 'Link Copiado',
      description: "Mande para um amigo acessar o post.",
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'bottom',
    });
  }

  return (
    <>
      <Link href='/posts/web-react' style={styles.back_page}><FaLongArrowAltLeft /></Link>

      <View style={`${styles.back_page} ${styles.switch_theme}`}>
        <button type="button" onClick={changeTheme}>
          {theme === 'dark' ? <FaMoon size={18} /> : <BsSunFill size={18} />}
        </button>
      </View>

      <View style={`${styles.options_post} ${styles.options_post_link}`}>
        <button type="button" onClick={copyRouteToClipboard}><AiOutlineLink size={17} /></button>
      </View>

      <View style={`${styles.options_post} ${styles.options_post_top}`}>
        <button type="button" onClick={() => animateScroll.scrollToTop({ duration: 1000 })}><FaLongArrowAltUp size={17} /></button>
      </View>

      <View style={`${styles.options_post} ${styles.options_theme}`}>
        <button type="button" onClick={changeTheme}>
          {theme === 'dark' ? <FaMoon size={18} /> : <BsSunFill size={18} />}
        </button>
      </View>

      {/* <View style={`${styles.options_post} ${styles.options_post_insta}`}>
        <a
          href={Settings.Networks.Instagram}
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillInstagram size={22} />
        </a>
      </View> */}
    </>
  );
}