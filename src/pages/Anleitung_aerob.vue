<template>
  <q-page data-cy="page_yoga_aerob">

    <BACKBUTTON />

    <div class="column items-center q-px-xl">
      <div class="col-7">

        <q-card flat class="my-card">
          <q-card-section class="text-h1">
            Aerobes Training
          </q-card-section>
         
          <q-card-section>
           Beim aeroben Teil des Programms gibt es verschiedene Punkte, auf die Sie achten müssen:

            <ul>
              <li>Intensität: Achten Sie darauf, welche Intensität die aktuelle Einheit in Ihrem Übungsplan hat (die Intensitätszonen sind als 
                I1/I2/etc. in Ihrem Übungsplan eingetragen). Wie Sie sich in einer bestimmten Intensitätzone bewegen, können Sie genauer unten in der Aufklappliste unter
                "Intensitätszonen" nachlesen.</li><br>
              <li>Aufwärmen und Cooldown (Abwärmen): Es ist sehr wichtig, dass Sie nicht unaufgewärmt mit dem Sport beginnen! Daher startet jede Einheit mit einer 5-minütigen 
                Phase, in der Sie in Intensitätszone 1 gehen (Aufwärmphase) und endet mit 3 Minuten ebenfalls in Intensitätszone 1 (Cooldown-Phase).</li> <br>
              <li>Trainieren Sie unbedingt nur in einem Bereich, in dem Sie sich auch wohlfühlen. Natürlich dürfen die aeroben Einheiten auch 
                anstrengend sein. Sollten Sie jedoch merken, dass es Ihnen nicht mehr gut geht, dann reduzieren Sie bitte die Intensität oder machen eine Pause. </li>
            </ul>

          </q-card-section>
        </q-card>

     </div>

  <div class="column items-center q-pa-xl" >
      
<div class="q-pa-md" style="max-width: 450px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Walken - Allgemeine Hinweise"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
             1. Walken Sie auf einer für Sie bekannte Strecke ohne Verkehr mit möglichst wenig Hindernissen und bestenfalls 
             auf gutem Untergrund (hierfür besonders geeignet sind häufig benutzte Park-, Wald-, Feld-, und Wiesenwege aber 
             auch Gehwege in verkehrsberuhigten Bereichen sind eine Alternative).
             <br>2. Ihr Trainingsplan ist so ausgerichtet, dass Sie zunächst langsam beginnen und dann Umfang und Intensität 
             allmählich gesteigert werden.
             <br>3. Sie sollten nicht vollkommen erschöpft nach der Einheit sein, anstrengend und ermüdend dürfen die Übungseinheiten 
             hingegen sein.

          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

<q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Walken - kontinuierlich"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Kennzeichnend für diese Trainingsform ist eine kontinuierliche und gleichmäßige Belastung ohne Unterbrechung über einen längeren Zeitraum.
            <br><br>Beginnen Sie die Einheit, indem Sie 5 Minuten lang mit geringer Intensität gehen (in der Intensitätszone 1; 7-10 auf der BORG-Skala)
            und damit Ihrem Körper Zeit geben, sich an die körperliche Belastung anzupassen. Danach erhöhen Sie allmählich die Intensität bis die 
            wahrgenommene Anstrengung der Trainingszone 2 entspricht. 
            <br><br>Passen Sie Ihre Gehgeschwindigkeit so an das Gelände (z. B. Steigungen) an, dass 
            Ihr wahrgenommener Anstrengungsgrad in der vorgegebenen Intensitätszone bleibt. Das kontinuierliche Training sollte als noch recht leicht bis 
            es etwas anstrengend empfunden werden und Reden noch gut möglich sein. Am Ende des Trainings gehen Sie noch einmal für ca. 3 Minuten in der Intensitätszone 1.

          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Walken - Intervall"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Kennzeichnend für diese Trainingsform sind abwechselnde Abschnitte von Belastungsphasen von 2-4 min Dauer mit hoher Intensität (Trainingszonen 3 und 4) 
            und Erholungsphasen (Dauer 2-3 min) mit sehr leichter und leichter körperlicher Aktivität (Trainingszone 1). Die Belastungsphasen sollten subjektiv als 
            anstrengend bis sehr anstrengend wahrgenommen werden, die Erholungsphasen als nicht anstrengend (auch wenn Herzfrequenz und Atmung noch erhöht sind). 
            Der Wechsel von Belastungs- und Erholungsphase wird mehrfach wiederholt. <br>Das Training beginnt mit einer Erwärmungsphase von 5 Minuten in der Intensitätszone 1-2
            (recht leicht bis es etwas anstrengend). Danach wird eine vorgegebene Anzahl von Belastungs- und Erholungsphasen durchgeführt, bis eine vorgegebene Zeit 
            erreicht ist. Sehen Sie sich die Anzahl der Phasen noch einmal in Ihrem Übungsplan an, bevor Sie mit der Einheit beginnen.
          </q-card-section>
        </q-card>
      </q-expansion-item>

