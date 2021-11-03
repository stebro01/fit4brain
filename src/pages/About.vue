<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    Bitte anmelden
      
  {{$store.state.access_group}}

  </q-page>
</template>

<script>


export default {
  name: 'About',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  mounted(){
    if (this.$store.state.access_allowed !== true) return this.$router.push({name: 'Login'})
    if (this.$store.state.access_group === 'verum') this.$router.push({name: 'about_verum'})
    else this.$router.push({name: 'about_control'})
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
