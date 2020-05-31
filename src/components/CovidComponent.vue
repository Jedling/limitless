<template>
  <div class="new-member">
    <div class="row">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
    </div>
    <section class="row justify-content-center">
      <div class="col-10 col-lg-10 card-block">
        <h4 class="card-title mt-4">
          VIKTIG INFORMATION ANGÅENDE COVID-19 VIRUSET!
        </h4>
        <hr class="hr-style" />
        <!-- <p class="content"></p> -->
        <div class="row">
          <div class="col-12">
            <ul class="unordered">
              <li class="li-item mb-2">
                Hej och varmt välkommen till LIMITLESS MALMÖ! Med hänsyn till
                rådande smittorisk av Covid-19 även känt som Corona-viruset,
                upplyser vi dig om att LIMITLESS MALMÖ har anpassat all sin
                verksamhet och följer de riktlinjer, krav samt hygienanvisningar
                som gäller för våran typ av aktiviteter. Majoriteten av våra
                pass hålls därför utomhus tillsvidare och är anpassade enligt
                Folkhälsomyndighetens samt andra myndigheters rekommendationer
                för att minska smittspridningen.
              </li>
              <br />
              <li class="li-item">
                Vi följer utvecklingen kontinuerligt för att kunna vidta de
                åtgärder som behövs för att säkerställa det för samtliga
                deltagare och instruktörer under träningen. Din hälsa är viktigt
                för oss, vi ber dig därför att respektera de direktiv som gäller
                med hänsyn till dig och dina träningskamrater. Du är välkommen
                att kontakta ansvariga för mer information om så önskas.
              </li>
            </ul>
          </div>
          <OutdoorGuidelines />
        </div>
      </div>
    </section>
    <h4 class="mt-3 mb-4 sthlm-header">REKOMMENDATIONER OCH HYGIENBILAGOR</h4>
    <section class="row justify-content-center">
      <div
        v-for="item in regMember"
        :key="item.Id"
        class="col-12 col-sm-4 mt-2 mb-5"
      >
        <a :href="item.href" class="stadgar" target="_blank">
          {{ item.name }}
          <i class="fas fa-external-link-alt ml-2"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OutdoorGuidelines from "@/components/OutdoorGuidelines.vue";

@Component({
  components: {
    OutdoorGuidelines
  }
})
export default class CovidComponent extends Vue {
  private regMember: any = [
    {
      id: 1,
      name: "Hygien- och städrutiner",
      href:
        "https://drive.google.com/file/d/1U8jaxNNmsYARiitol4v2e2ZE4MSDryhG/view?usp=sharing"
    },
    {
      id: 2,
      name: "Rekommendationer",
      href:
        "https://drive.google.com/file/d/1RQNXG7OqfVQXC62jlqag78t_M-9Luegz/view?usp=sharing"
    }
  ];
}
</script>
<style scoped lang="scss">
.new-member {
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
    padding: 0px 13px;
    -webkit-transition: 0.2s;
    margin: 13px;
    // max-width: 720px;
    transition: 0.2s;
    background-color: #f2f2f2;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    @media only screen and (max-width: 568px) {
    }
    .hr-style {
      background-color: var(--secondary);
    }
    .card-title {
      font-weight: bolder;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .name {
      color: var(--primary);
    }
    .unordered {
      text-align: left;

      .li-item {
        // text-decoration: none;
        // list-style: none;
        // font-size: 20px;
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        width: 75%;
        margin: 0 auto;
        @media only screen and (max-width: 768px) {
          font-size: 15px;
          width: 100%;
        }
      }
    }
    .content {
      @media only screen and (max-width: 568px) {
        font-size: 13px;
      }
    }
  }
  .sthlm-header {
    text-align: center;
    background-color: var(--primary);
    color: white;
    margin: 0 auto;
    width: 50%;
    font-size: 20px;
    padding: 20px;
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .stadgar {
    font-size: 20px;
  }

  a {
    position: relative;
    color: #000;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  // .card-block:hover {
  //   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  // }
}
</style>
