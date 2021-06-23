<template>
  <q-page data-cy="page_index" class="flex flex-center">

    <div class="column" >
      <div class="col text-h1">
        Übersicht
      </div>

      <div class="col" style="width: 90vw">
        <div class="q-pa-md row justify-around q-gutter-md ">

          <!-- TRAINPLAN -->
          <q-card class="my-card" flat style="width:250px">
            <q-img src="btn_train_plan.png" style="height:100%; width:100%">
              <!-- <div class="absolute-bottom text-subtitle2 text-center">
                Trainingsplan
              </div> -->
            </q-img>
          </q-card>

          <!-- Instructions -->
          <q-card class="my-card" flat>
            <q-img src="btn_instructions.png" style="height:100%; width:100%">
            </q-img>
          </q-card>

          <!-- ABOUT -->
          <q-card class="my-card" flat>
            <q-img src="btn_about.png" style="height:100%; width:100%">
            </q-img>
          </q-card>

          <!-- FAQ -->
          <q-card class="my-card" flat>
            <q-img src="btn_faq.png" style="height:100%; width:100%">
            </q-img>
          </q-card>


        </div>
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

  </div>


      
  </q-page>
</template>

<script>


export default {
  name: 'Overview',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  computed: {
   
  },

}
</script>
