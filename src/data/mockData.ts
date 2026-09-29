import { Course, Article, Testimonial, ServiceItem, CourseModule } from '../types';

export const CORE_CURRICULUM_MODULES: CourseModule[] = [
  {
    id: 'mod-01',
    moduleNumber: 1,
    title: 'Fundamentos do Delivery Moderno',
    description: 'Compreenda a dinâmica do mercado, modelos de negócio de entrega e a cadeia de valor logística.',
    lessons: [
      {
        id: 'les-01-1',
        title: 'O que é realmente um negócio de Delivery e como funciona o ecossistema',
        duration: '18 min',
        type: 'video',
        contentSummary: 'Análise detalhada do fluxo do pedido: desde o clique do cliente, processamento na cozinha/armazém, até a expedição e entrega na porta.',
      },
      {
        id: 'les-01-2',
        title: 'Modelos de negócio: Próprio vs. Marketplace (Aggregators)',
        duration: '24 min',
        type: 'video',
        contentSummary: 'Vantagens e desvantagens de ter canais próprios versus depender exclusivamente de comissões de aplicativos de terceiros.',
      },
      {
        id: 'les-01-3',
        title: 'Como funciona uma operação de entrega de ponta a ponta',
        duration: '22 min',
        type: 'article',
        contentSummary: 'Mapeamento de tempos de preparação, despacho, raios de cobertura e SLA de entrega para garantir clientes fiéis.',
      }
    ]
  },
  {
    id: 'mod-02',
    moduleNumber: 2,
    title: 'Como Criar um Negócio de Delivery do Zero',
    description: 'Planeamento estratégico, escolha de nicho, viabilidade financeira e registo estruturado.',
    lessons: [
      {
        id: 'les-02-1',
        title: 'Planeamento estratégico e validação rápida de procura',
        duration: '26 min',
        type: 'video',
        contentSummary: 'Métodos práticos para validar se a sua zona de actuação tem volume suficiente antes de investir grandes quantias.',
      },
      {
        id: 'les-02-2',
        title: 'Definição de público-alvo, produtos de alta margem e embalagens térmicas',
        duration: '30 min',
        type: 'video',
        contentSummary: 'Como seleccionar itens que suportam o transporte sem perder a textura, temperatura e apresentação premium.',
      },
      {
        id: 'les-02-3',
        title: 'Cálculo de custos (CMV), margens e estrutura operacional básica',
        duration: '35 min',
        type: 'tool',
        contentSummary: 'Utilização da planilha de precificação para calcular taxa de entrega, custo de embalagem e lucro líquido real.',
      }
    ]
  },
  {
    id: 'mod-03',
    moduleNumber: 3,
    title: 'Aplicações e Tecnologia no Delivery',
    description: 'Digitalização completa: websites de pedidos, aplicações mobile, POS e geolocalização.',
    lessons: [
      {
        id: 'les-03-1',
        title: 'Aplicações de delivery vs. Lojas virtuais rápidas',
        duration: '20 min',
        type: 'video',
        contentSummary: 'Qual a tecnologia ideal para o seu momento actual: quando basta um menu digital e quando investir numa app dedicada.',
      },
      {
        id: 'les-03-2',
        title: 'Sistemas de pedidos, integração com impressoras e checkout',
        duration: '28 min',
        type: 'video',
        contentSummary: 'Como automatizar a comanda na cozinha no exacto segundo em que o pagamento ou confirmação entra.',
      },
      {
        id: 'les-03-3',
        title: 'Geolocalização, rotas inteligentes e cálculo dinâmico de taxa por km',
        duration: '25 min',
        type: 'article',
        contentSummary: 'Configuração de polígonos de entrega no mapa para evitar taxas fixas injustas ou entregas fora do raio viável.',
      }
    ]
  },
  {
    id: 'mod-04',
    moduleNumber: 4,
    title: 'Gestão de Pedidos e Operações de Entrega',
    description: 'Comunicação com estafetas/motoboys, tempo de despacho, segurança e controlo de perdas.',
    lessons: [
      {
        id: 'les-04-1',
        title: 'Recepção e triagem rápida de pedidos em horários de pico',
        duration: '22 min',
        type: 'video',
        contentSummary: 'Técnicas para não colapsar a operação aos fins de semana e feriados com filas de pedidos acumulados.',
      },
      {
        id: 'les-04-2',
        title: 'Gestão de motoboys: Frotas próprias vs. Estafetas terceirizados',
        duration: '32 min',
        type: 'video',
        contentSummary: 'Contratos, remuneração por corrida, bónus de pontualidade, rotatividade e manutenção preventiva das motas.',
      },
      {
        id: 'les-04-3',
        title: 'Atendimento de contingência e pós-venda que transforma reclamação em fã',
        duration: '18 min',
        type: 'article',
        contentSummary: 'Scripts reais para resolver atrasos, comida tombada ou pedidos trocados em menos de 3 minutos.',
      }
    ]
  },
  {
    id: 'mod-05',
    moduleNumber: 5,
    title: 'Marketing Digital e Tráfego para Delivery',
    description: 'Como gerar fluxo contínuo de novos clientes pelas redes sociais e campanhas locais.',
    lessons: [
      {
        id: 'les-05-1',
        title: 'Estratégias de Instagram e TikTok para negócios gastronómicos e lojas locais',
        duration: '25 min',
        type: 'video',
        contentSummary: 'Fotografia de produto com telemóvel que desperta fome irresistível e como criar reels e vídeos curtos virais.',
      },
      {
        id: 'les-05-2',
        title: 'Anúncios geolocalizados no Meta Ads (raio de 3km a 7km)',
        duration: '34 min',
        type: 'video',
        contentSummary: 'Passo a passo para anunciar exclusivamente para pessoas com fome no seu bairro nos horários de almoço e jantar.',
      },
      {
        id: 'les-05-3',
        title: 'Automação de WhatsApp e recuperação de clientes inactivos',
        duration: '24 min',
        type: 'tool',
        contentSummary: 'Disparos estratégicos na quarta e sexta-feira que geram picos imediatos de encomendas sem gastar com anúncios.',
      }
    ]
  },
  {
    id: 'mod-06',
    moduleNumber: 6,
    title: 'Como Escalar as Vendas e Reter Clientes',
    description: 'Aumento de ticket médio, programas de fidelização, Dark Kitchens e expansão multi-ponto.',
    lessons: [
      {
        id: 'les-06-1',
        title: 'Upselling e Cross-selling nos combos de entrega',
        duration: '21 min',
        type: 'video',
        contentSummary: 'Como transformar um pedido de 3.500 Kz num pedido de 6.200 Kz sugerindo bebidas, sobremesas e molhos especiais.',
      },
      {
        id: 'les-06-2',
        title: 'Criação de programas de fidelização simples e irresistíveis',
        duration: '19 min',
        type: 'article',
        contentSummary: 'Mecanismos que fazem o cliente pedir 4 vezes por mês no seu estabelecimento em vez de pedir aos concorrentes.',
      },
      {
        id: 'les-06-3',
        title: 'Modelo de Dark Kitchen e expansão para novas zonas ou cidades',
        duration: '30 min',
        type: 'video',
        contentSummary: 'Operando cozinhas virtuais em zonas industriais ou residenciais com custos fixos 70% menores que salões abertos.',
      }
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'curso-01',
    title: 'Como Criar um Delivery do Zero',
    slug: 'como-criar-um-delivery-do-zero',
    category: 'Iniciante',
    level: 'Iniciante',
    duration: '18 horas',
    totalLessons: 32,
    priceKz: 28000,
    priceFormatted: '28.000 Kz',
    rating: 4.9,
    reviewsCount: 148,
    image: '/src/assets/images/hero_delivery_tukoo_1790671957715.jpg',
    description: 'O guia completo e prático para conceber, legalizar, equipar e inaugurar a sua operação de entregas com lucro desde o primeiro mês.',
    longDescription: 'Este curso foi desenhado especificamente para empreendedores que desejam entrar no lucrativo mercado de delivery sem cometer os erros caros da maioria dos iniciantes. Aprenderá passo a passo como definir o cardápio ou catálogo ideal, escolher embalagens que mantêm a integridade térmica, negociar fornecedores, calcular preços que deixam margem real e lançar uma campanha de inauguração com fila de pedidos.',
    featured: true,
    instructor: {
      name: 'Manuel Kilamba',
      role: 'Consultor Operacional & Fundador de Redes de Delivery',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      bio: 'Com mais de 10 anos de experiência em logística urbana e restauração, liderou a implementação de mais de 35 operações de delivery de sucesso em Luanda, Benguela e Huíla.'
    },
    highlights: [
      'Validação de nicho e produtos de alto valor percebido',
      'Checklist completo de equipamentos, motos e embalagens',
      'Planilha financeira de cálculo de margem e ponto de equilíbrio',
      'Roteiro de inauguração com campanha explosiva de 3 dias',
      'Modelos de contrato e termos para prestadores de serviço'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(0, 3),
    faqs: [
      {
        question: 'Preciso ter um restaurante físico para fazer este curso?',
        answer: 'Não. O curso ensina inclusive como começar a partir da cozinha de sua casa ou montando uma Dark Kitchen sem custos de salão comercial.'
      },
      {
        question: 'Recebo certificado ao concluir?',
        answer: 'Sim! Ao assistir às aulas e concluir os exercícios práticos, terá acesso ao Certificado Digital Oficial de Conclusão emitido pela Aprendendo Delivery.'
      },
      {
        question: 'Como acedo às aulas?',
        answer: 'O acesso é imediato após a inscrição. Pode assistir no telemóvel, tablet ou computador 24 horas por dia.'
      }
    ]
  },
  {
    id: 'curso-02',
    title: 'Gestão Eficiente de Pedidos e Entregas',
    slug: 'gestao-de-pedidos-e-entregas',
    category: 'Gestão',
    level: 'Intermédio',
    duration: '14 horas',
    totalLessons: 24,
    priceKz: 22000,
    priceFormatted: '22.000 Kz',
    rating: 4.8,
    reviewsCount: 96,
    image: '/src/assets/images/course_motoboy_fleet_1790671002400.jpg',
    description: 'Domine a arte do despacho ágil, redução de tempo de espera, controlo de estafetas e processos que eliminam perdas e reclamações.',
    longDescription: 'Se o seu delivery já tem pedidos mas sofre com atrasos, comida fria, motoboys desmotivados e clientes impacientes no WhatsApp, este curso é a chave para a estabilidade. Aprenda métodos de engenharia de produção aplicados a pequenos e médios negócios de entrega rápida.',
    featured: true,
    instructor: {
      name: 'Eng. Adão Cassoma',
      role: 'Especialista em Logística Urbana e Frotas',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      bio: 'Engenheiro de produção com especialização em logística de última milha (Last-Mile Delivery), geriu operações com mais de 80 motoboys em circulação diária.'
    },
    highlights: [
      'Redução do tempo médio de despacho de 45 para 18 minutos',
      'Configuração de raios de entrega eficientes com faixas de preço',
      'Modelos de remuneração fixa vs. variável para estafetas',
      'Gestão de queixas e devoluções com taxa zero de atrito',
      'Auditoria de inventário para impedir desperdício de matérias-primas'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(2, 5),
    faqs: [
      {
        question: 'O curso serve para quem trabalha com produtos não alimentares?',
        answer: 'Sim! As metodologias de rota, expedição e despacho aplicam-se perfeitamente a lojas de roupa, peças automotivas, farmácias e supermercados.'
      }
    ]
  },
  {
    id: 'curso-03',
    title: 'Marketing Digital & Vendas para Delivery',
    slug: 'marketing-digital-para-delivery',
    category: 'Marketing',
    level: 'Iniciante',
    duration: '16 horas',
    totalLessons: 28,
    priceKz: 25000,
    priceFormatted: '25.000 Kz',
    rating: 4.95,
    reviewsCount: 210,
    image: '/src/assets/images/course_restaurant_kitchen_1790670989122.jpg',
    description: 'Estratégias comprovadas para atrair clientes famintos no Instagram, WhatsApp e anúncios locais de alta conversão.',
    longDescription: 'Aprenda a máquina de atracção de clientes que garante faturamento contínuo de segunda a domingo. Vamos ensinar fotografia de comida irresistível com qualquer smartphone, criação de promoções magnéticas e configuração de anúncios no Meta Ads direcionados para um raio de 3 a 5 km do seu negócio.',
    featured: true,
    instructor: {
      name: 'Nádia dos Santos',
      role: 'Estrategista de Tráfego Pago e Copywriting Gastronómico',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
      bio: 'Criadora de campanhas para marcas de restauração e retalho em Angola, responsável por mais de 500 milhões de Kz em vendas rastreadas por canais digitais.'
    },
    highlights: [
      'Anúncios de tráfego local no Facebook e Instagram Ads passo a passo',
      'Roteiros prontos de mensagens persuasivas para atendimento no WhatsApp',
      'Guia de fotos gastronómicas de alto impacto usando apenas o telemóvel',
      'Calendário de promoções para terça, quarta e fins de semana',
      'Estratégias de fidelização e recompra programada'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(3, 6),
    faqs: [
      {
        question: 'Preciso ter muito dinheiro para investir em anúncios?',
        answer: 'De forma alguma. Ensinamos como começar com orçamentos modestos (a partir de 1.500 Kz por dia) e reinvestir o lucro das primeiras vendas.'
      }
    ]
  },
  {
    id: 'curso-04',
    title: 'Como Criar a sua Plataforma de Delivery',
    slug: 'como-criar-uma-plataforma-de-delivery',
    category: 'Tecnologia',
    level: 'Avançado',
    duration: '20 horas',
    totalLessons: 36,
    priceKz: 35000,
    priceFormatted: '35.000 Kz',
    rating: 4.9,
    reviewsCount: 78,
    image: '/src/assets/images/course_app_technology_1790671037088.jpg',
    description: 'Aprenda a montar e gerir o seu próprio aplicativo e website de pedidos online sem pagar comissões abusivas a terceiros.',
    longDescription: 'Liberte o seu negócio da dependência de agregadores com comissões de até 25%. Neste curso avançado, apresentamos as melhores ferramentas e tecnologias no-code e customizáveis para lançar a sua própria plataforma com pagamentos integrados, geolocalização e sistema de gestão para estafetas.',
    featured: false,
    instructor: {
      name: 'Carlos Vanda',
      role: 'Arquiteto de Software & Fundador de Soluções Logísticas',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      bio: 'Desenvolvedor sénior e especialista em sistemas de pedidos online, com dezenas de apps publicadas na Google Play e App Store.'
    },
    highlights: [
      'Escolha entre plataformas prontas vs. soluções personalizadas',
      'Configuração de catálogo dinâmico com adicionais e variações',
      'Integração de pagamentos com referência Multicaixa e cartões',
      'Painel de despacho e rastreio em tempo real para o cliente',
      'Estratégia de incentivo para migrar clientes para o canal próprio'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(1, 4),
    faqs: [
      {
        question: 'Preciso saber programar para fazer este curso?',
        answer: 'Não é obrigatório saber programar. Cobrimos tanto ferramentas intuitivas prontas sem código como a integração técnica para quem deseja customizar.'
      }
    ]
  },
  {
    id: 'curso-05',
    title: 'Como Recrutar, Treinar e Gerir Motoboys',
    slug: 'como-trabalhar-com-motoboys',
    category: 'Gestão',
    level: 'Intermédio',
    duration: '10 horas',
    totalLessons: 18,
    priceKz: 18000,
    priceFormatted: '18.000 Kz',
    rating: 4.85,
    reviewsCount: 114,
    image: '/src/assets/images/course_motoboy_fleet_1790671002400.jpg',
    description: 'Guia definitivo de liderança de equipas de entrega: contratação, segurança na estrada, planos de remuneração e motivação.',
    longDescription: 'O elo mais importante de qualquer delivery é o profissional que entrega a encomenda ao cliente final. Aprenda a recrutar estafetas de confiança, criar manuais de conduta profissional, implementar rotinas de segurança rodoviária e estabelecer sistemas de bonificação que mantêm a equipa pontual e leal.',
    featured: false,
    instructor: {
      name: 'Eng. Adão Cassoma',
      role: 'Especialista em Logística Urbana e Frotas',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      bio: 'Formador de mais de 300 estafetas profissionais em Angola com foco em segurança defensiva e excelência de atendimento.'
    },
    highlights: [
      'Processo seletivo e validação de antecedentes e carta de condução',
      'Contratos de prestação de serviços e boas práticas jurídicas locais',
      'Plano de incentivos por entregas pontuais e zero avarias',
      'Normas de higiene, transporte térmico e postura com o cliente',
      'Manutenção preventiva das motorizadas para reduzir quebras'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(2, 4),
    faqs: [
      {
        question: 'Serve também para estafetas de carro ou bicicleta?',
        answer: 'Sim, todos os princípios de gestão, roteirização e relacionamento com o estafeta aplicam-se a qualquer modal de transporte.'
      }
    ]
  },
  {
    id: 'curso-06',
    title: 'Aceleração de Vendas & Fidelização no Delivery',
    slug: 'como-aumentar-as-vendas-no-delivery',
    category: 'Empreendedorismo',
    level: 'Avançado',
    duration: '15 horas',
    totalLessons: 26,
    priceKz: 26000,
    priceFormatted: '26.000 Kz',
    rating: 4.92,
    reviewsCount: 165,
    image: '/src/assets/images/course_restaurant_kitchen_1790670989122.jpg',
    description: 'Estratégias avançadas de engenharia de cardápio, aumento de ticket médio, retenção de clientes e expansão para novas áreas.',
    longDescription: 'Transforme o seu delivery numa operação escalável com alto retorno sobre o investimento. Este curso aborda técnicas avançadas de psicologia de preços, combos inteligentes, programas de pontos que funcionam e como abrir uma segunda unidade ou cozinha satélite sem duplicar os custos fixos.',
    featured: false,
    instructor: {
      name: 'Manuel Kilamba',
      role: 'Consultor Operacional & Fundador de Redes de Delivery',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      bio: 'Conselheiro de mais de 15 grupos gastronómicos em Luanda e Lisboa.'
    },
    highlights: [
      'Engenharia de cardápio: identificando os pratos estrelas e os que dão prejuízo',
      'Técnicas de combo para elevar o ticket médio em mais de 40%',
      'Sistemas de cashback e cartões de fidelidade digital',
      'Métricas essenciais: LTV, CAC, Taxa de Churn e Margem de Contribuição',
      'Estratégia de Dark Kitchen compartilhada para novas regiões'
    ],
    modules: CORE_CURRICULUM_MODULES.slice(3, 6),
    faqs: [
      {
        question: 'Este curso é indicado para quem está no início?',
        answer: 'Recomendamos que tenha pelo menos a sua operação desenhada ou em funcionamento inicial para aproveitar ao máximo as técnicas de escala.'
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'Como abrir um negócio de delivery lucrativo em Luanda: Guia Completo',
    slug: 'como-abrir-um-negocio-de-delivery-em-luanda',
    category: 'Empreendedorismo',
    date: '28 Setembro 2026',
    readTime: '6 min de leitura',
    summary: 'Conheça os passos fundamentais para estruturar a sua operação de entrega na capital angolana, desde a escolha da localização até a selecção de motas e fornecedores.',
    image: '/src/assets/images/hero_delivery_tukoo_1790671957715.jpg',
    author: {
      name: 'Manuel Kilamba',
      role: 'Especialista em Logística Urbana'
    },
    content: `
O mercado de delivery em Angola está a vivenciar um dos seus períodos de maior expansão. Com a crescente adesão ao comércio digital, pagamentos móveis e a necessidade de comodidade nas grandes urbes como Luanda, os negócios de entregas rápidas tornaram-se pilares do consumo diário.

No entanto, abrir um delivery bem-sucedido vai muito além de comprar uma motorizada e publicar fotos na internet. Requer planeamento minucioso, domínio de margens operacionais e foco obsessivo no tempo de entrega.

### 1. Definição do Nicho e Raio de Atuação
O erro mais frequente de quem inicia é querer entregar em toda a extensão de Luanda — desde Cacuaco até Talatona e Kilamba. Isso pulveriza a capacidade de resposta e faz com que os pedidos cheguem frios ou com mais de 90 minutos de atraso.
* Comece delimitando um raio de atendimento estrito de 3 km a 5 km.
* Conquiste primeiro a fidelidade do seu bairro antes de expandir.

### 2. Embalagens: O Seu Cartão de Visita Térmico
A embalagem não serve apenas para transportar o alimento ou produto; ela protege a reputação do seu negócio. Invista em caixas com respiradouros apropriados para alimentos fritos e sacos térmicos reforçados com fecho estanque.

### 3. Comunicação Clara e Atendimento Ágil
Em Luanda, o WhatsApp continua a ser o canal de maior conversão imediata. Ter respostas automáticas amigáveis, um menu digital limpo com fotos reais e confirmação imediata da estimativa de tempo transforma visitantes casuais em clientes semanais.
    `
  },
  {
    id: 'art-02',
    title: 'Quanto custa criar um delivery em Angola? Orçamento real detalhado',
    slug: 'quanto-custa-criar-um-delivery',
    category: 'Gestão Financeira',
    date: '24 Setembro 2026',
    readTime: '8 min de leitura',
    summary: 'Apresentamos um levantamento detalhado de custos fixos, variáveis, aquisição de equipamentos e capital de giro para iniciar sem surpresas.',
    image: '/src/assets/images/course_motoboy_fleet_1790671002400.jpg',
    author: {
      name: 'Adão Cassoma',
      role: 'Engenheiro de Produção'
    },
    content: `
Uma das perguntas mais recorrentes dos alunos da Aprendendo Delivery é: "Com quanto capital consigo efectivamente colocar a minha operação na rua?".

Para responder com clareza, dividimos o investimento em três pilares fundamentais: Infraestrutura Inicial, Frota & Equipamentos de Transporte, e Capital de Giro para os primeiros 60 dias.

### Infraestrutura Mínima Viável
Se optar por operar no modelo Dark Kitchen (cozinha fechada focada apenas em entregas) a partir de um espaço já existente, o investimento em adaptações sanitárias, bancadas de inox e refrigeração inicial pode variar entre 450.000 Kz e 1.200.000 Kz.

### Equipamentos e Frotas
* Mochila térmica profissional impermeável com divisórias: 35.000 Kz a 60.000 Kz por unidade.
* Smartphone dedicado ao atendimento comercial e GPS: 75.000 Kz.
* Impressora térmica bluetooth de pedidos (58mm/80mm): 45.000 Kz.
* Motorizada própria (caso não trabalhe com estafetas que possuam mota própria): 850.000 Kz a 1.400.000 Kz (nova ou semi-nova revisada).

### O Segredo do Capital de Giro
Nunca inicie sem reservar o equivalente a pelo menos dois meses de custos fixos (combustível, embalagens e salários/taxas dos motoboys). Isso assegura tranquilidade enquanto o volume de vendas atinge o ponto de equilíbrio.
    `
  },
  {
    id: 'art-03',
    title: 'Como recrutar e liderar motoboys de confiança para o seu negócio',
    slug: 'como-trabalhar-com-motoboys-de-confianca',
    category: 'Operações',
    date: '19 Setembro 2026',
    readTime: '5 min de leitura',
    summary: 'Práticas essenciais de contratação, segurança na estrada, acordos de remuneração e incentivos que garantem pontualidade e zero avarias.',
    image: '/src/assets/images/course_restaurant_kitchen_1790670989122.jpg',
    author: {
      name: 'Nádia dos Santos',
      role: 'Estrategista Operacional'
    },
    content: `
O estafeta é o único ponto de contacto físico entre o seu negócio e o seu cliente. A sua simpatia, apresentação, cuidado com a encomenda e rapidez definem se o cliente voltará a encomendar ou se deixará uma avaliação negativa.

### 1. Critérios Rigorosos de Admissão
Não contrate apenas quem tem uma mota disponível. Realize testes práticos de conhecimento das ruas e trânsito da cidade, verifique a habilitação legal e o histórico profissional.

### 2. Estrutura de Remuneração Justa e Motivadora
O modelo híbrido é o que apresenta melhores resultados em Angola:
* Uma diária fixa de suporte que cobre custos essenciais;
* Um valor progressivo por entrega concluída com sucesso;
* Bónus mensal por assiduidade e avaliações 5 estrelas dos clientes.

Essa combinação alinha o interesse do estafeta ao crescimento do negócio: quanto mais pedidos forem entregues com perfeição, mais ele ganha.
    `
  },
  {
    id: 'art-04',
    title: 'WhatsApp para Restaurantes: Como transformar conversas em pedidos automáticos',
    slug: 'whatsapp-para-restaurantes-pedidos-automaticos',
    category: 'Tecnologia',
    date: '15 Setembro 2026',
    readTime: '7 min de leitura',
    summary: 'Passo a passo para implementar catálogos interactivos, scripts de fechamento rápido e respostas automáticas que poupam horas de digitação manual.',
    image: '/src/assets/images/course_app_technology_1790671037088.jpg',
    author: {
      name: 'Carlos Vanda',
      role: 'Especialista em Automação'
    },
    content: `
Demorar mais de 3 minutos para responder a uma mensagem no WhatsApp reduz a probabilidade de venda em mais de 70%. Quando o cliente está com fome ou precisa de uma encomenda urgente, ele procura o primeiro concorrente que responda de imediato.

### Como Montar um Funil de WhatsApp Imparável
1. **Mensagem de Boas-Vindas Imediata com Link do Cardápio**: Logo na primeira mensagem, forneça o link com fotos e preços actualizados.
2. **Respostas Rápidas Gravadas**: Tenha atalhos no WhatsApp Business para chaves de pagamento Multicaixa Express, dados de entrega e tempos estimados de confecção.
3. **Confirmação Clara com Resumo do Pedido**: Envie sempre o resumo detalhado com itens, taxa de entrega, valor total e endereço confirmado para evitar devoluções.
    `
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Mateus Diogo',
    role: 'Fundador & Gerente',
    company: 'Sabor d’Luanda Burger',
    location: 'Kilamba, Luanda',
    comment: 'Antes do Aprendendo Delivery, perdíamos cerca de 15 pedidos por semana por desorganização dos estafetas e atrasos na cozinha. Aplicámos o método de triagem e reduzimos o tempo de entrega de 65 para 28 minutos. As vendas triplicaram em 4 meses!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 'test-02',
    name: 'Helena Bartolomeu',
    role: 'Proprietária',
    company: 'Doçura & Arte Confeitaria',
    location: 'Talatona, Luanda',
    comment: 'Eu tinha muito receio de entregar bolos decorados com motas por causa do risco de avaria. O módulo de embalagens e gestão com motoboys salvou o meu negócio. Hoje temos a nossa própria equipa de estafetas e clientes fidelizados.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 'test-03',
    name: 'Jorge Miguel',
    role: 'Co-fundador',
    company: 'Express Farma Delivery',
    location: 'Maianga, Luanda',
    comment: 'Os cursos da Aprendendo Delivery deram-nos a base técnica para montar a nossa plataforma e integrar pagamentos por Multicaixa Express. A clareza dos professores e o suporte prático são inigualáveis no mercado angolano.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 'test-04',
    name: 'Elizabete Neves',
    role: 'Diretora Comercial',
    company: 'Fresh Angola Frutas & Legumes',
    location: 'Benfica, Luanda',
    comment: 'A consultoria e a formação da equipa foram essenciais para estruturarmos as entregas no mesmo dia (Same-Day). Passámos de 20 entregas por semana para mais de 180 encomendas diárias com taxa de satisfação de 98%.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-01',
    title: 'Criação de Website de Pedidos & Cardápio Digital',
    description: 'Plataforma web rápida, moderna, optimizada para telemóveis com fotos em alta definição, carrinho e checkout sem atrito.',
    estimatedPriceKz: 140000,
    iconName: 'Globe',
    category: 'tech'
  },
  {
    id: 'srv-02',
    title: 'Desenvolvimento de Aplicação de Delivery Dedicada',
    description: 'App Android e iOS exclusiva da sua marca, com notificações push, geolocalização e histórico de encomendas do cliente.',
    estimatedPriceKz: 320000,
    iconName: 'Smartphone',
    category: 'tech'
  },
  {
    id: 'srv-03',
    title: 'Sistema de Despacho & Gestão de Frotas',
    description: 'Painel em tempo real para despachantes: atribuição de rotas aos motoboys, cálculo de quilometragem e métricas de pontualidade.',
    estimatedPriceKz: 180000,
    iconName: 'Bike',
    category: 'operations'
  },
  {
    id: 'srv-04',
    title: 'Integração de Pagamentos (Multicaixa Express & Cartões)',
    description: 'Automatize a confirmação de pagamentos por referência, QR Code e Multicaixa Express sem depender de envio de comprovativos.',
    estimatedPriceKz: 95000,
    iconName: 'CreditCard',
    category: 'tech'
  },
  {
    id: 'srv-05',
    title: 'Automação Comercial de WhatsApp para Delivery',
    description: 'Configuração de chatbots inteligentes com atendimento 24/7, recuperação de carrinhos abandonados e envio de campanhas.',
    estimatedPriceKz: 110000,
    iconName: 'MessageSquare',
    category: 'growth'
  },
  {
    id: 'srv-06',
    title: 'Consultoria Operacional & Estruturação de Dark Kitchen',
    description: 'Acompanhamento presencial e remoto com especialistas para desenhar o fluxo de cozinha, embalagens e redução de tempos mortos.',
    estimatedPriceKz: 250000,
    iconName: 'Briefcase',
    category: 'operations'
  }
];

export const FAQS = [
  {
    question: 'O que é o Aprendendo Delivery?',
    answer: 'O Aprendendo Delivery é a primeira plataforma especializada em Angola dedicada a ensinar, estruturar e acelerar negócios de entregas rápidas, restaurantes com delivery, frotas de motoboys e lojas online. Oferecemos cursos práticos, serviços de tecnologia e consultoria especializada.'
  },
  {
    question: 'Preciso ter um negócio já aberto para aprender?',
    answer: 'Não. Os nossos cursos foram concebidos tanto para quem está a começar absolutamente do zero com uma ideia na cabeça, como para quem já possui um restaurante, farmácia ou loja física e deseja implementar ou optimizar o seu canal de entregas.'
  },
  {
    question: 'Posso começar com poucos recursos financeiros?',
    answer: 'Sim! Dedicamos módulos inteiros a ensinar como validar a sua ideia utilizando a estrutura que já possui em casa, como operar no modelo Dark Kitchen sem pagar rendas comerciais caras e como fazer parcerias estratégicas com estafetas sem precisar comprar motas logo no início.'
  },
  {
    question: 'Os cursos são 100% online?',
    answer: 'Sim, todos os conteúdos são disponibilizados na nossa Área do Aluno com acesso imediato após a inscrição. Pode assistir quando quiser, pausar, rever e aceder aos materiais de apoio em PDF e planilhas.'
  },
  {
    question: 'Posso aprender e assistir pelo telemóvel?',
    answer: 'Com certeza! Toda a nossa plataforma foi projectada Mobile-First, garantindo uma experiência fluida, rápida e sem travamentos em qualquer smartphone ou tablet.'
  },
  {
    question: 'Posso criar o meu próprio delivery depois dos cursos?',
    answer: 'Sem dúvida. O objetivo de todos os nossos cursos é a aplicação prática. Concluirá a formação com um plano de negócios estruturado, cardápio desenhado, checklist operacional e campanha de lançamento pronta para entrar em acção.'
  },
  {
    question: 'O Aprendendo Delivery também oferece consultoria e desenvolvimento de sistemas?',
    answer: 'Sim! Para além da formação de alunos, temos uma equipa especializada que desenvolve websites de pedidos, aplicações mobile dedicadas, integrações de pagamento com Multicaixa Express e consultoria para estruturação de frotas.'
  },
  {
    question: 'Como posso entrar em contacto com a vossa equipa?',
    answer: 'Pode falar connosco diretamente pelo botão de WhatsApp flutuante no canto do ecrã, preencher o formulário na secção de contactos ou visitar-nos no nosso polo em Luanda.'
  }
];
