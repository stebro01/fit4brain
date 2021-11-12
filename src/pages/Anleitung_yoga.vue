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
           Um die Übungen beim Yoga korrekt auszuführen, achten Sie bitte genau auf die Anweisungen in der Audioanleitung. Am besten führen Sie die Übungen auf einer
           Sportmatte o.Ä. aus. Achten Sie auch stets darauf die Bewegungen bewusst und kontrolliert auszuführen. Sofern Sie weitere Fragen zur richtigen Ausführung haben, können Sie uns gerne unter simon.schrenk@med.uni-jena.de per Mail oder unter der
           03641/9396666 telefonisch kontaktieren. 
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
