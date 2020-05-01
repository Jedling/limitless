<template>
  <div class="about-us mt-4 container mb-4">
    <h2 class="header text-center">IT-POLICY / GDPR</h2>
    <ComingSoonComponent />
    <hr style="hr-style" />
    <KfumLogo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComingSoonComponent from "@/components/ComingSoonComponent.vue";
import KfumLogo from "@/components/KfumLogo.vue";

@Component({
  components: {
    ComingSoonComponent,
    KfumLogo
  }
})
export default class Policies extends Vue {}
</script>
<style scoped lang="scss">
.about-us {
  display: block;
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 568px) {
      font-size: 2em;
    }
  }
}
</style>
