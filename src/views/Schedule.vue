<template>
  <div class="schedule mt-4 container">
    <h2 class="header text-center mb-4">SCHEMA</h2>
    <ScheduleComponent />
    <hr style="hr-style" />
    <KfumLogo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScheduleComponent from "@/components/ScheduleComponent.vue";
import KfumLogo from "@/components/KfumLogo.vue";

@Component({
  components: {
    ScheduleComponent,
    KfumLogo
  }
})
export default class Schedule extends Vue {}
</script>
<style scoped lang="scss">
.header {
  font-size: 2em;
  color: var(--menuText);
  background-color: var(--primary);
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  .intro-text {
    font-size: 1.2em;
  }
  #test {
    font-size: 40px !important;
  }
}
</style>
