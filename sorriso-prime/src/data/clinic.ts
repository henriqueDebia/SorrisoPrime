import heroConsulta from '../images/hero-consulta-odontologica.png'
import aboutConsultorio from '../images/about-consultorio-odontologico.png'
import serviceLimpeza from '../images/service-limpeza-prevencao.png'
import serviceRestauracao from '../images/service-restauracao-protese.png'
import serviceClareamento from '../images/service-clareamento-dentario.png'
import serviceImplantes from '../images/service-implantes-dentarios.png'
import teamCamila from '../images/team-dra-camila-ferreira.png'
import teamRicardo from '../images/team-dr-ricardo-mendes.png'
import teamAnaBeatriz from '../images/team-dra-ana-beatriz-santos.png'

export const clinic = {
  images: {
    hero: heroConsulta,
    about: aboutConsultorio,
  },
  name: 'Sorriso Prime',
  phone: '5511999990000',
  phoneFormatted: '(11) 99999-0000',
  location: 'Vila Mariana — São Paulo/SP',

  whatsapp: {
    message: 'Olá, gostaria de agendar uma avaliação.',
  },

  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ],

  hero: {
    title: 'Atendimento odontológico com tempo e atenção para você',
    subtitle:
      'Consultas sem pressa, diagnóstico claro e plano de tratamento apresentado de forma simples.',
    cta: 'Agendar Avaliação pelo WhatsApp',
  },

  about: {
    label: 'Sobre a clínica',
    title: 'Um atendimento pensado para você',
    paragraphs: [
      'Cada consulta começa com calma. Aqui, você tem espaço para conversar, tirar dúvidas e entender, em uma linguagem simples, o que está acontecendo com a sua saúde bucal.',
      'O diagnóstico é apresentado de forma clara e o plano de tratamento é explicado passo a passo, para que você se sinta seguro sobre cada etapa antes de decidir.',
    ],
    differentials: [
      {
        title: 'Atendimento sem pressa',
        description:
          'Cada consulta tem espaço para entender o que você precisa e tirar suas dúvidas.',
      },
      {
        title: 'Explicações claras',
        description:
          'Você entende o diagnóstico, as opções de tratamento e os próximos passos.',
      },
      {
        title: 'Cuidado individual',
        description:
          'Cada plano de tratamento é pensado de acordo com o momento e as necessidades de cada paciente.',
      },
    ],
  },

  services: {
    label: 'Tratamentos',
    title: 'Cuidado para diferentes momentos do seu sorriso',
    introduction:
      'Da prevenção diária a tratamentos mais específicos, cada procedimento é planejado e explicado antes de começar.',
    items: [
      {
        name: 'Limpeza e Prevenção',
        image: serviceLimpeza,
        description:
          'Cuidados regulares para manter a saúde bucal em dia, acompanhando de perto a higiene e possíveis alterações. A consulta também é uma oportunidade para tirar dúvidas e entender melhor os cuidados necessários no dia a dia.',
      },
      {
        name: 'Restauração e Prótese',
        image: serviceRestauracao,
        description:
          'Reparações e substituições que devolvem função e conforto aos dentes, avaliadas de acordo com o estado de cada caso. O plano é apresentado com clareza para que você entenda cada etapa.',
      },
      {
        name: 'Clareamento Dentário',
        image: serviceClareamento,
        description:
          'Opções de clareamento para clarear o tom natural dos dentes, sempre após uma avaliação para verificar se o procedimento é indicado para o seu caso.',
      },
      {
        name: 'Implantes Dentários',
        image: serviceImplantes,
        description:
          'Uma alternativa para repor dentes ausentes de forma planejada e duradoura. O processo é explicado por completo, desde a avaliação inicial até a recuperação.',
      },
    ],
  },

  professionals: {
    label: 'Nossa equipe',
    title: 'Profissionais que acompanham você de perto',
    introduction:
      'Uma equipe que ouve antes de agir. Cada profissional dedica tempo para entender o seu caso, explicar as opções e acompanhar cada etapa do tratamento.',
    items: [
      {
        name: 'Dra. Camila Ferreira',
        image: teamCamila,
        description:
          'Gosta de começar cada consulta entendendo o que trouxe o paciente, antes de avaliar a saúde bucal. Prefere explicar o plano de tratamento com calma e em uma linguagem simples.',
      },
      {
        name: 'Dr. Ricardo Mendes',
        image: teamRicardo,
        description:
          'Atento aos detalhes, valoriza o acompanhamento de perto em cada etapa. Procura sempre apresentar as opções disponíveis para que o paciente participe das decisões.',
      },
      {
        name: 'Dra. Ana Beatriz Santos',
        image: teamAnaBeatriz,
        description:
          'Acredita que segurança e confiança se constroem na conversa. Dedica tempo para esclarecer dúvidas e para que cada pessoa entenda o que acontece com o próprio sorriso.',
      },
    ],
  },

  testimonials: {
    title: 'O que nossos pacientes dizem',
    introduction:
      'Relatos de quem já passou pela clínica e encontrou um atendimento mais próximo e com mais tempo.',
    items: [
      {
        text: 'Fui recebida com calma e tudo foi explicado com clareza. Pela primeira vez entendi de verdade o que precisava fazer no meu tratamento.',
        author: 'Mariana S.',
      },
      {
        text: 'Nunca me senti apressado em uma consulta. O plano foi apresentado com paciência e todas as minhas dúvidas foram respondidas antes de eu decidir.',
        author: 'Carlos A.',
      },
      {
        text: 'O acompanhamento de perto fez toda a diferença. Me senti segura em cada etapa e sempre soube o que estava acontecendo.',
        author: 'Fernanda L.',
      },
    ],
  },

  faq: {
    title: 'Perguntas frequentes',
    introduction:
      'Algumas respostas para ajudar antes da sua primeira visita.',
    items: [
      {
        question: 'Como funciona a primeira consulta?',
        answer:
          'A primeira consulta começa com uma conversa para entender o que você está sentindo e o que espera do tratamento. Em seguida, fazemos uma avaliação e apresentamos um diagnóstico claro, com as opções de tratamento e os próximos passos.',
      },
      {
        question: 'Vocês atendem convênios?',
        answer:
          'Sim. Para saber se o seu convênio é aceito, é só nos chamar informando o nome do plano, que confirmamos antes do agendamento.',
      },
      {
        question: 'Quais tratamentos vocês realizam?',
        answer:
          'Realizamos desde limpeza e prevenção até restaurações, clareamento e implantes. Durante a avaliação indicamos o tratamento mais adequado para cada caso.',
      },
      {
        question: 'Preciso fazer algum exame antes?',
        answer:
          'Depende da necessidade de cada caso. Alguns tratamentos podem exigir exames de imagem, e nesses casos indicamos com clareza o que será preciso antes de começar.',
      },
      {
        question: 'Como faço para agendar?',
        answer:
          'É simples: é só chamar a clínica pelo WhatsApp e contar o que você precisa. Nossa equipe ajuda a encontrar o melhor horário para a sua avaliação.',
      },
    ],
  },

  contact: {
    title: 'Vamos conversar sobre o seu sorriso?',
    text: 'Entre em contato para agendar uma avaliação e entender qual é o melhor próximo passo para você.',
    cta: 'Agendar Avaliação pelo WhatsApp',
  },
} as const
