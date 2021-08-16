<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_train_plan.jpg" style="height:100%; width:100%" />
            
          </q-card-section>
          <q-card-section class="text-h2">
            Mein Übungsplan (VERUM)
          </q-card-section>

          <q-card-section>
            Hier sehen Sie, welche Übungseinheiten heute bei Ihnen anstehen. Falls Sie nähere Informationen oder Erkärungen zu den einzelnen Einheiten benötigen, klicken Sie "Anleitungen und Videos" auf der Startseite. Dort finden Sie genaue Erklärungen zur richtigen Ausführung sowie Tipps zu den einzelnen Einheiten.  
            <br>Haben Sie alle Übungen an einem Tag erledigt können Sie im untersten Feld des Plans ein Häkchen setzen!
          </q-card-section>
        </q-card>
    
     </div>


     <div class="col">
       <q-img src="trainplan_screenshot.png" style="width: 500px"></q-img>
     </div>

     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Trainingsplan_verum',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  mounted() {
    if (this.$store.state.access_group !== 'verum') this.$router.push({name: 'start'})
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