<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Walken - Intervall (Beispiel)"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            Beispiel aus der 2. Trainingswoche: Wärmen Sie sich auf, indem Sie 5 Minuten lang in der Intensitätszone 1 bis 2 (10-12 auf der BORG-Skala) gehen. 
            Erhöhen Sie die Anstrengung auf eine Intensität von 14 bis 15 auf der BORG-Skala (Intensitätszone 3, anstrengend). Bleiben Sie bei dieser Intensität 
            für drei Minuten. Verringern Sie nun Ihre Intensität auf die Intensitätszone 1 (7-10) ebenfalls für drei Minuten. Wiederholen Sie den Zyklus von Belastungs- 
            und Erholungsphase noch weitere viermal, bis Sie insgesamt eine Gesamttrainingszeit von 35 Minuten erreicht haben (5 min Erwärmung + 5 x 3min 
            Belastungsphase + 5 x 3min Erholungsphase). Beenden Sie das Training immer mit der Erholungsphase.
 
          </q-card-section>
        </q-card>
      </q-expansion-item>




<q-separator />

      <q-expansion-item
        group="somegroup"
        icon="help_outline"
        label="Intensitätszonen"
        header-class="bg-teal text-white shadow-24"
        expand-icon-class="text-white"
      >
        <q-card>
          <q-card-section>
            <b>Intensitätszone 1 (sehr sehr leicht bis leicht)</b>
            <br>- auf der BORG-Skala sollte die Anstrengung der Aktivität subjektiv mit etwa 7 bis 10 (sehr sehr leicht bis leicht) bewertet werden
            <br>- Ihre Herzfrequenz wird sich etwas erhöhen und Ihre Atmung wird sich (kaum wahrnehmbar) etwas steigern
            <br>- Sie sind in der Lage während des Gehens ununterbrochen zu sprechen oder eine Strophe zu singen

            <br><br><b>Intensitätszone 2 (recht leicht bis es etwas anstrengend)</b>
            <br>- auf der BORG-Skala sollte die Anstrengung der Aktivität subjektiv mit etwa 11 bis 13 (zwischen recht leicht und etwas anstrengender) bewertet werden
            <br>- Ihre Herzfrequenz sollte sich etwas erhöhen und auch Ihre Atmung etwas zunehmen
            <br>- Sie sollten aber dennoch in der Lage sein länger am Stück während des schnellen Gehens sprechen zu können
            
            <br><br><b>Intensitätszone 3 (anstrengend)</b>	
            <br>- auf der BORG-Skala sollte die Anstrengung der Aktivität subjektiv mit etwa 14 bis 15 (etwas anstrengend bis anstrengend) bewertet werden
            <br>- Ihre Herzfrequenz erhöht sich deutlicher und Ihre Atmung ist etwas erschwert
            <br>- Reden ist noch in kurzen Sätzen möglich, aber nicht mehr so komfortabel

            <br><br><b>Intensitätszone 4 (sehr anstrengend)</b>
            <br>- auf der BORG-Skala sollte die Anstrengung der Aktivität subjektiv mit etwa 16 bis 17 (anstrengend bis sehr anstrengend) bewertet werden
            <br>- Ihre Atmung ist schwer und deutlich wahrnehmbar
            <br>- Reden ist nur in einzelnen Worten oder kaum mehr möglich

          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
     

</div>

<div class="col">
       <q-img src="img_BORG_small.png" style="width: 400px">
       </q-img>
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
  name: 'Anleitung_aerob',
  
  data () {
    return {
      TEXT: this.$store.state.TEXT
    }
  },
  components: {
    BACKBUTTON: () => import('src/components/BackButton')  },

}
</script>
