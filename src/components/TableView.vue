<template>
 <q-dialog v-model="state">
   <q-card style="width: 700px; max-width: 80vw;">
     <q-card-section>
       <q-item>
         <q-item-section class="text-h6">
           {{QUEST.value.PID}}
         </q-item-section>
         <q-item-section side top>
           {{QUEST.nice_date}}
         </q-item-section>
       </q-item>
     </q-card-section>

    <q-card-section>
         <q-table
            :title="QUEST.value.quest.label"
            :data="dataTable"
            :columns="columnsTable"
            row-key="name"
            dark
            color="amber"
        />
     </q-card-section>

    <!-- EVLUATION BANNER -->
     <q-card-section v-if="EVALUATION !== undefined">
        <q-banner class="bg-primary text-white">
          Bewertung: {{EVALUATION}}
        </q-banner>
     </q-card-section>

    <!-- CLOSE BUTTON -->
    <q-card-actions align="right" class="bg-white text-teal">
       <q-btn flat label="OK" v-close-popup />
     </q-card-actions>

   </q-card>
 </q-dialog>

</template>

<script>

export default {
    props: ["QUEST", "medium"],
    data() {
    return {
      state: this.medium,
      results: null
    }
  },
  watch: {
    MED(val) {
      this.state = val
    },
    state(val) {
      if (val === false) this.$emit('closeClick')
    }
  },
  methods: {
    
  },
  computed: {
    EVALUATION() {
      if (this.QUEST.value.quest.results === undefined) return undefined
      if (this.QUEST.value.quest.results.length < 1) return undefined
      const evaluation = []
      this.QUEST.value.quest.results.forEach(res => {
        if (res.evaluation !== undefined) evaluation.push(res.evaluation)
      })
      if (evaluation.length === 0) return undefined
      return evaluation
    },
      MED() {
          return this.medium
      },
      dataTable() {
        
          const data = []
          let el = {
              name: this.QUEST.value.PID
          }
          
          if (this.QUEST.value.quest.results.length > 0) this.QUEST.value.quest.results.forEach(item => {    
              el[item.label] = item.value              
          })
          this.QUEST.value.quest.items.forEach(item => {    
            if (Array.isArray(item.value)) {
              const tmp = []
              item.value.forEach(v => tmp.push(v.value))
              el[item.label] = JSON.stringify(tmp)    
            }
            else el[item.label] = item.value              
          })
          
          data.push(el)

          return data

      },
      columnsTable() {
          const columns = []
          let el = {
              name: 'descr',
              label: 'PID',
              field: row => row.name
          }
          columns.push(el)
          // results
          if (this.QUEST.value.quest.results.length > 0) this.QUEST.value.quest.results.forEach(item => {
              let el = {
                  name: item.label,
                  label: item.label,
                  field: item.label
              }
              columns.push(el)
          })
          // ITEMS
          this.QUEST.value.quest.items.forEach(item => {
              let el = {
                  name: item.label,
                  label: item.label,
                  field: item.label
              }
              columns.push(el)
          })

          return columns
      }
  }
}
</script>

<style>

</style>