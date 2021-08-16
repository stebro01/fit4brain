<template>
    <div class="absolute-top-right q-mt-sm q-mr-sm z-top">
            <q-btn  color="grey-7"  flat icon="close" data-cy="btn_options" @click="quitForm">
          </q-btn>
        </div>
</template>


<script>

export default {
  name: 'BACKBUTTON',
  props: ["ask", "gotostart"],

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

      if (this.gotostart === true) this.$router.push({name: 'start'})
      else this.$router.go(-1)
    }


  }
}
</script>
