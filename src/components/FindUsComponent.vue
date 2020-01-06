<template>
  <div class="hitta-oss">
    <div class="container">
      <div class="row mt-4">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
        <div class="col-md-10 col-12 mb-4 mx-auto">
          <p class="card-text">
            Nedan finner du samtliga adresser och kontaktuppgifter för Projekt LIVs aktiviteter.
          </p>
        </div>
      </div>
      <div class="row mb-5 card-frame justify-content-center">
        <div class="col-sm-6">
          <div class="card mt-2 mb-2">
            <div class="card-body text-center">
              <h2 class="card-title"> KFUM LIMITLESS</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <span class="fas fa-mobile-alt">+46 (0) 707 28 56 62</span> 
                </li>
                <li class="list-group-item">
                  <i class="fas fa-envelope"></i> Info@meraliv.nu
                </li>
              </ul>
            </div>
            <div class="card-body text-center">
              <h5>Adress</h5>
              <ul class="list-group text-center list-group-flush">
                <li class="list-group-item">
                  <p> Betaniaplan vån 4</p>
                  <p>211 55 Malmö</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mt-2 mb-2">
            <div class="google-maps">
              <iframe
                width="600"
                height="450"
                src="https://maps.google.com/maps?q=BETIANIAPLAN%204&t=&z=13&ie=UTF8&iwloc=&output=embed"
                id="gmap_canvas"
                style="border:0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { FindUsTypeModel } from '@/types/FindUsTypeModel';
// import findUsTypeData from '@/assets/data/FindUsEntity';

@Component({})
export default class FindUsComponent extends Vue {
  // @Prop() private msg!: string;
  // private findUsType: FindUsTypeModel[] = findUsTypeData;
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.hitta-oss {
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
  .card-frame {
    box-shadow: 1px 1px 10px 1px #888888;
  }
  .card-title {
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: none;
  }
  .google-maps {
    position: relative;
    padding-bottom: 75%; // This is the aspect ratio
    height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
