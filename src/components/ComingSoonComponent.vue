<template>
  <section class="coming-soon">
    <div class="row mt-4">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <figure>
        <img
          class="img-style"
          src="/img/comingsoon.jpg"
          alt="Photo by Mabel Amber from Pexels
"
        />
        <div class="text-block">
          <h4>Mer information kommer snart</h4>
        </div>
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ComingSoonComponent extends Vue {}
</script>
<style scoped lang="scss">
.coming-soon {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .wrapper {
    position: relative;
    .text-block {
      position: absolute;
      bottom: 15vh;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      padding-right: 20px;
      padding-left: 20px;
      h4 {
        font-size: 2rem;
        padding: 10px;
        font-weight: bolder;
        @media only screen and (min-width: 375px) {
          font-size: 1.5rem;
        }
      }
    }
  }
  .img-style {
    width: 100%;
    height: 40vh;
    opacity: 0.65;
    -o-object-fit: cover;
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
    -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
    @media only screen and (min-width: 1440px) {
      height: 35vh;
    }
  }
}
</style>
