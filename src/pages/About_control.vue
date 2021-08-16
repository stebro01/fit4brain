<template>
  <q-page data-cy="page_about">

    <BACKBUTTON :gotostart="true" />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_about.jpg" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section>
           Auf dieser Seite finden Sie Antworten auf häufig gestellte Fragen. Sollten Sie eine Frage haben, die hier nicht aufgeführt ist, so können Sie und auch eine Mail an ________________ schicken und wir werden schnellstmöglich versuchen Ihre Frage zu klären! In dringenden Fällen können Sie uns auch anrufen (bei allgemeinen Fragen zur Studie: 03641 9396666; bei Fragen rund um die Übungseinheiten: 03641 945607).
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
