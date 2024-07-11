// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Solicite uma demonstração',
};

export const nav = [
  { name: 'Recursos', href: '#Recursos' },
  { name: 'Sobre nós', href: '#Sobrenos' },
  { name: 'Preços', href: '#Precos' },
  { name: 'Feedback', href: '#Feedback' },
];

export const hero = {
  title: 'Acompanhe suas Despesas e Economize Dinheiro',
  subtitle: 'Ajuda você a organizar suas receitas e despesas',
  btnText: 'Experimente gratuitamente',
  compText: '— Web, iOS e Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Sempre online',
    title: 'Suporte em tempo real com nuvem',
    subtitle:
      'Acesso imediato a assistência e recursos, garantindo eficiência e resolução rápida de problemas.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Grátis sem custo algum',
    title: 'Economize custos para você e sua família',
    subtitle:
      'Reduza despesas diárias com ferramentas e estratégias financeiras eficazes.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Use a qualquer hora',
    title: 'Use a qualquer hora quando precisar',
    subtitle:
      'Disponível 24/7, garantindo conveniência e flexibilidade para uso imediato.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Nosso Produto.',
  subtitle:
    'O produto com o qual trabalhamos é ótimo por fornecer suporte em tempo real com nuvem, ajudar a economizar custos para você e sua família e estar disponível a qualquer hora, quando precisar.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Plataforma cruzada',
      subtitle: 'Funciona diferentes sistemas operacionais e dispositivos, oferecendo flexibilidade e alcance ampliado.',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Servidor em nuvem',
      subtitle: 'Acesso remoto e gerenciamento de recursos, ideal para hospedar e gerenciar aplicativos web.',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Javascript puro',
      subtitle: ' Utiliza apenas JavaScript, proporcionando controle direto do código.',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Escolha seu plano flexível.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Plano inicial',
      services: [
        { name: 'Armazene dados ilimitados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte ao servidor em nuvem' },
      ],
      price: 'R$9.99',
      userAmount: 'até 3 usuários + 1,99 por usuário',
      btnText: 'Pegue isto',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Plano Prata',
      services: [
        { name: 'Armazene dados ilimitados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte ao servidor em nuvem' },
      ],
      price: 'R$19.99',
      userAmount: 'até 3 usuários + 1,99 por usuário',
      btnText: 'Pegue isto',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Plano Diamante',
      services: [
        { name: 'Armazene dados ilimitados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte ao servidor em nuvem' },
      ],
      price: 'R$29.99',
      userAmount: 'até 3 usuários + 1,99 por usuário',
      btnText: 'Pegue isto',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Temos milhões de melhores desejos',
  clients: [
    {
      message:
        'Usar o Xpense transformou meu jeito de lidar com dinheiro. Agora, tenho um controle total sobre minhas finanças.',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'O Xpense facilitou o controle dos meus gastos diários. Consegui economizar muito mais desde que comecei a usá-lo.',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'O Xpense me ajudou a monitorar gastos e economizar. Recomendo para controle financeiro.',
      image: AvatarImg3,
      name: 'Dr. Ana Olivia',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Com o Xpense, visualizo e ajusto meu orçamento facilmente. Reduzi custos e economizei para férias.',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'O Xpense simplifica o monitoramento de despesas. Notei uma grande diferença no meu controle financeiro.',
      image: AvatarImg5,
      name: 'Mariana',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: 'Mais de 20 milhões de downloads de 32 países diferentes',
  subtitle: 'Experimente a demonstração por 7 dias com todos os recursos..',
  btnText: 'Experimente uma demonstração gratuita',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'Sobre nós', href: '/' },
    { name: 'Carreiras', href: '/' },
    { name: 'Preços', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Termos de uso', href: '/' },
    { name: 'Termos de condições', href: '/' },
    { name: 'Política de Privacidade', href: '/' },
    { name: 'Política de cookies', href: '/' },
  ],
  newsletter: {
    title: 'Boletim de Notícias',
    subtitle: 'Mais de 25.000 pessoas se inscreveram',
  },
  form: {
    placeholder: 'Digite seu e-mail',
    btnText: 'Inscreva-se',
    smallText: 'Não vendemos seu e-mail e spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacidade e Termos',
    href: '/',
  },
  link2: {
    name: 'Contate-nos',
    href: '#contato',
  },
  copyText: 'Copyright todos os Direitos Reservados @devgustavogantois_ 2024 xpence',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
