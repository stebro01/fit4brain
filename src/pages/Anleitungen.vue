<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    HIER WIRD ENTSCHIEDEN WO ES HINGEHT
    
    {{$store.state.access_group}}
      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitung',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  mounted(){
    if (this.$store.state.access_group === 'verum') this.$router.push({name: 'Anleitungen_verum'})
    else this.$router.push({name: 'Anleitungen_control'})
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
