<template>
  <q-page data-cy="page_about">

    <BACKBUTTON  :gotostart="true" />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <div class="col-3 gt-sm text-center" style="height: 300px; width: 100%">
        <q-img src="bg_index.jpg" style="max-width: 400px"></q-img>
      </div>

      <q-card>
          <q-card-section class="text-h2">
            Informationen zur Fit4Brain-Studie
          </q-card-section>
<br>
          <q-card-section>
            <b>Inhalt und Ablauf der Studie</b>
            <br><br>Unsere Frage: Hat körperliche Aktivität oder Entspannung einen Einfluss auf das gesunde kognitive ALtern und die Darm-Hirn-Achse?
            <br> - Dafür durchlaufen ProbandInnen ein 8-wöchige Intervention mit Fokus Entspannung oder Aktivität, das von zuhause aus durchgeführt wird
            <br> - Vor und nach der Intervention gibt es drei Untersuchungstermine in Jena (Kognitive Tests, Gehirnbildgebung mit MRT, Fitnessuntersuchung)
            <br> - Ebenso wird auch das Darm-Mikrobiom untersucht, dafür müssen Sie lediglich eine Stuhlprobe abgeben
            </q-card-section>

          <q-card-section>
            <b>Einschlusskriterien</b>
            <br><br> - 60-75 Jahre alt
            <br> - Vollständig gegen SARS-CoV-2 geimpft
            <br> - Kein Herzinfarkt in der Vorgeschichte, kein Herzschrittmacher
            <br> - Keine neurologischen / psychiatrischen Vorerkrankungen
            <br> - Im Besitz eines Smartphones
            <br> - Bei chronischen Krankheiten / Medikationen vorherige Abklärung mit Studienleitung
            </q-card-section>

          <q-card-section>
            <b>Was habe ich von einer Teilnahme?</b>
            <br><br> - Umfangreiches Screening körperlicher und geistiger Funktionen
            <br> - Teilnahme an einem Programm, welches das gesunde Altern fördern soll
            <br> - <b> Sie erhalten eine hochwertige Pulsuhr, die Sie bei vollständigem Abschluss der Studie behalten dürfen </b>
            </q-card-section>

          <q-card-section>
            <b>Sie haben Interesse?</b>
            <br><br> - Rufen Sie uns an: 03641/9396666
            <br> - Schreiben Sie uns eine Mail: simon.schrenk@med.uni-jena.de
            <br><br> Wir beantworten Ihnen gerne unverbindlich alle Fragen zur Studie und würden uns über Ihre Kontaktaufnahme sehr freuen!
          </q-card-section>

        </q-card>


        <div class="text-center q-pa-xl">
          <q-img src="~assets/qr_info.png" width="400px" />
        </div>
    
     </div>
   

     <!-- ENDE COLUMN -->
    </div>

      
  </q-page>
</template>

<script>


export default {
  name: 'Anleitungen_control',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
