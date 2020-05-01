<template>
  <section class="wrapper">
    <figure>
      <img class="kfum-logo" :src="kfumLogo" alt="Logotyp Kfum" />
    </figure>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class KfumLogo extends Vue {
  private kfumLogo: string = "/img/kfum.png";
}
</script>
<style lang="scss" scoped>
.wrapper {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  .kfum-logo {
    width: 20%;
    @media only screen and (max-width: 768px) {
      width: 30%;
    }
  }
}
</style>
