<template>
  <div id="app">
    <Header />
    <Main>
      <router-view />
    </Main>
    <TempPopUpModal />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TempPopUpModal from "@/components/TempPopUpModal.vue";

@Component({
  components: {
    Header,
    Footer,
    TempPopUpModal
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab

main {
  flex: 1;
}
#app {
  --primary: #55585f;
  --secondary: #add8f9;
  --menuText: #fdfdfd;
  --hover: #7d8080;

  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto ,Oxygen-Sans,Ubuntu,Cantarell,helvetica neue,sans-serif;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}
</style>
