<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.svg")
      .col-lg-9(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde podrá aprender sobre el sistema financiero colombiano el cual ha venido evolucionando desde un esquema más técnico y científico, hacia otro que se inclina a la multibanca. También, podrá conocer el rol que juegan el cliente y el consumidor financiero y la importancia de la adquisición de productos financieros que aportan al desarrollo y crecimiento de una empresa.
            br
            br
            |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
            br
            br
            |#[b ¡Muchos éxitos en este proceso de aprendizaje!]


    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
