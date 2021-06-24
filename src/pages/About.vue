<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_about.png" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section>
            Sollten Sie Fragen, Anmerkungen oder ein sonstiges Anliegen haben, nutzen Sie einfach unser Kontaktformular. Bitte achten Sie darauf Ihre eigene Email-Adresse anzugeben, damit wir Ihnen auf Ihre Anfrage antworten können. Vielen Dank!

          </q-card-section>
        </q-card>
    
     </div>

      <!-- KONTAKT -->
      <div class="col">
        <q-card class="float-right q-mt-xl" style="max-width:300px">
          <q-card-section class="text-h6">
            Kontakt
          </q-card-section>

          <q-card-section>
            <div>Universitätsklinikum Jena</div>
            <div>Hans-Berger-Klinik für Neurologie</div>
            <div>Am Klinikum 1, 07747 Jena</div>
            <div>Email: fit4brain@med.uni-jena.de</div>
            <div>Tel.: 03641/1234567</div>
          </q-card-section>

        </q-card>
      </div>


     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'About',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
