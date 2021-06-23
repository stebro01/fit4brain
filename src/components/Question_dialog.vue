<template>
   <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="save" color="primary" text-color="white" />
          <span class="q-ml-sm">{{text}}</span>
        </q-card-section>

        <q-card-section>
          <q-input v-model="preset_label">Name</q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="TEXT.btn.back" color="primary" v-close-popup @click="chancel" />
          <q-btn flat :label="TEXT.btn.submit" color="primary" v-close-popup @click="store" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'QuestionDialog',
  props: ["show", "params", "text"],
  data() {
    return {
      TEXT: this.$store.state.TEXT,
      confirm: this.show,
      preset_label: "neues Preset"
    }
  },
  methods: {
      chancel() {
        this.$emit('emitClick', false)
      },
      store() {
         this.$emit('emitClick', true, this.preset_label)
      }
  },
}
</script>
