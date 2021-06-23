<template>
  <q-layout view="lHh Lpr lFf" >

    <!-- HEADER -->
    <q-header  class="bg-white text-primary " bordered >

      <!-- TOOLBAR -->
      <q-toolbar>
      

        <q-toolbar-title  class="text-center" @click="$router.push({name:'start'})" >
          <q-avatar>
              <q-icon  name="spa" />
          </q-avatar>
          {{ app_title }}
        </q-toolbar-title>

        <div  class="text-grey-6"> {{ app_version }}</div>

      </q-toolbar>
    <!-- ENDE HEADER -->
    </q-header>

    <!-- FOOTER -->
    <q-footer bordered class="bg-white text-primary">

      <div class="row q-my-md" style="max-height:100px">
        <div class="col">
          <q-img src="logo_ukj.png" style="height:100px; max-width: 300px"/>
        </div>
        <div class="col">
          <q-img src="logo_uni.png" style="height:100px; max-width: 300px"/>
        </div>
        <div class="col">
          <q-img src="logo_itn.png" style="height: 100px; width: 250px"/>
        </div>
      </div>
        
    </q-footer>

   
    <!-- CONTENT & ROUTER -->
    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  mounted() {
    this.$store.state.leftDrawerOpen = false
  },
  data() {
    return {
      app_title: process.env.APP_NAME,
      app_version: process.env.APP_VERSION
    }
  },
  computed: {
    
  }
}
</script>
