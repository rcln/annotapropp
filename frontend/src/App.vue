<template>
  <div id="app">
  <v-app>
  <Header />
  <v-content>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex text-xs-center>
        <router-view/>
      </v-flex>
    </v-layout>
  </v-container>
  </v-content>  
    <Footer />
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
