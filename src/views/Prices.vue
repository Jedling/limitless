<template>
  <div class="prices mt-4 container">
    <h2 class="header text-center mb-4">PRISER</h2>
    <PriceComponent />
    <hr style="hr-style" />
    <KfumLogo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PriceComponent from "@/components/PriceComponent.vue";
import KfumLogo from "@/components/KfumLogo.vue";

@Component({
  components: {
    PriceComponent,
    KfumLogo
  }
})
export default class Prices extends Vue {}
</script>
<style scoped lang="scss">
.prices {
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
}
</style>
