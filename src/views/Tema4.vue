<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Consumidor financiero
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.png")
      .col-lg-6
        p Teniendo claridad sobre lo que es el producto financiero es posible, entonces, definir al consumidor financiero y conocer la normatividad lo rige. De acuerdo a lo anterior, se hace necesario abordar el #[b Decreto 222 del 2020] el cual habla acerca de la inclusión financiera. Esta se hace determinante para el desarrollo económico del país, porque cuando la población accede y usa productos y servicios financieros formales, aumenta su capacidad de ahorro y de consumo, su potencial de inversión, y adquiere mecanismos de protección frente a riesgos, aumentando sus oportunidades económicas y mejorando su bienestar.

    p En cada uno de estos procesos se debe tener en cuenta:

    .row.justify-content-center.mb-4
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img02.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.my-5 Que el modelo de corresponsal ha contribuido en gran medida a la inclusión financiera, al permitir ampliar la cobertura de las entidades financieras en todo el territorio nacional, especialmente en zonas rurales y apartadas.
      .col-lg-5.col-8(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img03.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.my-5 Que las cuentas de ahorro electrónicas y los depósitos electrónicos, con trámite de apertura simplificada, han permitido a la población realizar pagos y transacciones de forma segura y construir historiales de información que permiten a la población transitar a otros productos financieros como el crédito y aumentar así la inclusión financiera.

    .BGIMG04.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img04.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                p.my-5 Que el crédito de consumo de bajo monto es un producto creado para que la población, especialmente aquella sin experiencia financiera, pueda satisfacer sus necesidades de financiación, a través de fuentes formales y en condiciones asequibles.
        .col-lg-5.col-8(data-aos="fade-left")
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img05.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                p.my-5 Que la Ley 1955 de 2019, mediante la cual se expide el Plan Nacional de Desarrollo 2018-2022, en su Artículo 182, ordena al Gobierno Nacional a reglamentar la manera en que se profundicen los microcréditos, a través de las entidades del sector financiero, como instrumento de formalización de generación de empleo e instrumento para combatir el "gota a gota" o "paga diario".
      
      p.mb-5 Legalmente se dispone también la normativa del consumidor financiero en el marco de la Ley 1328 de 2009 que tiene por objeto establecer los principios y reglas que rigen la protección de los consumidores financieros en las relaciones entre estos y las entidades vigiladas por la SFC (Superintendencia Financiera de Colombia), sin perjuicio de otras disposiciones que contemplen medidas e instrumentos especiales de protección. A continuación, se presentan el sistema de atención SAC y los sistemas de administración de riesgos SARLAFT, SARO y SARC.
      .h4 SAC
      p #[b Sistema de Atención al Consumidor Financiero (SAC)] lo encontramos en la Ley 1328 de 2009; establecer los principios y reglas que rigen la protección de los consumidores financieros en las relaciones entre estos y las entidades vigiladas por la Superintendencia Financiera de Colombia, sin perjuicio de otras disposiciones que contemplen medidas e instrumentos especiales de protección. También se encuentran los derechos y deberes como consumidor de estos servicios, que existen en el sistema financiero 
      p #[b Reconocimiento de los riesgos SARLAFT]: Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo, el cual se debe implementar en las entidades vigiladas por la Superintendencia Financiera de Colombia, para prevenir el riesgo del lavado de activos y financiamiento del terrorismo; está conformado por dos componentes.
      
      .BGR08.p-4.mb-5
        .h4 Los Componentes del SARLAFT son:
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
              .tarjeta.color-primario.p-4
                h4.text-center Prevención de riesgo
                hr
                p.text-center.mb-5 La prevención para que las entidades vigiladas sean utilizadas para dar apariencia de legalidad a recursos provenientes de actividades delictivas o, para la canalización de recursos, hacia la realización de actividades terroristas.
          .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/img07.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.p-4
                h4.text-center Control
                hr
                p.text-center.mb-5 Detecta las operaciones que se pretendan realizar o se hayan realizado; se aplican medidas preventivas y correctivas, con el fin de establecer los procedimientos del SARLAFT.
          .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.color-primario.p-4
                h4.text-center Lavar activos
                hr
                p.text-center.mb-5 Todo aquel que adquiera, resguarde, invierta, transporte, transforme, custodie, o administre bienes que tengan su origen en actividades de enriquecimiento ilícito, narcotráfico, extorsión, rebelión, secuestro, delitos contra la administración pública, tráfico de migrantes, trata de personas, tráfico de armas, o delitos contra el sistema financiero, están incurriendo en delitos de lavado.
          .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/img09.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.p-4
                h4.text-center.mb-0 Financiamiento del terrorismo
                <hr style="margin: 0em; margin-top: 0.4em; margin-bottom: 1.5em">
                p.text-center.mb-5 Quien legalmente provea, recolecte, entregue, reciba, administre, aporte, custodie, o guarde fondos, bienes y recursos, o cualquier otro acto que promueva, organice, apoye, mantenga, financie o sostenga económicamente, grupos armados al margen de la ley, o a sus integrantes, o a grupos terroristas nacionales o extranjeros, está financiando al terrorismo.

    p A continuación, se presenta la clasificación de riesgos según este Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2
        TabsA.color-primario.mb-5(data-aos="fade-right")
          .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Reputacional")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema4/img10.svg")
            .col
              p.mb-0 La administración de la imagen de la organización como el desprestigio y la publicidad negativa.
          .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Legales")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema4/img11.svg")
            .col
              p.mb-0 Sanciones, multas, indemnizaciones o fallas en contratos.
          .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Contagio")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema4/img12.svg")
            .col
              p.mb-0 Relación de algún miembro de la organización con alguna actividad delictiva, afectando como consecuencia, el nombre de la empresa.
          .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Operativos")
            .col-lg-2.col-3
              img(src="@/assets/curso/tema4/img13.svg")
            .col
              p.mb-0 Fallas o deficiencias de trabajadores, procesos, tecnología.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img14.svg")
    
    p En el mismo contexto de los sistemas de administración de riesgos es posible encontrar el #[b Sistema de Administración de Riesgo Operativo - SARO]: establece las políticas, la estructura, las metodologías y los procedimientos para identificar, medir, controlar y monitorear los riesgos, y determina sus estrategias de capacitación y divulgación.
    p El Fondo de Garantías en Cooperativas (FOGACOOP) fija unas garantías específicas para la gestión de los riesgos bajo los cuales actúa el sector financiero, tales como:

    SlyderF.mb-5(columnas="col-xl-4 col-md-6")
      .BGR09.p-4
        figure.mb-4
          img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
        p.text-center.mb-0 Procurar la reducción del nivel o perfil de riesgo residual consolidado e individual de los riesgos operativos identificados.
      .BGR09.p-4
        figure.mb-4
          img(src='@/assets/curso/tema4/img16.svg' alt='AvatarTop')
        p.text-center.mb-0 Medir previamente el riesgo operativo ante cualquier modificación o ajuste a los procesos del Fondo.
      .BGR09.p-4
        figure.mb-4.mt-4
          img(src='@/assets/curso/tema4/img17.svg' alt='AvatarTop')
        p.text-center.mb-0 Realizar capacitaciones y actividades encaminadas a fortalecer e impulsar, a nivel institucional, la cultura en materia de riesgo operativo.
      .BGR09.p-4
        .row.justify-content-center.mb-4.mt-2
          .col-10
            img(src='@/assets/curso/tema4/img18.svg' alt='AvatarTop')
        p.text-center.mb-0 Asegurar el cumplimiento de las normas internas y externas relacionadas con la administración del riesgo operativo, mediante la fijación de las responsabilidades de los órganos de administración, de control y de los demás funcionarios.
      .BGR09.p-4
        figure.mb-4.mt-4
          img(src='@/assets/curso/tema4/img19.svg' alt='AvatarTop')
        p.text-center.mb-0 Establecer mecanismos de prevención y resolución de conflictos de interés en la recolección de información en las diferentes etapas del SARO, especialmente para el registro de eventos de riesgo operativo.
      .BGR09.p-4
        .row.justify-content-center.mb-4.mt-2
          .col-10
            img(src='@/assets/curso/tema4/img20.svg' alt='AvatarTop')
        p.text-center.mb-0 Contar con mecanismos que permitan identificar los cambios en los controles y en el perfil de riesgo.
      .BGR09.p-4
        .row.justify-content-center.mb-4.mt-3
          .col-8
            img(src='@/assets/curso/tema4/img21.svg' alt='AvatarTop')
        p.text-center.mb-0 Mantener y actualizar los planes de continuidad del negocio.

    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-secundario.p-4(data-aos="fade-right")
        p.mb-0 #[b Sistema de Administración del Riesgo Crediticio (SARC)]: busca evitar o reducir la probabilidad de pérdida para la compañía, proveniente de la disminución del valor de sus activos, como consecuencia que un deudor o contraparte incumpla con sus obligaciones. Para efectos de la evaluación de riesgo crediticio, además de los avales y codeudores solidarios, se pueden considerar como garantías idóneas de la respectiva operación, las fuentes de pago existentes que de manera incondicional atiendan suficientemente el crédito, por el simple requerimiento de la entidad acreedora.

    p El SARC debe estimar o cuantificar las pérdidas esperadas de cada modalidad de crédito. Las entidades pueden diseñar y adoptar respecto de la cartera comercial, de consumo, de vivienda y de microcrédito, ya sea para uno, algunos o la totalidad de sus portafolios, sus propios modelos internos de estimación; para los mismos efectos, los modelos de referencia diseñados por la SFC para diversos portafolios, las entidades deben presentarlos a la SFC para su evaluación previa, la cual, en todos los casos, emitirá un pronunciamiento con respecto de su objeción. Esta homologación es necesaria para realizar los reportes a las centrales de riesgo, los reportes de endeudamiento de crédito y el registro en los estados financieros.
    p En la Tabla 1, se presentan las calificaciones de riesgo en los reportes de endeudamiento y en el registro en los estados financieros que deben aplicar las entidades.


    .row.justify-content-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Agregación de categorías reportadas
        
        .tabla-b.color-acento-contenido.mb-5(data-aos="zoom-in")
          table
            thead
              tr
                th(style="background-color: #E8E8E8; border: 3px solid #E1E1E1;").text-center Categoría de reporte
                th(style="background-color: #E8E8E8; border: 3px solid #E1E1E1;").text-center Categoría agrupada
            tbody
              tr
                td(style="border: 3px solid #E1E1E1;").text-center AA
                td(style="border: 3px solid #E1E1E1;").text-center A
              tr
                td(style="border: 3px solid #E1E1E1;").text-center A
                td(style="border: 3px solid #E1E1E1;").text-center B
              tr
                td(style="border: 3px solid #E1E1E1;").text-center BB
                td(style="border: 3px solid #E1E1E1;").text-center B
              tr
                td(style="border: 3px solid #E1E1E1;").text-center B
                td(style="border: 3px solid #E1E1E1;").text-center C
              tr
                td(style="border: 3px solid #E1E1E1;").text-center CC
                td(style="border: 3px solid #E1E1E1;").text-center C
              tr
                td(style="border: 3px solid #E1E1E1;").text-center C
                td(style="border: 3px solid #E1E1E1;").text-center C
              tr
                td(style="border: 3px solid #E1E1E1;").text-center D
                td(style="border: 3px solid #E1E1E1;").text-center D
              tr
                td(style="border: 3px solid #E1E1E1;").text-center E
                td(style="border: 3px solid #E1E1E1;").text-center E
    
    p Existe un modelo de referencia adoptado por el SFC para que las entidades califiquen a sus clientes como incumplidos.
    p Estos deberán ser homologados de la siguiente manera:
    .BGIMG02.p-md-5.p-4(data-aos="fade-right")
      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img22.svg')
        .col-lg-6
          LineaTiempoD.color-primario
            .row.justify-content-center(numero="1" titulo="Categoría 'AA'")
              .col-lg-2.col-3
                img(src='@/assets/curso/tema4/img23.svg')
              .col
                p.mb-0 Los créditos calificados en esta categoría reflejan una estructuración y atención excelente. Los estados financieros de los deudores o los flujos de caja del proyecto, así como la demás información crediticia, indican una capacidad de pago óptima, en términos del monto y origen de los ingresos con que cuentan los deudores, para atender los pagos requeridos.
            .row.justify-content-center(numero="2" titulo="Categoría 'A'")
              .col-lg-2.col-3
                img.w-75(src='@/assets/curso/tema4/img24.svg')
              .col
                p.mb-0 Los créditos calificados en esta categoría reflejan una estructuración y atención apropiadas. Los estados financieros de los deudores o los flujos de caja del proyecto, así como la demás información crediticia, indican una capacidad de pago adecuada, en términos del monto y origen de los ingresos con que cuentan los deudores para atender los pagos requeridos.
            .row.justify-content-center(numero="3" titulo="Categoría 'BB'")
              .col-lg-2.col-3
                img(src='@/assets/curso/tema4/img25.svg')
              .col
                p.mb-0 Los créditos calificados en esta categoría, están atendidos y protegidos de forma aceptable, pero existen debilidades que potencialmente pueden afectar, transitoria o permanentemente, la capacidad de pago del deudor o los flujos de caja del proyecto, en forma tal que, de no ser corregidas oportunamente, llegarán a afectar el normal recaudo del crédito o contrato.
            .row.justify-content-center(numero="4" titulo="Categoría 'B'")
              .col-lg-2.col-3
                img.w-75(src='@/assets/curso/tema4/img26.svg')
              .col
                p.mb-0 Se califican en esta categoría, los créditos o contratos que presentan insuficiencias en la capacidad de pago del deudor o en los flujos de caja del proyecto, que comprometan el normal recaudo de la obligación en los términos convenidos.
            .row.justify-content-center(numero="5" titulo="Categoría 'CC'")
              .col-lg-2.col-3
                img(src='@/assets/curso/tema4/img27.svg')
              .col
                p.mb-0 Se califican en esta categoría los créditos o contratos que presentan graves insuficiencias en la capacidad de pago del deudor o en los flujos de caja del proyecto, que comprometan significativamente el recaudo de la obligación en los términos convenidos.
            .row.justify-content-center(numero="6" titulo="Categoría agrupada E")
              .col-lg-2.col-3
                img.w-75(src='@/assets/curso/tema4/img28.svg')
              .col
                p.mb-0 Aquellos clientes incumplidos cuya PDI asignada sea igual al cien por ciento (100 %).
            .row.justify-content-center(numero="7" titulo="Categoría agrupada D")
              .col-lg-2.col-3
                img.w-75(src='@/assets/curso/tema4/img29.svg')
              .col
                p.mb-0 Los demás clientes calificados como incumplidos.
      p Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
      
</template>

<script>
export default {
  name: 'Tema4',
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
