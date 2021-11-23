<template>
  <q-page data-cy="page_about">

    <BACKBUTTON  :gotostart="true" />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_instructions.jpg" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section class="text-h2">
            Anleitungen
          </q-card-section>
<br>
          <q-card-section>
            <b>1. Muskelentspannung (Progressive Muskelrelaxation)</b>
            <br><br>Hier finden Sie Anleitungen und Tipps zu den Muskelentspannungs-Einheiten. Denken Sie daran, dass die richtige Ausführung der Übungen sehr wichtig ist, damit diese auch Erfolge zeigen!
            </q-card-section>
        </q-card>
    
     </div>

     <div class="col">
       <q-img src="PMR_img.jpg" style="width: 400px">
       </q-img>
     </div>
     
    <div class="col-7">
      <q-card flat class="my-card">
       <q-card-section>
            Suchen Sie sich für die Muskelentspannungs-Einheit einen Ort, an dem Sie in Ruhe sitzen oder liegen können. Sie sollten je nach Einheit
            ca. 25-40 Minuten in dieser Position verbleiben können. Starten Sie die Einheit, indem Sie auf den Link in Ihrem Übungsplan klicken.
            Hier werden SIe durch die Entspannung geführt und es wird Ihnen erklärt, was Sie tun sollen. Sollten Sie dennoch Fragen haben,
            erreichen Sie uns unter dieser E-Mail: marco.herbsleb@uni-jena.de
            </q-card-section>
        </q-card>
     </div>

<br><br>

<div class="col-7">
      <q-card flat class="my-card">
       <q-card-section>
            <b>2. Podcasts</b>
            <br><br>Hören Sie am besten täglich ca. 15 Minuten (1 Kapitel) von einem der unten aufgeführten Podcasts. Dies können Sie 
            flexibel am Tag machen, wann es Ihnen gerade passt. Passen Sie gut auf und versuchen Sie keiner anderen Beschäftigung nachzugehen, 
            während Sie zuhören.
            </q-card-section>
        </q-card>
     </div>

<div class="col">
       <q-img src="podcast_img.jpg" style="width: 400px">
       </q-img>
     </div>


     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitungen_control',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
