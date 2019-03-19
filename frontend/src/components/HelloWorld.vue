<template>
  <div id="grille">
    <v-container fluid grid-list-md>
      <v-layout row wrap>   
        <v-flex xs7>
          <v-card id="zoneTexte">
            <v-card-text id="texte" class="px-0"> </v-card-text>
            <v-btn fab color="white">
              <v-icon color="blue">
                present_to_all
              </v-icon>
            </v-btn>
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
          </v-card>
        </v-flex>
        <v-flex xs5>
          <v-card dark>
            <v-card-text id="propp" class="px-0">
              <v-checkbox v-model="selected" label="Fonction 1"></v-checkbox>
              <v-checkbox v-model="selected" label="Fonction 2"></v-checkbox>
              <v-checkbox v-model="selected" label="Argument 1"></v-checkbox>
              <v-checkbox v-model="selected" label="Argument 2"></v-checkbox>
            </v-card-text>
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
#zoneTexte{
  background-color: white;
  border-color: grey;
}
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
</style>
