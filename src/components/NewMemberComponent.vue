<template>
  <section>
    <ComingSoonComponent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComingSoonComponent from "@/components/ComingSoonComponent.vue";

@Component({
  components: {
    ComingSoonComponent
  }
})
export default class NewMemberComponent extends Vue {}
</script>
<style scoped lang="scss">
</style>
