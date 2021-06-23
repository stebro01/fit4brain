<template>

  <div :data-cy="'quest_'+QUEST.short_title">
  <q-card v-if="QUEST !== undefined" flat bordered class="my-card bg-grey-1">
    <!-- HEADING -->
    <q-card-section>
      <div class="row items-center no-wrap">

        <div class="col-auto" v-if="$store.getters.DEBUG_MODE || subject_pid==='DEMO'">
          <q-btn  color="grey-7" round flat icon="more_vert" data-cy="btn_options">
            <q-menu cover auto-close>
              <q-list>

                <q-item  class="my-btn text-center" data-cy="random_fill" clickable @click="randomFill()">
                  <q-item-section >random_fill</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <div class="col">
          <div class="text-h6" data-cy="quest_title"> {{ QUEST.title }} </div>
          <div class="text-subtitle2">{{ QUEST.description }}</div>
        </div>

      </div>
    </q-card-section>

    <!-- MANUAL -->
    <q-card-section v-html="QUEST.manual"></q-card-section>

    <!-- PID -->
    <q-card-section>
      <q-input data-cy="PID" filled v-model="subject_pid" :label="TEXT.quest.pid" :hint="TEXT.quest.pid_hint"
        :rules="[ val => val && val.length > 0 || TEXT.quest.pid_hint]" :disable="$route.params.pid !== undefined" />
    </q-card-section>

    <!-- ITEMS -->
    <q-card-section>

      <!-- QUEST ITEMS -->
      <q-list bordered separator data-cy="list_entries">

        <q-item v-for="(item, indQ) in QUEST.items" :key="item.label + indQ + key_suffix" data-cy="item_entry">
          <q-item-section>
            <!-- DESCRIPTION -->
            <q-item-label title><span v-html="item.label"/></q-item-label>
            <q-item-label v-if="item.caption !== null" caption><span v-html="item.caption"/></q-item-label>
            
<!-- ITEM -->
            <!-- RADIO OR CHECKBOX -->
            <q-item-label v-if="(item.type === 'radio') || (item.type === 'checkbox')">
              <RenderRadio :ITEM="item" @emitValue="item.value = $event" data-cy="text"/>
            </q-item-label>
            <!-- TEXT OR NUMBER -->
            <q-item-label v-else-if="(item.type === 'text') || (item.type === 'number') ">
              <RenderText :ITEM="item" @emitValue="item.value = $event" data-cy="text"/>
            </q-item-label>
            <!-- date -->
            <q-item-label v-else-if="(item.type === 'date' ||item.type === 'date_year')">
              <RenderDate :ITEM="item" @emitValue="item.value = $event" data-cy="slider"/>
            </q-item-label>
            <!-- time -->
            <q-item-label v-else-if="(item.type === 'time')">
              <RenderTime :ITEM="item" @emitValue="item.value = $event" data-cy="slider"/>
            </q-item-label>
            <!-- SLIDER -->
            <q-item-label v-else-if="(item.type === 'slider')">
              <RenderSlider :ITEM="item" @emitValue="item.value = $event" data-cy="slider"/>
            </q-item-label>

            <q-item-label v-else-if="(item.type === 'multiple_radio')">
              <RenderMultipleRadio :ITEM="item" :VALUE="QUEST.items[indQ].value" @emitValue="updateData('multiple_radio', indQ, $event)" data-cy="multiple_radio" />
            </q-item-label>
