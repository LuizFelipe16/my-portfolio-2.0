import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Text, View } from "../../../../_app";
import { Settings } from '../../../../_app/Settings';

import { ViewAuthor } from './styles';

interface AuthorProps {
  name: string;
};

export const Author = ({ name }: AuthorProps) => (
  <ViewAuthor>
    <img src="/images/eu3.png" alt="Foto do Autor do Post" />

    <View style='author_content'>
      <Text type='h1' text='Author' />
      <Text text={name} />
      <View style='social'>
        <a
          href="https://www.linkedin.com/in/luiz-felipe-siqueira-felizatti-00783a1ab/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin />
        </a>
        <a
          href={Settings.Networks.Github}
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillGithub />
        </a>
      </View>
    </View>
  </ViewAuthor>
);
