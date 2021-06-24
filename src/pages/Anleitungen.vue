<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_instructions.jpg" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section class="text-h2">
            Videos und Anleitungen
          </q-card-section>

          <q-card-section>
            Hier finden Sie Anleitungen und Tipps zu den einzelnen Übungen auf Ihrem Trainingsplan. Denken Sie daran, dass die richtige Ausführung der Übungen sehr wichtig ist, damit diese auch Erfolge zeigt!
            <br>Klicken Sie einfach auf eine der Schaltflächen, um nähere Informationen zu erhalten. Viel Spaß beim Training!
          </q-card-section>
        </q-card>
    
     </div>

     <div class="col">
       <div class="row q-pa-lg justify-around q-gutter-xl">
          <q-btn rounded class="col my-btn-large" @click="$router.push({name: 'Anleitung_Aerob'}).catch(()=>{})">Aerobes Training</q-btn>
          <q-btn rounded class="col my-btn-large" @click="$router.push({name: 'Anleitung_Yoga'}).catch(()=>{})">Yoga</q-btn>
          <q-btn rounded class="col my-btn-large" @click="$router.push({name: 'Anleitung_Jonglieren'}).catch(()=>{})">Jonglieren</q-btn>
       </div>
     </div>

     <div class="col">
       <q-img src="anleitungen_img.jpg" style="width: 500px">
       </q-img>
     </div>

     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitungen',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
