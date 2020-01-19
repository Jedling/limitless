<template>
  <div class="login mt-4 container">
    <div v-if="loggedIn">
      <h2 class="header text-center mb-4">MITT KONTO</h2>
    </div>
    <div v-else>
      <h2 class="header text-center mb-4">LOGGA IN</h2>
    </div>
    <LoginComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import LoginComponent from "../components/LoginComponent.vue";

@Component({
  components: {
    LoginComponent
  }
})
export default class Login extends Vue {
  
  get loggedIn() {
    return this.$store.state.loggedIn;
  }
}
</script>
<style scoped lang="scss">
.login {
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
}
</style>