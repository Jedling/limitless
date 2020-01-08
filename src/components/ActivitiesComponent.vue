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
        <div class="col-md-8 col-12 mb-4 mx-auto">
          <p class="intro-text mt-4">Träningspass</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 event-comp">
 
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import activityData from '@/assets/data/ActivitiesEntity';
import { ActivitiesModel } from '../types/ActivitiesModel';

@Component({
  components: {},
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
}
</style>