<template>
  <v-container grid-list-md>
    <v-layout row wrap>   
     <v-flex xs7>
       <v-card dark color="primary">
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card dark>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
</style>
