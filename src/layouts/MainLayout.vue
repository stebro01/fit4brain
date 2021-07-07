<template>
  <q-layout view="lHh Lpr lFf" >

    <!-- HEADER -->
    <q-header  class="bg-white text-primary " bordered >

      <!-- TOOLBAR -->
      <q-toolbar>
        
        <q-chip v-if="$store.state.access_allowed === true" class="bg-green-1" icon="check" label="angemeldet" clickable @click="$router.push({name:'Logout'})">
        </q-chip>

        <q-toolbar-title  class="text-center" @click="$router.push({name:'start'})" >
          <q-avatar>
              <q-icon  name="spa" />
          </q-avatar>
          {{ app_title }}
        </q-toolbar-title>

        <div  class="text-grey-6" @click="$router.push({name: 'Simon'}).catch(()=> {})"> {{ app_version }}</div>

      </q-toolbar>
    <!-- ENDE HEADER -->
    </q-header>

    <!-- FOOTER -->
    <q-footer bordered class="bg-white text-primary">

      <div class="row q-pa-md">
        <div class="col">
          <q-img src="logo_ukj.png" style="height:60px; max-width: 150px"/>
        </div>
        <div class="col gt-xs">
          <q-img src="logo_uni.png" style="height:60px; max-width: 180px"/>
        </div>
        <div class="col">
          <q-img src="logo_itn.png" style="height:60px; max-width: 200px"/>
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
