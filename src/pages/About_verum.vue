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
           Auf dieser Seite finden Sie Antworten auf häufig gestellte Fragen. Sollten Sie eine Frage haben, die hier nicht aufgeführt ist, so können Sie und auch eine Mail an simon.schrenk@med.uni-jena.de schicken und wir werden schnellstmöglich versuchen Ihre Frage zu klären! In dringenden Fällen können Sie uns auch anrufen (bei allgemeinen Fragen zur Studie: 03641/9396666; bei Fragen rund um die Übungseinheiten: 03641/945607).
          </q-card-section>
        </q-card>
    
     </div>

<div class="column items-center q-pa-xl" >
      

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
            noch Probleme mit der Ausführung haben, schreiben Sie uns einfach eine Mail an: simon.schrenk@med.uni-jena.de. 
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

<q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Gibt es für die aeroben Übungseinheiten vorgeschriebene Übungen?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Sie sollten "Walken", d.h. zügig gehen. Je nach dem in welcher Intensitätszone das Walken vorgeschrieben ist, sollten Sie sich schneller oder langsamer fortbewegen. Eine ausführliche Erklärung, wie Sie in den richtigen Intensitätszonen bleiben, finden Sie unter "Anleitungen" auf der Startseite.
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
            nicht tragen (dann werden allerdings keine Schlafdaten von Ihnen aufgenommen und diese können nicht im Nachhinein analysiert werden). Sobald Sie sich in irgendeiner Weise sportlich betätigen sollten Sie die
            Uhr aber unbedingt am Handgelenk tragen und aktivieren! 
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Ich fühle mich heute nicht so fit, aber in meinem Übungsplan steht eine aerobe (Ausdauer-)Einheit. Was kann ich jetzt tun?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Sollten Sie aus körperlichen oder zeitlichen Gründen eine Übungseinheit einmal nicht wahrnehmen können, ist das kein großes Problem. 
            Sie können diese Einheit einfach verschieben. Dabei müssen Sie allerdings auf Folgendes achten: Die Übungseinheit sollte nicht
            am direkt folgenden oder vorangehenden Tag zu einer anderen aeroben Einheit stattfinden. Falls Ihre üblichen Ausdauereinheits-Tage Montag, Mittwoch und Freitag sind und Sie Ihr Trainig von Mittwoch auf Donnerstag verschieben, 
            so sollten Sie auch Ihre Ausdauereinheit in dieser Woche am Freitag um einen Tag verschieben. Falls Sie aus irgendeinem Grund mehrere aufeinanderfolgende Übungseinheiten nicht
            wahrnehmen können, so geben Sie uns bitte per Mail oder telefonisch Bescheid, damit wir eine geeignete Lösung finden.
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Ich möchte nicht mehr mit der Intervention weitermachen. Was soll ich jetzt tun?"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
        
      >
        <q-card>
          <q-card-section>
            Natürlich finden wir es sehr schade, wenn jemand die 8-wöchige Intervention nicht
            mehr fortsetzen möchte. Aber natürlich können Sie jederzeit ohne Angabe von Gründen mit der Intervention aufhören.
            Dabei ist es jedoch sehr wichtig, dass Sie uns darüber informieren, dass 
            Sie diese beenden möchten! Hierzu können Sie uns entweder eine Mail
            an simon.schrenk@med.uni-jena.de schicken oder telefonisch unter der 03641/9396666
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
              <q-img src="ukj_img.jpg" style="height:100%; width:100%" />
                      Kontakt
          </q-card-section>

          <q-card-section>
            <div>Universitätsklinikum Jena</div>
            <div>Hans-Berger-Klinik für Neurologie</div>
            <div>Am Klinikum 1, 07747 Jena</div>
            <div>Email: simon.schrenk@med.uni-jena.de</div>
            <div>Tel.: 03641/9396666</div>
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
