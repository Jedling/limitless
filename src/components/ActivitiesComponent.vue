<template>
  <div class="activity">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
        <div class="col-md-10 col-12 mb-4 justify-content-center">
          <p class="intro-text mt-4">Träningspass</p>
        </div>
        <div v-for="item in activities" :key="item.id">
          <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active goto-act"
                id="nav"
                data-toggle="tab"
                :href="`#${item.Url}`"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >{{ item.Name }}</a>
            </div>
          </nav>
        </div>
      </div>
      
      <ScrollButton/>
      <!--Cards -->
      <section class="row">
        <div
          v-for="act in activities"
          :key="act.id"
          class="col-12 col-lg-6 card-block"
          :id="act.Url"
        >
          <!-- <div class="card-block"> -->
          <h5 class="card-title">{{ act.Name }}</h5>
          <hr class="hr-style" />
          <p class="content">{{ act.Description }}</p>
          <div class="mt-3 mb-3">
            <div class="row">
              <div
                v-for="trainer of act.Trainers"
                :key="trainer.id"
                :class="act.Trainers.length < 2 ? 'col-6 mx-auto' : 'col-6'"
              >
                <figure>
                  <img v-bind:src="trainer.Img" class="card-img" />
                </figure>
                <h5 class="name">{{ trainer.Name }}</h5>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import activityData from "@/assets/data/ActivitiesEntity";
import { ActivitiesModel } from "../types/ActivitiesModel";
import ScrollButton from '../components/ScrollButton.vue';

@Component({
  components: {
    ScrollButton,
  }
})
export default class ActivitiesComponent extends Vue {
  private activities: ActivitiesModel[] = activityData;

}
</script>
<style scoped lang="scss">
.activity {
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .card-block {
    padding: 0 15px;
    max-height: 37rem;
    transition: 0.2s;
    @media only screen and (max-width: 568px) {
      // height: 30rem;
    }
    .hr-style {
      background-color: var(--secondary);
    }
    .card-title {
      padding: 10px 0;
    }
    .name {
      color: var(--primary);
    }
    .content {
      @media only screen and (max-width: 568px) {
        font-size: 13px;
        // margin-bottom: 10px;
      }
    }
  }
  .goto-act {
    font-size: 12px;
    background-color: var(--secondary);
    width: 50%;
  }
  .card-block:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
