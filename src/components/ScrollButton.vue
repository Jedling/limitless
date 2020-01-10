<template>
  <div>
  <button v-show="showScrollButton" @click="scrollToTop" class="scroll-button">Up</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ScrollButton extends Vue {
  private showScrollButton: boolean = false;
  private scroll: number = 0;
   private onScroll() {
    this.scroll = window.scrollY;
    if (this.scroll > 400) {
      this.showScrollButton = true;
    }
    else if (this.scroll) {
      this.showScrollButton = false;
    }
  }
  private scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.showScrollButton = false;
  }
  private beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  private beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .scroll-button {
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--menuText);
    position: fixed;
    width: 45px;
    height: 45px;
    display: block;
    right: 15px;
    bottom: 15px;
    border: 1px solid var(--secondary);
    outline: none;
    // opacity: 0;
    z-index: 2;
  }
</style>
