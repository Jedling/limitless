<template>
  <div class="findus mt-4 container">
    <h2 class="header text-center mb-4">KONTAKTA OSS</h2>
    <FindUsComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import FindUsComponent from '@/components/FindUsComponent.vue';

@Component({
  components: {
    FindUsComponent,
  },
})
export default class FindUs extends Vue {}
</script>
<style scoped lang="scss">
.findus {
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
}
</style>