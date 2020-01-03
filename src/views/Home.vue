<template>
  <div class="home">
    <Menu />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class Home extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  flex: 1;
}
</style>
