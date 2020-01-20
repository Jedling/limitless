<template>
  <section class="about-us-comp">
    <div class="container">
      <div class="row mt-4">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
      </div>
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
      <iframe src="https://drive.google.com/file/d/1_NlFaHsDYrtJWmL0QyBbezCNbtG7f35w/preview" width="320" height="480"></iframe>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AboutUsComponent extends Vue {}
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
