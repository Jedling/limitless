<template>
  <div class="covid mt-4 container">
    <h2 class="header text-center mb-4">COVID-19</h2>
    <CovidComponent />
    <KfumLogo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CovidComponent from "@/components/CovidComponent.vue";
import KfumLogo from "@/components/KfumLogo.vue";

@Component({
  components: {
    CovidComponent,
    KfumLogo
  }
})
export default class Covid extends Vue {}
</script>
<style scoped lang="scss">
.covid {
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    width: 100%;
  }
}
</style>
