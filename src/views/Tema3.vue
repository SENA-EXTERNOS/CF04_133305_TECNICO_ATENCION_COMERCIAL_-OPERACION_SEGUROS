<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cliente financiero
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2
        p El régimen de protección al consumidor financiero de la Ley 1328 de 2009, presenta las definiciones sobre cliente, usuario, cliente potencial y consumidor financiero, aportando sobre cada uno una singularidad que lo convierte en un actor dinámico y necesario para que los procesos administrativos y de ejecución, en este sector, sean posibles y armónicos.
        p.mb-0 A continuación, se presenta cada una de estas definiciones:
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")
    
    .BGM03.p-md-5.p-4.mb-4
      TabsA.color-primario.mb-5(data-aos="fade-right")
        .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Cliente")
          .col-lg-2.col-3
            img(src="@/assets/curso/tema3/img02.svg")
          .col
            p.mb-0 Es la persona natural o jurídica con quien las entidades vigiladas establecen relaciones de origen legal o contractual, para el suministro de productos o servicios, en desarrollo de su objeto social.
        .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Usuario")
          .col-lg-2.col-3
            img(src="@/assets/curso/tema3/img03.svg")
          .col
            p.mb-0 Es la persona natural o jurídica quien, sin ser cliente, utiliza los servicios de una entidad vigilada.
        .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Cliente potencial")
          .col-lg-2.col-3
            img(src="@/assets/curso/tema3/img04.svg")
          .col
            p.mb-0 Es la persona natural o jurídica que se encuentra en la fase previa de tratativas preliminares con la entidad vigilada, con respecto de los productos o servicios ofrecidos por esta.
        .row.justify-content-center.tarjeta.color-primario--borde.p-4(titulo="Consumidor financiero")
          .col-lg-2.col-3
            img(src="@/assets/curso/tema3/img05.svg")
          .col
            p.mb-0 Es todo cliente, usuario o cliente potencial de las entidades vigiladas.

      p Sin embargo, estas definiciones no son las únicas que se pueden encontrar, pues también se hallan otro tipo de definiciones de los clientes financieros, de acuerdo con circulares y otras leyes.
      p A continuación, se presentan diferentes definiciones de cliente financiero.

      .BGIMG03.p-4.mb-4(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              .h4 Circular Externa 7 de 1996
              p.mb-0 Se refiere a toda persona natural o jurídica con la cual la entidad establece y mantiene una relación contractual o legal, para el suministro de cualquier producto propio de su actividad.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img06.png")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              .h4 Circular Externa 29 de 2014
              p.mb-0 Se refiere a la persona natural o jurídica con quien las entidades vigiladas establecen relaciones de origen legal o contractual, para el suministro de productos o servicios, en desarrollo de su objeto social.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img07.png")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              .h4 Circular Externa 14 de 2015
              p.mb-0 Se refiere a toda persona natural o jurídica con la cual la entidad establece y mantiene una relación contractual o legal para el suministro de cualquier producto propio de su actividad.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img08.png")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              .h4 Circular 100-000005 de 2014 de la Superintendencia de Sociedades
              p.mb-0 Se refiere a personas naturales o jurídicas con las cuales la empresa tiene vínculos de negocios, contractuales o jurídicos de cualquier orden. Podemos encontrar a los accionistas, socios, empleados, clientes y proveedores de bienes y servicios.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img09.png")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              .h4 Ley 1480 de 2011
              p.mb-0 Se refiere a toda persona natural o jurídica que, como destinatario final, adquiera, disfrute o utilice un determinado producto, cualquiera que sea su naturaleza, para la satisfacción de una necesidad propia, privada, familiar o doméstica y empresarial, cuando no esté ligada intrínsecamente a su actividad económica.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img10.png")

      .h4 Tipos de clientes
      p La diversidad que existe para definir al cliente trae consigo, entonces, la diversificación del cliente mismo coexistiendo en un solo contexto encontrando así tipos de clientes según sus necesidades, interacciones o intenciones. 
      p A continuación, se presentan los diferentes tipos de clientes con sus características.

      .BGR05.py-5.px-4.mb-4(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img11.svg')
          .BGR06(x="5.5%" y="50%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 1
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Es claro en sus necesidades y gustos.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Es importante para él tener información concreta sobre lo que busca.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | En el momento de la compra, sus preguntas son directas y concisas.
          .BGR06(x="27%" y="67.5%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 2
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Mantiene una distancia con el vendedor poco amigable.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Al momento de elegir, invierte buena cantidad de tiempo para tomar una decisión.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Al momento de comprar ya ha buscado información previa sobre el producto o servicio.
          .BGR06(x="42.5%" y="41%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 3
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Muestra una actitud de duda e indecisión.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Demanda gran cantidad de información para la toma de decisiones.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Necesita mucho tiempo para decidirse.
          .BGR06(x="58%" y="67.5%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 4
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Para él es importante tener detalles del paso a paso de la compra.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Necesita espacio para expresar sus conocimientos sobre el producto y es conversador con la presentación y la cultura.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Cliente que exige mucho cuidado al momento de atender.
          .BGR06(x="73.3%" y="41%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 5
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Desvía la conversación con asuntos personales no relacionados con la venta.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Le gusta que lo escuchen, opinen y allá una línea de conversación así no esté relacionado el producto.
          .BGR06(x="94.5%" y="59%" numero="+")
            .BGR07.p-2
              .h2.text-center.mb-0 6
            .p-3
              .h5.mb-2 Características
              ul.lista-ul--color
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Busca información concreta y sencilla.
                li
                  <i class="fas fa-circle" style="color:#D1C4DA; font-size: x-small"></i>
                  | Por lo general tiene prisa.

      .h4 Productos financieros
      p Teniendo claridad sobre los tipos de clientes que se encuentran en el sistema financiero, se hace necesario que estos sean abastecidos de productos o servicios financieros para el desarrollo o crecimiento del objeto social de una empresa. Con base en esto, se define un #[b producto financiero] como el instrumento que una persona natural o jurídica puede adquirir con el objetivo de invertir, ahorrar o solicitar recursos monetarios. Dentro de los productos financieros se tienen:

    .BGIMG02.p-md-5.p-4
      .row.justify-content-center
        .col-lg-10
          PasosA.color-secundario.mb-5(tipo="n")
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Productos financieros de ahorro
                p.mb-0 Son productos que representan intereses de rendimientos atractivos para los consumidores. Se encuentran mayormente en las entidades bancarias y la actividad de estas cuentas se da en las cooperativas.
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img12.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img13.svg")
              .col(data-aos="fade-left")
                h4.text-start Cuentas de nómina
                p.text-start.mb-0 Son cuentas que usan los empleadores como medio de pago salarial a sus empleados; beneficios de comisiones y gastos operacionales por parte del banco, son dados a las empresas contratantes; el empleado o titular de la cuenta tiene la libertad de elegir a la entidad bancaria.
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Crédito bajo monto
                p.mb-0 Producto, crédito de consumo; se otorgan bajas sumas de dinero, dirigidas a suplir las necesidades de financiamiento de personas naturales; se pueden otorgar hasta 2 SMMLV (Salario Mínimo Mensual Legal Vigente) y el plazo de pago suele ser de máximo de 36 meses.
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img14.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img15.svg")
              .col(data-aos="fade-left")
                h4.text-start Tarjeta de crédito
                p.text-start.mb-0 Productos financieros de crédito más demandados en Colombia. Los altos montos que se otorgan, actualmente, mediante la tarjeta de crédito y los estudios de capacidad de endeudamiento, tanto del solicitante, como de las empresas y entidades financieras que ofrecen el crédito, podrían significar un alto riesgo.
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Crédito de libre inversión
                p.mb-0 También se conocen como productos de libre asignación y de consumo; se solicitan sin tener que rendir cuentas a la entidad financiera sobre el destino del monto solicitado; los montos solicitados van ligados a la capacidad de endeudamiento que demuestre el solicitante. Los plazos de pago los estipula cada entidad financiera, los cuales se fijan regularmente en cuotas mensuales de 2 a 5 años.
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img16.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img17.svg")
              .col(data-aos="fade-left")
                h4.text-start Crédito educativo
                p.text-start.mb-0 Financiamiento estudiantil, se exigen los comprobantes necesarios y algunas condiciones de consignación, para garantizar que el dinero se dirigirá a la entidad o institución educativa correspondiente.
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Crédito hipotecario
                p.mb-0 Crédito de vivienda, obligación financiera a largo plazo (entre 5 a más de 15 años).
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img18.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img19.svg")
              .col(data-aos="fade-left")
                h4.text-start Productos financieros de inversión
                p.text-start.mb-0 Grupos de inversión colectiva en los que participan muchas personas y empresas. Aunque con el dinero de toda una sociedad, gestiona las inversiones que se realizan y se reparten los beneficios.
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Bonos
                p.mb-0 Son títulos de deuda con las organizaciones públicas o privadas que consiguen financiación. Así que las personas que los compran recibirán un beneficio en dinero, al finalizar un periodo determinado.
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img20.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img21.svg")
              .col(data-aos="fade-left")
                h4.text-start Productos de inversión a tasa fija
                p.text-start.mb-0 Este producto tiene una rentabilidad fija y se puede invertir por tasa pública; negociación por deudas públicas que tiene el estado y generan rentabilidades que se representan en bono. Tasa privada, la sociedad emisora se compromete a retribuir a los tenedores de los valores, con un interés fijo y se representa en bonos.
            .row.justify-content-center.align-items-center
              .col(data-aos="fade-right")
                h4 Productos de inversión a tasa variable
                p.mb-0 En el momento de la adquisición, no se conoce su posible rendimiento futuro. Las acciones ordinarias de las compañías cotizadas en la bolsa de valores, son las más conocidas en el mercado.
              .col-lg-2.col-3(data-aos="fade-left")
                img(src="@/assets/curso/tema3/img22.svg")
            .row.justify-content-center.align-items-center
              .col-lg-2.col-3(data-aos="fade-right")
                img(src="@/assets/curso/tema3/img23.svg")
              .col(data-aos="fade-left")
                h4.text-start Fondos de inversión
                p.text-start.mb-0 Son un patrimonio formado por las aportaciones variables de inversionistas, denominados partícipes. Firmas especializadas en el manejo de la bolsa valores donde se hace la inversión, ya sea en acciones o en divisas.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
