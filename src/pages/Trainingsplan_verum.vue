<template>
  <q-page data-cy="page_about">

    <BACKBUTTON  :gotostart="true" />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_train_plan.jpg" style="height:100%; width:100%" />
            
          </q-card-section>
          <q-card-section class="text-h2">
            Mein Übungsplan
          </q-card-section>

          <q-card-section>
            Hier sehen Sie, welche Übungseinheiten heute bei Ihnen anstehen. Falls Sie nähere Informationen oder Erkärungen zu den einzelnen Einheiten benötigen, klicken Sie "Anleitungen" auf der Startseite. Dort finden Sie genaue Erklärungen zur richtigen Ausführung sowie Tipps zu den einzelnen Einheiten.
          </q-card-section>
        </q-card>
    
     </div>


     <div class="col">
       <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="primary"
          :max="8"
          :max-pages="8"
          boundary-numbers
        />
      </div>
       <TRAININGS_TABLE_1 v-if="current === 1" />
       <TRAININGS_TABLE_2 v-else-if="current === 2"/>
       <TRAININGS_TABLE_3 v-else-if="current === 3"/>
       <TRAININGS_TABLE_4 v-else-if="current === 4"/>
       <TRAININGS_TABLE_5 v-else-if="current === 5"/>
       <TRAININGS_TABLE_6 v-else-if="current === 6"/>
       <TRAININGS_TABLE_7 v-else-if="current === 7"/>
       <TRAININGS_TABLE_8 v-else-if="current === 8"/>
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
      TEXT: this.$store.state.TEXT,
      current: 1
    }
  },
  
  mounted() {
    if (this.$store.state.access_group !== 'verum') this.$router.push({name: 'start'})
  },
  
  components: {
    BACKBUTTON: () => import('src/components/BackButton'),
    TRAININGS_TABLE_1: () => import('src/components/Trainingsplan_verum_table_1.vue'),
    TRAININGS_TABLE_2: () => import('src/components/Trainingsplan_verum_table_2.vue'),
    TRAININGS_TABLE_3: () => import('src/components/Trainingsplan_verum_table_3.vue'),
    TRAININGS_TABLE_4: () => import('src/components/Trainingsplan_verum_table_4.vue'),
    TRAININGS_TABLE_5: () => import('src/components/Trainingsplan_verum_table_5.vue'),
    TRAININGS_TABLE_6: () => import('src/components/Trainingsplan_verum_table_6.vue'),
    TRAININGS_TABLE_7: () => import('src/components/Trainingsplan_verum_table_7.vue'),
    TRAININGS_TABLE_8: () => import('src/components/Trainingsplan_verum_table_8.vue')
  }

}
</script>
