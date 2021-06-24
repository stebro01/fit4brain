<template>
  <q-page data-cy="page_Jonglieren">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Jonglieren
          </q-card-section>
         
          <q-card-section>
           Sehen Sie sich die hier aufgeführten Videos genau an, damit Sie die richtige Ausführung übernehmen…
          </q-card-section>
        </q-card>
    
     </div>

     <div class="col q-pa-lg">
       <div class="column q-gutter-lg">
         <q-btn  rounded class="col" type="a" href="https://www.youtube.com/watch?v=fNqNCK4Xuew" target="_blank">
              Jonglieren mit einem Ball
          </q-btn>

          <q-btn  rounded class="col" type="a" href="https://www.youtube.com/watch?v=47vAbtRfpMo" target="_blank">
              Jonglieren mit zwei Bällen
          </q-btn>

          <q-btn  rounded class="col" type="a" href="https://www.youtube.com/watch?v=4b4gMBp_5GI" target="_blank">
              Jonglieren mit drei Bällen
          </q-btn>
       </div>
     </div>


     <div class="col">
       <q-img src="anleitung_jonglieren.jpg" style="width: 500px">
       </q-img>
     </div>

     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitung_Jonglieren',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
