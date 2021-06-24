<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Logout
          </q-card-section>
          <q-card-section class="text-center">
            

            <q-btn @click="logoutFunc" class="my-btn">
              Abmelden
            </q-btn>

          </q-card-section>
        </q-card>
    
     </div>




     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Logout',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  
  },
  methods: {
    logoutFunc() {
      this.$store.state.access_allowed = false;
      this.$router.push({name: "start"})
    }
  }

}
</script>