<!-- ENDE ITEM -->

            <!-- COMPLETE? -->
            <q-item-label v-if="submit_clicked && CHECK_FORM !== true && CHECK_FORM[indQ] === false" 
              class="text-red"
            >
              {{TEXT.quest.please_complete}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <!-- SEPERATOR -->
    <q-separator />
    <!-- FORM BUTTON -->
    <q-card-section class="">
      <div class="text-center q-pb-xl">
          <q-btn v-if="!saved" rounded :label="TEXT.btn.submit" type="submit" color="primary" @click="emitEvent()" data-cy="submitquest" class="my-btn" />
          <q-btn v-if="saved && this.$store.getters.QUESTMAN.presets.length > 0" rounded :label="TEXT.btn.proceed" type="submit" color="primary" @click="nextQuest()" data-cy="submitquest" class="my-btn" />
      </div>
    </q-card-section>

    <!-- CHECK ERROR -->
    <span v-if="submit_clicked && (CHECK_FORM !== true || CHECK_PID !== true)" data-cy="check_error_banner"></span>
    <!-- CHECK SUCCESS -->
    <span v-if="CHECK_PID && CHECK_FORM" data-cy="check_sucess"></span>
  </q-card>
  <div v-else class="q-ma-xl text-center">
    QUEST: undefined
  </div>


    <!-- BACKBUTTON -->
    <BACKBUTTON :ask="true" />
  </div>

  <!-- FORM ENDE -->

</template>


<script>
import RenderSlider from 'components/RenderQuest_slider.vue'
import RenderMultipleRadio from 'components/RenderQuest_multipleradio.vue'
import RenderDate from 'components/RenderQuest_date.vue'
import RenderTime from 'components/RenderQuest_time.vue'
import RenderText from 'components/RenderQuest_text.vue'
import RenderRadio from 'components/RenderQuest_radio.vue'
import BACKBUTTON from 'components/BackButton'

export default {
  name: 'RenerQuest',
  components: { RenderSlider, RenderMultipleRadio, RenderDate, RenderTime, RenderText, RenderRadio,BACKBUTTON },
  props: ["QUEST_LABEL", "saved", "PID"],

  data() {
    return {
      TEST: 0,
      TEXT: this.$store.state.TEXT,
        check_pid: false,
        check_form: undefined,
        submit_clicked: false,
      subject_pid: this.$route.params.pid || '',
      age: null,
      key_suffix: Date.now()
    }
  },
  watch: {
    // QUEST_LABEL(val) {
    //    this.$store.dispatch('setActiveQuest', val);
    // }
  },

  mounted() {
    console.log('QUEST mounted')
    if (this.QUEST_LABEL === undefined) return false
    this.$store.dispatch('setActiveQuest', this.$route.params.id);
    if (this.PID !== undefined) this.subject_pid = this.PID
  },

  computed: {
    QUEST() {
      return this.$store.getters.ACTIVE_QUEST
    },
    CHECK_PID() {
      return (this.subject_pid.length > 0)
    },
    CHECK_FORM() {
      return this.check_form
    }
  },
  methods: {
    updateData(action, index, value) {
      switch (action) {
        case 'multiple_radio':
          this.$set(this.QUEST.items[index], 'value', value)
          break
        default:
          console.log(`updateData: ${action} not found!`)
          return
      }
    },
    randomFill() {
      this.$store.state.QuestMan.random_fill()
      // refresh 
      this.subject_pid = this.subject_pid || Date.now().toString()
      this.key_suffix = this.subject_pid 
    },
    emitEvent() {
      // FIRST CHECK THE FORM
      this.submit_clicked = true;
      this.check_form = this.$store.getters.QUESTMAN.check_activeQuest();

      this.key_suffix = Date.now() //update the quest for
      var str = ''

      // console.log(this.$store.getters.QUESTMAN.summary)

      if (this.CHECK_PID === false) str += this.TEXT.quest.PID_missing;
      if (this.check_form !== true) str += this.TEXT.quest.check_failed;
      if (str.length > 0) {this.$q.notify({
          message: str,
          color: 'warning'
        })
        return false
      }

      this.$emit('emitForm', {
        "PID": this.subject_pid,
        "quest": this.$store.getters.QUESTMAN.summary
      })
    },
    emitBack() {
      this.$emit('emitBack')
    },
    nextQuest() {
      // this.$store.dispatch('loadNextQuest')
      this.$emit('emitNext')
      // this.$router.push('/quest/'+this.$store.getters.ACTIVE_QUEST_LABEL)
      // this.clearQuest();
    }

  }
}
</script>
