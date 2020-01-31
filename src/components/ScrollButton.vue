<template>
  <div>
    <!--Smooth transition on hide and show for scroll to top button-->
    <transition name="fade">
      <button v-show="showScrollButton" @click="scrollToTop" class="scroll-button">
        <i class="fas fa-arrow-up"></i>
      </button>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ScrollButton extends Vue {
  private showScrollButton: boolean = false;
  private scroll: number = 0;

  // After 300px button is appearing in window
  private onScroll() {
    this.scroll = window.scrollY;
    if (this.scroll > 300) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
  // Reset window to top on click with smooth sensation
  private scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
    // No smooth sensation
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.scroll-button {
  display: block;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--menuText);
  border: 1px solid var(--secondary);
  position: fixed;
  width: 45px;
  height: 45px;
  right: 15px;
  bottom: 15px;
  outline: none;
  z-index: 2;
}
</style>
