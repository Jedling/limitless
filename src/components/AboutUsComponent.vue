<template>
  <section class="about-us-comp">
    <!-- <div class="container"> -->
      <div class="row mt-4">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
      </div>
      <figure>
        <img class="img-style" src="/img/aboutUs/regler.jpg" alt="">
      </figure>
      <div class="container">
      <section class="row justify-content-center">
        <div class="col-12 col-lg-6 card-block">
          <h5 class="card-title mt-4"></h5>
          <p class="content">
            Stadgar
            <br />Partners
            <br />Trivselregler
            <br />Förhållningssätt
            <br />Policy
          </p>
          <div class="mt-3 mb-3">
            <div class="row">
              <!-- <div
                v-for="trainer in act.Trainers"
                :key="trainer.id"
                :class="act.Trainers.length < 2 ? 'col-6 mx-auto' : 'col-6'"
              >-->
              <figure>
                <img src class="card-img" alt />
              </figure>
              <h5 class="name"></h5>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </section>
      </div>
      <iframe
        src="https://drive.google.com/file/d/1_NlFaHsDYrtJWmL0QyBbezCNbtG7f35w/preview?usp=sharing"
        width="310"
        height="480"
      ></iframe>
    <!-- </div> -->
       <!-- <transition name="fade">
      <div v-show="modal" class="modal-filter">
        <div class tabindex="-1" role="dialog">
          <div class="modal-dialog modal-full" ref="modal" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  @click="closeModal()"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body mx-auto">
                <div v-for="(img, index) in this.modalContent" :key="index">
                  <img class="modal-img" :src="`${ img }`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition> -->
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AboutUsComponent extends Vue {
  private img: string = '/img/aboutUs/regler.jpg';
}
</script>
<style scoped lang="scss">
.about-us-comp {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  // .fullwidth {
  //   margin-left: calc(50%-50vw) !important;
  //   margin-right: calc(50%-50vw) !important;
  // }
  .img-style {
    width: 100%;
    height: 40vh;
    opacity: 0.65;
    -o-object-fit: cover;
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(34,25,25,.4);
    -moz-box-shadow: 0 1px 2px rgba(34,25,25,.4);
    -webkit-box-shadow: 0 1px 3px rgba(34,25,25,.4);
    @media only screen and (min-width: 1024px) {
      height: 50vh;
    }
  }

  .card-block {
    padding: 0px 13px;
    -webkit-transition: 0.2s;
    margin: 13px;
    max-width: 520px;
    transition: 0.2s;
    background-color: #f2f2f2;
    @media only screen and (max-width: 568px) {
    }
    .hr-style {
      background-color: var(--secondary);
    }

    .name {
      color: var(--primary);
    }
    .content {
      @media only screen and (max-width: 568px) {
        font-size: 13px;
      }
    }
  }

  .card-block:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
