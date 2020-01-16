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
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10 col-10 mb-4 justify-content-center">
          <div class="dropdown">
            <span>
              <h4>Snabbvalsmeny</h4>
              <i class="fas fa-angle-down"></i>
            </span>
            <div class="dropdown-content">
              <div v-for="item in activities" :key="item.id">
                <ul class="scrollable-menu" role="menu">
                  <li class="list-object">
                    <a
                      class="goto-act"
                      id="nav"
                      data-toggle
                      :href="`#${item.Url}`"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >{{ item.Name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Scroll componenten added -->
      <ScrollButton />
      <!--Iterates through list of activities -->
      <section class="row justify-content-center">
        <div
          v-for="act in activities"
          :key="act.id"
          class="col-12 col-lg-6 card-block"
          :id="act.Url"
        >
          <h5 class="card-title mt-4">{{ act.Name }}</h5>
          <hr class="hr-style" />
          <p class="content">{{ act.Description }}</p>
          <div class="mt-3 mb-3">
            <div class="row">
              <div
                v-for="trainer in act.Trainers"
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
        </div>
      </section>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import activityData from "@/assets/data/ActivitiesEntity";
import { ActivitiesModel } from "../types/ActivitiesModel";
import ScrollButton from "../components/ScrollButton.vue";

@Component({
  components: {
    ScrollButton
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
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    left: 50%;
    margin-left: -140px !important;
    // min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    height: auto;
    text-align: left;
    max-height: 200px;
    list-style-type: none;
    overflow-x: hidden;
    a {
      display: block;
      color: var(--primary);
      list-style-type: none;
      padding: 12px 16px;
      // width: 100%;
      width: 280px;
      &:hover {
        color: white;
        text-decoration: none;
      }
    }
    .scrollable-menu {
      padding: 0;
      &:hover {
        background-color: var(--primary);
        color: white;
      }
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
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
    .card-title {
      // padding: 10px 0;
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
