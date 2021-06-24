<template>
  <q-page data-cy="page_index">

    <div class="column items-center q-pa-xl" >
      
      <div class="col-3 gt-sm text-center" style="height: 300px; width: 100%">
        <q-img src="bg_index.jpg" style="max-width: 400px"></q-img>
      </div>

      <div class="col-1">
        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Willkommen auf der offiziellen Fit4Brain Website
          </q-card-section>
          <q-card-section>
            Hier finden Sie Ihren persönlichen Trainingsplan, Video- und Infomaterial zu den Übungen, sowie Informationen zu der Studie. Sollten Sie noch weitere Fragen haben erreichen Sie uns über die „Kontakt“-Schaltfläche unten auf der Seite.
Und jetzt viel Spaß beim fit werden! 
          </q-card-section>
        </q-card>
        
      </div>




      <div class="col-auto" style="width: 90vw">
        <div class="q-pa-md row justify-around q-gutter-xl ">

          <!-- TRAINPLAN -->
          <q-card class="my-card" flat  @click="$router.push({name: 'Trainingsplan'}).catch(() => {})">
            <q-img src="btn_train_plan.jpg" style="height:100%; width:100%">
            </q-img>
            
          </q-card>

          <!-- Instructions -->
          <q-card class="my-card" flat @click="$router.push({name: 'Anleitungen'}).catch(() => {})">
            <q-img src="btn_instructions.jpg" style="height:100%; width:100%">
            </q-img>
          </q-card>

          <!-- ABOUT -->
          <q-card class="my-card" flat @click="$router.push({name: 'about'}).catch(() => {})">
            <q-img src="btn_about.jpg" style="height:100%; width:100%">
            </q-img>
          </q-card>



        </div>
      </div>





  </div>


      
  </q-page>
</template>

<script>


export default {
  name: 'Index',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  computed: {
   
  },

}
</script>
