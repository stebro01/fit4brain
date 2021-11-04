<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Yoga
          </q-card-section>
         
          <q-card-section>
           Um die Übungen beim Yoga korrekt auszuführen, sehen Sie sich bitte die hier aufgelisteten Videos zur richtigen Durchführung an. Am besten lassen Sie das Video auf Ihrem PC oder Fernseher abspielen und machen parallel mit. 
          </q-card-section>
        </q-card>
    
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
  name: 'Anleitung_yoga',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
