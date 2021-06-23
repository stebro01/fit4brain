<template>
  <q-page data-cy="page_index" class="flex flex-center" style="background-image: url('bg_index.jpg');">

    <div class="column" >
      <div class="col text-h1">
        Willkommen auf der offiziellen Fit 4 Brain Website
      </div>

      <div class="col text-h2">
        Hier können Sie <br>
        Ihren Interventionsplan im Auge behalten, 
        <br>erledigte Trainingseinheiten abhaken und 
        <br>bei Fragen Kontakt zu uns aufnehmen!
      </div>

      <div class="col">
        <q-btn flat class="bg-blue text-white" @click="$router.push({name:'overview'})">
          los gehts
          <q-icon class="q-ml-sm" name="play_circle_outline">

          </q-icon>
        </q-btn>
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
