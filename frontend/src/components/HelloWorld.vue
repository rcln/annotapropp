<template>
  <div id="grille">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs7>
          <!--v-card id="zoneTexte"-->
            <v-textarea
              type="file"
              @change="loadTextFromFile"
              id="texteArea"
              rows="29"
              outline
              name="input-7-20"
              placeholder="Ecrivez votre texte.">
            </v-textarea>
          <!--/v-card-->
          <!--v-text-reader @load="text = $event"-->
            <v-btn @click="$refs.inputUpload.click()" fab color="white">
              <v-icon color="blue">
                cloud_upload
              </v-icon>
            </v-btn>
          <!--/v-text-reader-->
            <v-btn fab color="white">
              <v-icon color="blue">
                edit
              </v-icon>
            </v-btn>
            <v-btn id="borderSave" fab color="white">
              <v-icon color="blue">
                save
              </v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs5>
          <v-card flat dark>
            <div>
              <v-card-title><div class="title font-weight-thin">Les Fonctions</div></v-card-title>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Initial Situation" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Absentation" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Interdiction" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Violation" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Reconnaissance" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Delivery" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Trickery" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Complicity" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Preliminary misfortune" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Villainy" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Lack" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Mediation" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Beginning counteracting" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Departure" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="First function of the Donor" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="The hero's reaction" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Provision of a magical agent" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Guidance" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Struggle" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Branding" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Victory" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Liquidation of Lack" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Return" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Pursuit" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Rescue" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Unrecognized" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Unfounded claims" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Difficult task" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Solution" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Recognition" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
              <tr>
                <v-card-actions>
                  <td><v-checkbox v-model="selected" label="Exposure" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Transfiguration" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Punishment" hide-details></v-checkbox></td>
                  <td><v-checkbox v-model="selected" label="Wedding" hide-details></v-checkbox></td>
                </v-card-actions>
              </tr>
            </div>
            <div>
              <v-card-title><div class="title font-weight-thin">Les Arguments</div></v-card-title>
              <table>
                <tr>
                  <v-card-actions>
                    <td><v-checkbox v-model="selected" label="Argument 1" hide-details></v-checkbox></td>
                    <td><v-checkbox v-model="selected" label="Argument 2" hide-details></v-checkbox></td>
                    <td><v-checkbox v-model="selected" label="Argument 3" hide-details></v-checkbox></td>
                  </v-card-actions>
                </tr>
                <tr>
                  <v-card-actions>
                    <td><v-checkbox v-model="selected" label="Argument 4" hide-details></v-checkbox></td>
                    <td><v-checkbox v-model="selected" label="Argument 5" hide-details></v-checkbox></td>
                    <td><v-checkbox v-model="selected" label="Argument 6" hide-details></v-checkbox></td>
                  </v-card-actions>
                </tr>
              </table>
            </div>
          </v-card>
          <v-btn id="automatique" color="grey">Activer annotation automatique</v-btn>
        </v-flex>
        <!-- =========================================-->
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*#zoneTexte{
  background-color: white;
  border-color: grey;
}*/
#texte{
  padding: 42%;
}

#propp{
  padding: 30%;
}

#automatique{
  font-size: auto;
}

#borderSave{
  border-color: black;
}

/*#fonct{
  text-align: center;
}*/
</style>
