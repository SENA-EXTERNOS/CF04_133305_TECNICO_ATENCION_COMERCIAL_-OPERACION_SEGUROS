export default {
  global: {
    componenteFormativo:
      'Sistema financiero, <em>marketing</em>, productos, normatividad, modelos y riesgo financiero',
    descripcionCurso:
      'El sistema financiero es importante para la economía de una nación porque promueve el desarrollo, se convierte en el motor de crecimiento de las empresas en todos los sectores y porque contribuye al progreso y ofrece soluciones para solventar las necesidades de vivienda, estudio y trabajo de una sociedad. El sector financiero es indispensable para el crecimiento de la economía actual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema financiero',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan estratégico de <em>marketing</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Política institucional',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cliente financiero',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Consumidor financiero',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema financiero',
      referencia:
        'Ministerio de Hacienda y Crédito Público. (s.f.). Conformación del Sistema Financiero Colombiano. Superintentencia Financiera de Colombia.',
      tipo: 'Artículo',
      link:
        'https://www.superfinanciera.gov.co/jsp/Publicaciones/publicaciones/loadContenidoPublicacion/id/11268/dPrint/1/c/00',
    },
    {
      tema: 'Sistema financiero',
      referencia:
        'Decreto Ley 663 de 1993. Por medio del cual se actualiza el Estatuto Orgánico del Sistema Financiero y se modifica su titulación y numeración. Abril 2 de 1993.',
      tipo: 'Decreto Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_organico_sistema_financiero.html',
    },
    {
      tema: 'Productos financieros',
      referencia:
        'Decreto 222 de 2020. (Ministerio de Hacienda y Crédito Público). Por el cual se modifica el Decreto 2555 de 2010 en lo relacionado con los corresponsales, las cuentas de ahorro electrónicas, los depósitos electrónicos, el crédito de bajo monto y se dictan otras disposiciones. Febrero 14 de 2020.',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20222%20DEL%2014%20DE%20FEBRERO%20DE%202020.pdf',
    },
    {
      tema: 'Consumidor financiero',
      referencia:
        'Ley 1328 de 2009. Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones. Julio 15 de 2009.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841',
    },
  ],
  glosario: [
    {
      termino: 'Centrales de riesgo',
      significado:
        'entidades de carácter privado que prestan un servicio que permiten conocer el comportamiento de pagos y de responsabilidad con la obligaciones comerciales y financieras de las personas jurídicas y personas naturales.',
    },
    {
      termino: 'Consumidor',
      significado:
        'persona que compra productos de consumo. En mercadeo se aplica a todo comprador.',
    },
    {
      termino: 'Estrategia',
      significado:
        'conjunto de fases o actividades a ser ejecutadas, que permiten alcanzar objetivos planeados con efectividad; involucra la prevención en cada una de ellas.',
    },
    {
      termino: 'Instrumento',
      significado: 'elemento o herramienta de apoyo para una actividad.',
    },
    {
      termino: 'Investigación de mercados',
      significado:
        'proceso para buscar información acerca de consumidores, el entorno de las organizaciones, las necesidades de bienes o servicios, para tomar decisiones relacionadas con el mercado.',
    },
    {
      termino: 'Mercado',
      significado: 'todos aquellos compradores de un producto o un servicio.',
    },
    {
      termino: 'Objetivo',
      significado:
        'los objetivos representan los resultados que la empresa espera obtener, son fines por alcanzar, establecidos cuantitativamente y determinados para realizarse transcurrido un tiempo específico.',
    },
    {
      termino: 'Plan',
      significado: 'comprende una guía para abordar una situación específica.',
    },
    {
      termino: 'Políticas',
      significado:
        'son guías para orientar la acción; son lineamientos generales a observar en la toma de decisiones, sobre algún problema que se repite una y otra vez dentro de una organización.',
    },
    {
      termino: 'Programa',
      significado:
        'esquema en donde se establece la secuencia de actividades específicas que habrán de realizarse para alcanzar los objetivos, y el tiempo requerido para efectuar cada una de sus partes y todos aquellos eventos involucrados en su consecución.',
    },
  ],
  referencias: [
    {
      referencia:
        'Findeter. (s.f.). Atención al Consumidor Financiero. Findeter.',
      link:
        'https://www.findeter.gov.co/sistema-de-atencion-al-consumidor-financiero-sac',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2008). Fundamentos de marketing. Pearson Educación.',
      link:
        'https://www.academia.edu/42228045/Kotler_P_and_Armstrong_G_2008_Fundamentos_de_marketing_8va_edici%C3%B3n_Pearson_Educaci%C3%B3n_M%C3%A9xico',
    },
    {
      referencia:
        'Ley 795 de 2003. Por la cual se ajustan algunas normas del Estatuto Orgánico del Sistema Financiero y se dictan otras disposiciones. Enero 14 de 2003.',
      link: 'https://normativa.archivogeneral.gov.co/ley-795-de/',
    },
    {
      referencia: 'Rossotti, C. (2003). Empresa, estrategia y gestión. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
