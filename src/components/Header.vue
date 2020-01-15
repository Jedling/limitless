<template>
  <div class="header container-fluid">
    <div class="row justify-content-center mt-4 mb-4">
      <div class="col-md-12 text-center">
        <router-link class to="/">
          <img alt="Limitles Malmö logo" src="/img/header/test2.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-color: var(--primary);
}
</style>
