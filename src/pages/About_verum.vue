<template>
  <q-page data-cy="page_about">

    <BACKBUTTON  :gotostart="true" />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            <q-img src="btn_about.jpg" style="height:100%; width:100%" />
          </q-card-section>
          <q-card-section>
           Auf dieser Seite finden Sie Antworten auf häufig gestellte Fragen. Sollten Sie eine Frage haben, die hier nicht aufgeführt ist, so können Sie und auch eine Mail an ________________ schicken und wir werden schnellstmöglich versuchen Ihre Frage zu klären! In dringenden Fällen können Sie uns auch anrufen (bei allgemeinen Fragen zur Studie: 03641 9396666; bei Fragen rund um die Übungseinheiten: 03641 945607).
          </q-card-section>
        </q-card>
    
     </div>

<div class="column items-center q-pa-xl" >
      
      <div class="col-3 gt-sm text-center" style="height: 300px; width: 100%">
        <q-img src="bg_index.jpg" style="max-width: 400px"></q-img>
      </div>

<div class="col-1">
        <q-card flat class="my-card">
          <q-card-section class="text-h1 text-teal">
            FAQ - Häufig gestellte Fragen
          </q-card-section>        
        </q-card>
        
      </div>

<div class="q-pa-md" style="max-width: 450px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Ich verstehe nicht, wie genau man eine Übung ausführen soll. An wen kann ich mich wenden?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Am besten sehen Sie erstmal unter dem Reiter "Anleitungen und Videos" nach. Falls Sie die gesuchte Übung nicht finden oder immer
            noch Probleme mit der Ausführung haben, schreiben Sie uns einfach eine Mail an: fit4brain@med.uni-jena.de. 
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

<q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Gibt es für die aeroben Trainingseinheiten vorgeschriebene Übungen?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Nein. Sie können sich für ein aerobes Training Ihrer Wahl entscheiden. Wichtig ist, dass Sie bei dem gewählten Training
            die Belastungsintensität erreichen, die vorgegeben ist. Beispiele für aerobes Training sind zum Beispiel
            Fahrradfahren, schnelles Gehen, oder Joggen. 
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Muss ich die Fitness-Uhr immer tragen - auch in der Nacht?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Sie sollten die Fitness-Uhr so viel wie möglich tragen. Zum Duschen oder anderen kurzen Tätigkeiten, 
            bei denen die Uhr stören könnte, können Sie die Uhr auch abnehmen. Ebenso müssen Sie die Uhr beim Schlafen
            nicht tragen. Sobald Sie sich in irgendeiner Weise sportlich betätigen sollten Sie die
            Uhr aber unbedingt am Handgelenk tragen! 
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Ich fühle mich heute nicht so fit, aber in meinem Trainingsplan steht eine Einheit
        aerobes Training. Was kann ich jetzt tun?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Sollten Sie aus körperlichen oder zeitlichen Gründen eine Trainingseinheit einmal nicht wahrnehmen können, ist das kein großes Problem. 
            Sie können diese Einheit einfach verschieben. Dabei müssen Sie allerdings auf folgendes achten: Die Trainingseinheit sollte nicht
            am direkt folgenden oder vorangehenden Tag zu einer anderen aeroben Einheit stattfinden. Falls Ihre üblichen Trainingstage Montag, Mittwoch und Freitag sind und Sie Ihr Trainig von Mittwoch auf Donnerstag verschieben, 
            so müssen Sie auch Ihr Training am Freitag um einen Tag verschieben. Falls Sie aus irgendeinem Grund mehrere aufeinanderfolgende Trainingseinheiten nicht
            wahrnehmen können, so geben Sie uns bitte per Mail oder telefonisch Bescheid, damit wir eine geeignete Lösung finden.
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Ich möchte nicht mehr mit dem Training weitermachen. Was soll ich jetzt tun?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
        
      >
        <q-card>
          <q-card-section>
            Natürlich finden wir es sehr schade, wenn jemand das Training nicht
            mehr fortsetzen möchte. Aber natürlich können Sie jederzeit ohne Angabe von Gründen mit dem Training aufhören.
            Dabei ist es jedoch sehr wichtig, dass Sie uns darüber informieren, dass 
            Sie das Training beenden möchten! Hierzu können Sie uns entweder eine Mail
            an fit4brain@med.uni-jena.de schicken oder telefonisch unter der 03641/123456
            Bescheid geben. 
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
     

</div>

      <!-- KONTAKT -->
      <div class="col">
        <q-card class="float-right q-mt-xl" style="max-width:300px">
          <q-card-section class="text-h6">
            Kontakt
          </q-card-section>

          <q-card-section>
            <div>Universitätsklinikum Jena</div>
            <div>Hans-Berger-Klinik für Neurologie</div>
            <div>Am Klinikum 1, 07747 Jena</div>
            <div>Email: fit4brain@med.uni-jena.de</div>
            <div>Tel.: 03641/1234567</div>
          </q-card-section>

        </q-card>
      </div>


     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'About',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
