<template>
    <div class="absolute-top-right q-mt-lg q-mr-lg z-top">
            <q-btn  color="grey-7"  label="zurück" flat icon="close" data-cy="btn_options" @click="quitForm">
            
          </q-btn>
        </div>
</template>


<script>

export default {
  name: 'BACKBUTTON',
  props: ["ask"],

  data() {
    return {
      TEXT: this.$store.state.TEXT,
    }
  },

  methods: {
  
    quitForm() {
      if (this.ask === true) {
        var answer = window.confirm("Wirklich abbrechen?");
        if (!answer) return
      }

      this.$store.state.PROTECTED_MODE = false;
      this.$router.go(-1)
    }


  }
}
</script>
