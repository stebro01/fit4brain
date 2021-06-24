<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_instructions.png" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section>
            Anleitungen ...

          </q-card-section>
        </q-card>
    
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
