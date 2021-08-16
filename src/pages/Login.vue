<template>
  <q-page data-cy="page_about">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Login
          </q-card-section>
          <q-card-section>
            <q-input v-model="passphrase" hint="Geben Sie Ihr Zugangspasswort ein" dense input-class="text-center" />
          </q-card-section>
          <q-card-section class="text-right">
             <q-btn @click="loginFunc" class="my-btn">
              LOGIN
            </q-btn>
          </q-card-section>
          <q-card-section v-if="code_false === true">
            <q-banner inline-actions class="text-white bg-red text-center"> Code nicht erkannt </q-banner> 
          </q-card-section>
        </q-card>
    
     </div>

     <!-- ENDE COLUMN -->
    </div>
    
  </q-page>
</template>

<script>


export default {
  name: 'Login',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT,
      passphrase: null,
      code_false: false,
      pw_verum: process.env.APP_PW_verum,
      pw_control: process.env.APP_PW_control,
    }
  },
  mounted() {
    if (this.$store.state.access_allowed === true) this.$router.push({name: "start"})
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  
  },
  methods: {
    loginFunc() {

      if (this.passphrase === this.pw_verum ) {
        this.$store.state.access_allowed = true;
        this.$store.state.access_group = 'verum';
        this.code_false = false
        if (this.$store.state.next_route === null) this.$router.push({name: "start"})
        else this.$router.push({name: this.$store.state.next_route.name})
        return
      }
      else if (this.passphrase === this.pw_control ) {
        this.$store.state.access_allowed = true;
        this.$store.state.access_group = 'control';
        this.code_false = false
        if (this.$store.state.next_route === null) this.$router.push({name: "start"})
        else this.$router.push({name: this.$store.state.next_route.name})
        return
      }


      // ERROR MESSAGE
      this.show_error()

    },
    async show_error() {
      this.code_false = true;
      const delay = millis => new Promise((resolve, reject) => {
        setTimeout(_ => resolve(), millis)
      });
      await delay(2000);
      this.code_false = false;
    }
  }

}
</script>
