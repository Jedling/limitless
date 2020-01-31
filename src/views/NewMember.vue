<template>
  <div class="new-member mt-4 container">
    <h2 class="header text-center mb-4">PRISER</h2>
    <NewMemberComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NewMemberComponent from '../components/NewMemberComponent.vue';

@Component({
  components: {
    NewMemberComponent,
  },
})
export default class NewMember extends Vue {}
</script>
<style scoped lang="scss">
.new-member {
  .header {
    background-color: var(--primary);
    font-size: 2em;
    color: var(--menuText);
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
}
</style>