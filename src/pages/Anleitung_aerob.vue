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
           Beim aeroben Teil des Programms gibt es verschiedene Punkte, auf die Sie achten müssen:

            <ul>
              <li>Intensität: Achten Sie darauf, welche Intensität die aktuelle Einheit in Ihrem Übungsplan hat (z.B. moderat, submaximal). Um die gewünschte Intensität zu erreichen gehen Sie wiefolgt vor: moderat: ..... submaximal: ...... </li>
              <li>Aufwärmen und Cooldown (Abwärmen): Es ist sehr wichtig, dass Sie nicht unaufgewärmt mit dem Sport beginnen! Dies kann zu … führen. Starten Sie deshalb jede Einheit mit.....</li>
              <li>Trainieren Sie unbedingt nur in einem Bereich, in dem Sie sich auch wohlfühlen. Natürlich dürfen die aeroben Einheiten auch anstrengend sein. Sollten Sie jedoch ... merken/sich fühlen, dann reduzieren Sie bitte die Intensität oder machen eine Pause. </li>
            </ul>

          </q-card-section>
        </q-card>
    
     </div>


     <div class="col">
       <q-img src="anleitung_aerob_img.jpg" style="width: 400px">
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
