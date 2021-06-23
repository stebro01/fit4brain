<template>
  <q-card class="q-ma-md my-storage-card" :class="{'bg-grey-4': checked}">
    <q-card-section class="q-pa-xs">
      <q-item dense>
        <q-item-section avatar>
          <q-checkbox v-model="checked" @input="changeSel($event, index)" :data-cy="'check_'+index"></q-checkbox>
        </q-item-section>
        <q-item-section overline class="tet-grey-y">
          {{item.nice_date }}

        </q-item-section>
      </q-item>
      <div class="float-right" style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px; margin-top:-2.8em">
        <q-badge v-if="item.exported" color="green" :data-cy="'exported_'+index">{{TEXT.storage.export_finished}}</q-badge>
        <q-badge v-else color="warning" size="xs">{{TEXT.storage.export_open}}</q-badge>
      </div>
    </q-card-section>

    <q-card-section class="q-pa-xs">
      <q-item>
        <q-item-section dense avatar>
          <q-item-label caption>
            quest
          </q-item-label>
          <q-item-label>
          {{item.value.quest.title}}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6">
            <span class="text-caption">PID: </span>{{item.value.PID}}
          </q-item-label>
          
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-separator />

    <q-card-actions align="around" class="q-pa-xs text-grey-9">
      <q-btn flat icon="delete" @click="remove(index)" :data-cy="'btn_remove_'+index">
        <q-tooltip>{{TEXT.btn.delete}}</q-tooltip>
      </q-btn>

      <q-btn flat icon="preview" @click="view_item(index)" :data-cy="'btn_preview_'+index">
        <q-tooltip>{{TEXT.btn.open}}</q-tooltip>
      </q-btn>
      <q-btn flat icon="file_download" @click="export_item(index)" :data-cy="'file_download_'+index">
        <q-tooltip>{{TEXT.btn.export}}</q-tooltip>
      </q-btn>
      <q-btn v-if="$store.getters.SETTINGS.use_notion" flat icon="cloud" @click="export_cloud(index)" :data-cy="'export_cloud_'+index" >
        <q-tooltip>{{TEXT.btn.export_cloud}}</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>


export default {
    props: ["index", "item", "selected"],
    name: 'StorageCard',
  data() {
    return {
        checked: false,
        TEXT: this.$store.getters.TEXT,
    }
  },
  watch: {
      selected(val) {
          if (val !== this.checked) this.checked = val
      }
  },

  methods: {
      changeSel(index) {
          this.$emit("change_selection", index)
      },
      export_cloud(index) {
          this.$emit("export_cloud", index)
      },
      export_item(index) {
          this.$emit("export_item", index)
      },
      remove(index) {
          this.$emit("remove", index)
      },
      view_item(index) {
          this.$emit("view_item", index)
      },

      
  },

}
</script>