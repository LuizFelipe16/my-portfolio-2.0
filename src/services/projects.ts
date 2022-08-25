export type Project = {
  id: number;
  title: string;
  banner: string;
  link?: string;
  github?: string;
  description: string;
  access?: boolean;
}

export const projects: Project[] = [
  {
    id: 12,
    access: true,
    title: 'MyLook',
    banner: 'mylook.png',
    link: 'https://my-look.vercel.app',
    // github: 'https://github.com/LuizFelipe16/codeleap-app',
    description: `
      Em desenvolvimento...
    `,
  },
  {
    id: 1,
    title: 'MyMoon',
    banner: 'my-moon.png',
    github: 'https://github.com/LuizFelipe16/my-moon',
    description: `
      Um projeto completo, durante o desenvolver lidei com o máximo de bibliotecas que aprendi 
      durante o programa Ignite da Rocketseat, me importando muito com o código e a organização do projeto por conta de
      sua complexidade. 
      O propósito principal dele é ser uma plataforma para as pessoas entrarem e criarem listas de tarefas noturnas 
      (filmes, séries e atividades similares), particularmente criei isso pois gosto de fazer e criar coisas durante 
      a noite, e gostaria de colocar isso em algum lugar, como um registro, assim como queria explorar muitas
      ferramentas modernas em um só projeto, usando diferentes estratégias para um mesmo fim. Internamente 
      implementei o controle de dados com ReactHookForm, cache de dados com ReactQuery, autenticação de login com 
      NextAuth, utilização de métodos GetStaticProps e GetServerSideProps, validação dos formulários com Yup, 
      estilização com Styled Components e Sass, usando o design System ChakraUI e RadixUI, banco de dados FaunaDB, integração a 
      um blog com PrismicCMS, testes unitários com Jest e Testing Library, animações de conteúdo com AnimateOnScrollLib 
      e estratégias para melhorar a performance da aplicação.
    `,
    access: true
  },
  {
    id: 2,
    title: 'Plataforma Sigma',
    banner: 'sigma.png',
    link: 'https://sigma-rho.vercel.app',
    description: `
      O projeto de conclusão de curso (TCC), o objetivo foi o desenvolvimento junto de uma solução para a 
      necessidade de uma empresa e seu mercado atuante, criando uma plataforma para gestão de orçamentos e pedidos. 
      Junto com outros 3 colegas, entendemos o que a empresa precisava, os requisitos funcionais 
      e não funcionais do projeto, suas necessidade que o código deveria lidar, também foi criado um layout/design básico 
      da aplicação e esquematizamos como deveria ser o backend, processos validados pela empresa.
      Desenvolvi todo o frontend com TypeScript, 
      NextJS, ReactJS e estilizado com CSS e Sass, seguindo o layout produzido no figma. Desenvolvi todo o backend com 
      TypeScript, NodeJS, features de cadastrar, listar, deletar e atualizar informações, arquitetura do projeto com 
      padrão MVC, upload de imagens com multer 
      em um servidor AWS S3 SDK, autenticação JWT, validação de usuários por diferentes cargos na aplicação, encriptando 
      informações sensíveis, habilitando a geração automático de PDFs complexos e muitos outros recursos. 
      Para a etapa final, o projeto foi finalizado com a 
      conexão entre backend e frontend, junto ao deploy, que pode ser validado e testado pela empresa parceira.
    `,
    access: false
  },
  {
    id: 3,
    title: 'Master Move.it',
    banner: 'moveit.png',
    link: 'https://master-moveit.vercel.app',
    description: `
      O primeiro grande projeto. Inicialmente uma ideia exposta em um dos eventos da Rocketseat (NLW), porém 
      a ideia foi tão boa e me chamou tanta atenção que decidi transformá-la. 
      Seu objetivo é uma plataforma para ajudar pessoas que ficam tempo demais sentadas fazendo uma atividade 
      mental (desenvolvedores), pois precisamos da atividade física também para manter o foco, 
      portanto a aplicação traz um timer de 25 minutos e uma lista de tarefas que você pode controlar livremente, 
      cadastrar, remover ou atualizar, e a cada ciclo do timer, o app traz de forma randômica uma das atividades 
      para você fazer, depois que completar, você ganha o xp que colocou naquela tarefa de acordo com sua
      dificuldade, subindo cada vez mais de nível. 
      Falando um pouco dos aspectos técnicos, criei o backend inteiro em TypeScript usando NodeJS e Express, 
      banco de dados em SQLite usando o queryBuilder Knex, implementei cadastro e autenticação de usuário 
      na plataforma por login com email e senha usando JWT e Passport, encriptando os dados sensíveis com Bcrypt. 
      Além disso, desenvolvi o frontend em TypeScript com ReactJS e NextJS, sistema de notificação, 
      autenticação com Cookies e JWT, além de um layout moderno para web.
    `,
    access: true
  },
  {
    id: 4,
    title: 'Cyber Coffee',
    banner: 'cybercoffee.png',
    link: 'https://cybercoffee.vercel.app',
    github: 'https://github.com/LuizFelipe16/cyber-coffee',
    description: `
      Um belo site institucional feito para uma cafeteria online, com foco em simplicidade e modernidade de layout. 
      Falando tecnicamente, o projeto foi desenvolvido em TypeScript com ReactJS e NextJS, estilização com Sass e 
      integração a um blog próprio com Prismic CMS, além da simulação de um carrinho de compras online com 
      funcionalidades de estoque, cálculo automático do total e notificação ao usuário sobre suas ações.
    `,
    access: true
  },
  {
    id: 5,
    title: 'XForce',
    banner: 'xforce.png',
    link: 'https://xforce.vercel.app',
    github: 'https://github.com/LuizFelipe16/xforce',
    description: `
      Site de apresentação para uma academia, com design moderno e totalmente responsivo com dispositivos móveis, 
      apresentando todas as informações que clientes e futuros clientes precisam saber. Falando um pouco por dentro 
      do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando o Design System ChakraUI e um 
      pouco de Sass para algumas estilizações.
    `,
    access: true
  },
  {
    id: 14,
    access: true,
    title: 'MyStarbucks',
    banner: 'mystarbucks.png',
    link: 'https://mystarbucks.vercel.app',
    github: 'https://github.com/LuizFelipe16/my-starbucks',
    description: `
      Projeto simples de reimaginação do site Starbucks. No desenvolvimento utilizei TypeScript, com ReactJS, NextJS, o
      design system ChakraUI, para os carrosséis foi usado Swiper, a estilização foi feita com Sass e as animações
      com AnimateOnScrollLib.
    `,
  },
  {
    id: 6,
    title: 'MyHeart',
    banner: 'myheart.png',
    link: 'https://myheart-orpin.vercel.app',
    description: `
      Uma plataforma web, desenvolvida especialmente como um presente muito importante, porém foi um ótimo 
      projeto, desenvolvido com muita cautela no design, nas animações dentro da plataforma, sendo algo 
      simples mas elegante, para surpreender a pessoa que tem acesso. Falando dos aspectos técnicos, ele 
      foi desenvolvido em TypeScript, usando ReactJS e NextJS, animações com Animate e CSSHake, estilização 
      com Sass e usando o design System ChakraUI.
    `,
    access: true
  },
  {
    id: 7,
    title: 'CyberNegócios',
    banner: 'cybernegocios.png',
    link: 'https://cybernegocio.com.br',
    description: `
      Site de apresentação de empresa e um site institucional, com todo o layout responsivo com outros dispositivos, 
      além de simples e moderno, objetivo e claro na comunicação, além de um domínio próprio totalmente configurado 
      por mim com SSL e DNS, um verdadeiro e completo site para uma empresa se posicionar no ambiente online. 
      Falando do que está por dentro do projeto, ele foi desenvolvido em TypeScript com ReactJS e NextJS, usando 
      os recursos dessas tecnologias para integrar um Blog moderno com Prismic CMS e sessão de comentários com Terrance.
    `,
    access: true
  },
  {
    id: 8,
    title: 'DashGo.',
    banner: 'dashgo.png',
    link: 'https://dashgo-zeta-two.vercel.app',
    github: 'https://github.com/LuizFelipe16/dashgo',
    description: `
      Nada é mais comum no mercado do que plataformas com dashboards para os usuários acessarem, e é exatamente por 
      isso que o DashGo foi construído, uma simulação de como seria uma mini plataforma moderna e bem trabalhada no 
      design e layout, com responsividade com outros dispositivos. Falando um pouco por dentro do projeto, ele foi 
      desenvolvido em TypeScript, com ReactJS e NextJS, usando tecnologias modernas do mercado como por exemplo 
      ReactHookForm, ReactQuery e MirageJS para simular uma API completa, além do layout ser construído com o 
      Design System ChakraUI e algumas estilizações com Sass.
    `,
    access: true
  },
  {
    id: 9,
    title: 'Ignews',
    banner: 'ignews.png',
    link: 'https://challenge-ignews.vercel.app',
    github: 'https://github.com/LuizFelipe16/ignews-full',
    description: `
      Realizar pagamentos por meio de um site é bem comum, e é por isso que esse projeto foi construído, um Blog 
      feito com PrismicCMS, em que o usuário pode se cadastrar com o Github e comprar uma assinatura mensal usando 
      o Stripe, dessa forma ele tem acesso aos conteúdos que são postados recorrentemente. Falando um pouco de como 
      é por dentro do projeto, ele foi desenvolvido em TypeScript, com ReactJS e NextJS, usando a api de autenticação 
      NextAuth e o servidor Next para construir uma API que consome Webhooks do Stripe e faz requisições ao banco de 
      dados FaunaDB, resultando em uma aplicação JAMStack, com testes unitários em Jest e estilização com Sass.
    `,
    access: true
  },
  {
    id: 10,
    access: true,
    title: 'Landing Page: Poderosas',
    banner: 'power.png',
    link: 'https://landing-page-poderosas.vercel.app',
    github: 'https://github.com/LuizFelipe16/landing-page-power',
    description: `
      Uma das coisas mais comuns de encontrar na web são landing pages de produtos, e 
      esse projeto é exatamente isso, uma reprodução de uma página já existente, mas 
      dessa vez usando o código, desenvolvida com NextJS para um 
      carregamento limpo e rápido, design System ChakraUI para o layout, efeitos de 
      animação com AnimateOnScroll, responsividade com outros dispositivos e mais algumas outras funcionalidades 
      e bibliotecas para criar essa página única.
    `,
  },
  {
    id: 11,
    access: true,
    title: 'CodeLeap Network',
    banner: 'codeleap.png',
    link: 'https://codeleap-chi.vercel.app',
    github: 'https://github.com/LuizFelipe16/codeleap-app',
    description: `
      Uma pequena plataforma web que representa uma rede social, uma rede de network entre
      as pessoas que entrarem e criarem postagens. Esse projeto foi um teste de código 
      feito pela empresa CodeLeap.
      Foi apresentado um template básico e as funcionalidades necessárias para ser completado,
      dessa forma iniciei e finalizei o desenvolvimento fazendo as alterações e adições que achei
      coerente ao teste. 
      Falando da parte técnica do projeto, ele foi feito em TypeScript com ReactJS e NextJS, 
      recomendo ver a documentação para entender a quantidade de funcionalidades que 
      esse pequeno projeto foi capaz de explorar, porém um pequeno resumo: 
      cache de dados e paginação de postagens com react-query, controle de cookies com nookies, 
      controle de formulários e estados com react-hook-form, design System chakraUi, 
      responsividade com celulares e tablets, validação com yup, criação e autenticação de usuários
      por email e senha com token JWT,
      conexão com um banco de dados FaunaDB, encriptação de dados, testes unitários com jest e 
      testing library, entre outras funcionalidades.
    `,
  },
  {
    id: 13,
    access: true,
    title: 'MyClock',
    banner: 'myclock.png',
    link: 'https://myclock-chi.vercel.app',
    // github: 'https://github.com/LuizFelipe16/codeleap-app',
    description: `
      Simples e direto, apenas um relógio digital minimalista que eu, particularmente precisava e não achava
      algo simples como isso na web.
      Para incrementar o projeto, adicionei responsividade com outros devices e à possibilidade de trocar o tema do app.
      No quesito desenvolvimento, utilizei TypeScript, com ReactJS e NextJS, além da minha própria Lib com componentes
      pré customizados para agilizar o desenvolvimento e minha
      própria estilização (esse projeto serviu de teste para isso) chamada MyStyles que uso em meus projetos.
    `,
  },
];
