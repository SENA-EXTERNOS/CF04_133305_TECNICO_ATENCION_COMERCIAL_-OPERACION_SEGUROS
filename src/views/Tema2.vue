<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Marketing]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.svg")
      .col-lg-8
        p.mb-0 A continuación, se aborda la estrategia de #[em marketing], la cual pretende, en las organizaciones, fijar una directriz sobre la administración de recursos para el logro de objetivos y metas propuestas en el área funcional de mercadeo. Esta estrategia busca identificar las diferentes acciones a seguir, que permitan alcanzar los objetivos trazados a nivel organizacional, desde los conceptos propios de la eficiencia y la eficacia en la realización de las tareas. Cada una de estas acciones deben estar plenamente cohesionadas con la estructura general de las diferentes herramientas de gestión que utilice la organización; es por eso que los factores de tiempo y recursos a utilizar, serán entendidos y conocidos por todos los miembros del equipo de trabajo.
    
    p A continuación, se presentan los hechos más relevantes del #[em marketing] a lo largo del tiempo.
  
    .BGIMG03.p-4.mb-4(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            p.mb-0 El #[em marketing] se desarrolla y profesionaliza con la revolución industrial en el siglo XVIII. En esa época, se promulgan leyes antimonopolio, logrando que las empresas ofrezcan diferencias en el mismo producto, con el resto de competidores.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img02.png")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            p En el siglo XVIII, Adam Smith escribe la siguiente afirmación sobre el concepto de #[em marketing]: “El consumo es el único fin y propósito de toda producción y los intereses del productor solo deben ser atendidos en la medida en que sea necesario para promover la intención del consumidor”.
            p.mb-0 Con esta base, los fabricantes empiezan a buscar, en sus clientes, la necesidad y motivación por la cual compran el producto. 
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img03.png")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Siglo XX
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                p En 1902, el profesor E. D. Jones de la Universidad de Michigan utilizó el término #[em marketing].
              li
                <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                p En 1914, el profesor Lewis Weld sacó a la luz la primera investigación científica sobre el #[em marketing].
              li
                <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                p En 1915, se editaría el primer libro de #[em marketing] “Algunos problemas de la distribución” escrito por Arch Wilkinson Shaw. 

          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img04.png")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Plan estratégico de #[em marketing]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 El plan estratégico de #[em marketing] como herramienta de gestión, es el compendio documental en el cual se plasman los pasos a seguir, los métodos, metodologías y recursos, determinados en una línea de tiempo y encaminados a alcanzar los objetivos de las organizaciones. Todo plan estratégico de #[em marketing], hace parte de la programación global de la organización para lograr sus imperativos estratégicos y su desempeño eficiente en la utilización de los recursos disponibles. Teniendo en cuenta lo que expresa el autor Kotler y Armstrong en Fundamentos del #[em Marketing], conocer al competidor e identificar el grado de satisfacción de los clientes, está relacionado directamente con los valores y los objetivos estratégicos, así como con la visión de futuro y que, por ende, son elementos que hacen parte de un plan de #[em marketing] estratégicamente propuesto. Desde la teoría y modelo económico de la globalización, un plan estratégico de #[em marketing] se centra en las necesidades de los clientes. Alrededor de ellas, se generan las premisas de crecimiento de la organización.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img05.png")
    
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 2
      span Estructura del plan estratégico de #[em marketing]
    
    figure.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/img06.svg")

    .BGIMG04.p-md-5.p-4(data-aos="fade-right")
      p El diseño de los planes estratégicos involucra a todas las acciones que se encaminan al alcance de objetivos misionales; se requiere de la concatenación de las diferentes áreas, teniendo claros los propósitos de cada una de ellas, sus metas y recursos apropiados para el cumplimiento de los resultados esperados.
      p Un plan estratégico de #[em marketing], está compuesto por diferentes elementos.
      p Conozcamos cada uno de ellos:
    
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5(titulo="Objetivo" :icono="require('@/assets/curso/tema2/img07.svg')")
          .row.align-items-center
            .col-lg-6.order-lg-1.order-2
              p Un objetivo es el fin o meta que se propone alcanzar y hacia el cual se dirigen los esfuerzos y recursos de la organización. Al hacer referencia a los objetivos dentro del plan estratégico de #[em marketing], se deben tener en cuenta aspectos como:
              ul.lista-ul--color.ms-4
                li
                  <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                  | Objetivos de mercado. 
                li
                  <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                  | Objetivos de precios.
                li
                  <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                  | Objetivos de calidad.
                li
                  <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                  | Objetivos de publicidad y promoción.
                li
                  <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
                  | Objetivos de servicio.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img11.png")
        .py-4.py-md-5(titulo="Políticas" :icono="require('@/assets/curso/tema2/img08.svg')")
          .row.align-items-center
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Las políticas son el conjunto de criterios de ejecución que aportan al logro de los objetivos y facilitan la implementación de las estrategias. Las políticas tienen un carácter descriptivo y se constituyen en guías para orientar las acciones. Su actuación a nivel organizacional es fundamental, atendiendo a los lineamientos que se establecen y que contribuyen con la dirección, para la toma de decisiones. Generalmente, se encuentran políticas sobre el producto o el servicio, políticas de precios, políticas de distribución y políticas sobre medios. Un ejemplo de estos aspectos, es la fijación de precios, tanto para el producto, el canal o el medio, desde políticas que se fundamentan en los costos del producto, atendiendo a un porcentaje de rentabilidad promedio en el mercado.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img12.png")
        .py-4.py-md-5(titulo="Programas de acción" :icono="require('@/assets/curso/tema2/img09.svg')")
          .row.align-items-center
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Están encaminados a corregir o ajustar las no conformidades o desviaciones en los procesos organizacionales. Estos desarrollos requieren de seguimiento y acompañamiento, con el ánimo de alcanzar los resultados correctivos. Siendo resultado de todo proceso estratégico, los programas, facilitan ordenar los objetivos y la comunicación asertiva. De allí que los programas de acciones en el plan de #[em marketing] se posicionan como un instrumento que contribuye al proceso de evaluación y, por ende, de mejora, donde al especificar elementos como las tareas que se deben ejecutar, sus responsables asignados y el tiempo y los recursos para poder realizar esas tareas, permiten un control de avance y seguimiento adecuado. Para el área específica de #[em marketing], como proceso organizacional, un plan de acción que esté enfocado en la estrategia de consolidación de grupo objetivo, debe contener una actividad de relanzamiento con muestras gratis, que especifique la población a impactar y la tarea de seguimiento para fidelizar a esos clientes.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img13.png")
        .py-4.py-md-5(titulo="Estrategia" :icono="require('@/assets/curso/tema2/img10.svg')")
          .row.align-items-center
            .col-lg-6.order-lg-1.order-2
              p.mb-0 Se refiere a los cursos de acción que proponen el paso a paso para exponer, ante la dirección, la gestión y la utilización de los recursos disponibles en el cumplimiento de los objetivos organizacionales. Charles O. Rossotti (2003), dice: “estrategia es el motor que incrementa la flexibilidad de la organización, para adaptarse al cambio y la capacidad para alcanzar las nuevas y creativas opiniones”. Las estrategias responden al interrogante del qué vamos a hacer para llegar a la meta propuesta. Desde un concepto más global, se entiende como el conjunto de previsiones sobre fines y procedimientos que forman una secuencia lógica de pasos o fases a ser ejecutadas y que permiten alcanzar los objetivos planeados con efectividad. Se pueden clasificar desde lo operativo, lo técnico y lo táctico. Se pueden formular desde la alta gerencia, o desde las diferentes áreas funcionales.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img14.png")

      .h4 Etapas del plan estratégico de #[em marketing]
      p Dentro del diseño y definición del plan estratégico se contemplan unas etapas básicas e indispensables que requieren procesos de control, en la ejecución de cada una de ellas. Estas etapas están conformadas así: análisis de la situación, diagnóstico, fijación de objetivos, determinación de estrategias y presupuesto.
      p A continuación, se explican cada una de las etapas del plan estratégico de #[em marketing].

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR04")
      .row.justify-content-center.align-items-center(titulo="Análisis de la situación")
        .col-lg-6.order-lg-1.order-2
          p Este análisis comprende una intervención desde los factores externos y los factores internos. Con la identificación de los aspectos relevantes del entorno y al interior de la organización, se pretende:
          ul.lista-ul--color.ms-4
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Definir los alcances que se requieren en los planes.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Identificar la percepción de la competencia.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Identificar la percepción de los vinculados.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Conocer los recursos que se requieren para ejecutar el plan.
            </li>
          p Desde el análisis situacional se da respuesta a los siguientes interrogantes:
          ul.lista-ul--color.ms-4  
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Quiénes son nuestros clientes?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Por qué compran?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Cuándo compran?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Dónde compran?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Cómo compran?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Cuánto compran?
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 ¿Con qué frecuencia compran?
            </li>
          p El comportamiento y las tendencias de los consumidores, son aspectos que se identifican en este proceso.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img15.png")
      .row.justify-content-center.align-items-center(titulo="Diagnóstico")
        .col-lg-6.order-lg-1.order-2
          p Con la información recolectada en el análisis situacional, se obtiene todo un diagnóstico de la situación organizacional. Para la clasificación y tabulación de la información se puede acceder a una herramienta como la matriz DOFA. Esta matriz provee información sobre las debilidades y amenazas, las fortalezas y oportunidades de la organización en su entorno. Se pretende identificar:
          ul.lista-ul--color.ms-4  
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Entorno y situación del mercado.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Costumbres del sector.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Productos.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Precios.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Oportunidades de negocio.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Capacidad productiva.
            </li>
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img16.png")
      .row.justify-content-center.align-items-center(titulo="Fijación de objetivos")
        .col-lg-6.order-lg-1.order-2
          p Se entiende como uno de los procesos de mayor prioridad para las organizaciones. Son las metas o el fin último que se busca alcanzar. La fijación de objetivos se puede realizar en todos los niveles organizacionales, su gestión refleja las necesidades y la proyección de las políticas misionales de la unidad organizacional; algunos criterios básicos son:
          ul.lista-ul--color.ms-4  
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Mensurabilidad]. Susceptibles de ser cuantificados.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Dimensión temporal]. Plazo para la obtención del logro.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Ser económico]. Es decir, resultados positivos y, por ende, superiores al costo de su implementación.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Ser realista]. Alcanzable.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Inteligentes]. Que su expresión sea en términos claros y precisos.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p #[b Negociables]. Que permitan compromiso y motivación en su desarrollo.
            </li>
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img17.png")
      .row.justify-content-center.align-items-center(titulo="Determinación de estrategias")
        .col-lg-6.order-lg-1.order-2
          p Establecen el qué se va hacer para llegar a los objetivos propuestos.
          p Se clasifican como generales, tácticas u operativas. Se determinan según los lineamientos o políticas del área objeto de estudio y responden a su participación en la misión organizacional. Las estrategias dan foco a las acciones y en períodos de tiempo que sean sujetos medibles y pertinentes.
          p El plan estratégico de #[em marketing] se va desarrollando a través de tácticas muy específicas que son resultados de la planeación operativa. Establecen:
          ul.lista-ul--color.ms-4  
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 El saber hacer de cada persona.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Cuándo se debe hacer.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Cómo lo debe hacer.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 La disponibilidad de recursos a ejecutar.
            </li>
            <li style="margin-bottom: 1px">
              <i class="fas fa-circle" style="color:#30610C; font-size: x-small"></i>
              p.mb-0 Planificación de acciones, tareas y programas.
            </li>
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img18.png")
      .row.justify-content-center.align-items-center(titulo="Presupuesto")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 Los presupuestos están conformados por esos rubros indispensables al planear, porque a través de ellos se proyectan, de forma cuantificada, los elementos que necesita la empresa para cumplir con sus objetivos. Sus principales finalidades consisten en determinar la mejor forma de utilización y asignación de los recursos, a la vez que controlan las actividades de la organización en términos financieros. Se conocen también como el elemento fundamental de la planeación financiera. Se fijan por cada área o departamento y deben involucrar todas las actividades de la organización.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/tema2/img19.png")
    
    .h4 Segmentación de mercado
    p Al momento de hacer una estrategia del plan de #[em marketing], es importante identificar la población por medio de la segmentación de mercados. Para profundizar en el tema de segmentación de los mercados lo invitamos a ver el siguiente video, donde se amplía esta temática.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Política institucional
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img20.png")
      .col-lg-6
        p.mb-0 La política institucional es un documento interno que formaliza lo informal, estableciendo políticas básicas de funcionamiento y criterios orientados de actuación, los cuales son un marco de referencia para determinar, desde un punto de vista ético, si las funciones desarrolladas por el personal se están haciendo bien o mal y si con ello se llega a alguna consecuencia positiva o negativa, de tal manera que genera certidumbre, previsibilidad y reglas claras para obtener procesos transparentes y participativos que enriquecen los valores. Las políticas institucionales se dividen según el alcance y la organización.

    .h4 Políticas según su alcance
    p Este tipo de políticas permiten comprender el alcance que pueden llegar a tener ciertas funciones o responsabilidades de un área o departamento en una organización.
    p Las políticas, según su alcance, se dividen en tres clases:

    .row.justify-content-center.mb-4
      .col-lg-4.col-7.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img21.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Son para toda la empresa y se debe comprobar que la totalidad de los departamentos están al tanto de estas políticas, porque sirven de guía para el comportamiento de todo el personal de la empresa.
      .col-lg-4.col-7.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img22.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Son normas específicas por áreas. Las más comunes son aquellas en las que se especifican los objetivos de calidad que se deben alcanzar por una rama de la organización, políticas medioambientales, prevención de riesgos laborales.
      .col-lg-4.col-7(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img23.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Se fijan para cumplir las necesidades momentáneas o actividades temporales de la empresa, en un momento dado.
    
    .BGIMG02.p-md-5.p-4(data-aos="fade-right")
      .h4 Políticas según las organizaciones
      p Por su parte, las políticas según las organizaciones dependen de las propias características y necesidades de la organización; se elaboran de diferentes maneras en forma de políticas de empresa.
      p Dentro de las políticas, según las organizaciones, se tienen las siguientes:

      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img24.svg')})`}")
              .t.tarjeta-flip__contenido.px-0.p-4.p-xl-5
                p.my-5 Son políticas que van dirigidas a cumplir los requisitos y los compromisos fijados por la empresa. Muestran el plan de mejoramiento de la empresa en la calidad, a corto y a largo plazo.
        .col-lg-4.col-8
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img25.svg')})`}")
              .t.tarjeta-flip__contenido.px-0.p-4.p-xl-5
                p.my-5 Permiten cumplir con la normativa medioambiental vigente y promover ambientalmente el reciclado, la disminución de la contaminación, el uso de transporte público.
      
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img26.svg')})`}")
              .t.tarjeta-flip__contenido.px-0.p-4.p-xl-5
                p.my-5 Son normas para garantizar un uso responsable de la maquinaria y otras herramientas en la empresa, con el objetivo de evitar accidentes y garantizar la integridad física y mental del personal.
        .col-lg-4.col-8
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img27.svg')})`}")
              .t.tarjeta-flip__contenido.px-0.p-4.p-xl-5
                p.my-5 Estas suelen ir encaminadas a la protección de la empresa, protegen la información sensible que posee la organización, para poder garantizar una buena relación legal entre el personal, la empresa y los compradores.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
