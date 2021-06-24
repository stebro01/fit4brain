<template>
  <q-page data-cy="page_yoga_aerob">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Aerobes Training
          </q-card-section>
         
          <q-card-section>
           Beim aeroben Teil Ihres Trainings gibt es verschiedene Punkte, auf die Sie achten müssen:

            <ul>
              <li>Intensität: Je nach dem in welcher Woche des Trainings Sie sich befinden, wird sich auch die Intensität des Trainings verändern. Dabei können Sie die angegebene Intensität wie folgt überprüfen:</li>
              <li>Aufwärmen und Cool down: Es ist sehr wichtig, dass Sie nicht unaufgewärmt mit dem Sport beginnen! Dies kann zu … führen. Starten Sie deshalb jede Trainingseinheit mit….</li>
              <li>Trainieren Sie unbedingt nur in einem Bereich, in dem Sie sich auch wohlfühlen……</li>
            </ul>

          </q-card-section>
        </q-card>
    
     </div>


     <div class="col">
       <q-img src="anleitung_aerob_img.jpg" style="width: 500px">
       </q-img>
     </div>

     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitung_aerob',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
