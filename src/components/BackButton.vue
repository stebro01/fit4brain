<template>
    <div class="absolute-top-right q-mt-lg q-mr-lg">
            <q-btn  color="grey-7" round flat icon="more_vert" data-cy="btn_options">
            <q-menu cover auto-close>
              <q-list>
                <q-item  class="my-btn text-center" data-cy="back_root" clickable @click="quitForm">
                  <q-item-section >back</q-item-section>
                </q-item>

              </q-list>
            </q-menu>
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
      this.$router.push('/')
    }


  }
}
</script>
