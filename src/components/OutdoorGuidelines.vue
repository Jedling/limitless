<template>
  <div class="container">
    <div class="outdoor-guidelines">
      <section class="row justify-content-center">
        <div class="col-10 col-lg-10 card-block">
          <h4 class="card-title mt-4">
            Vänligen följ anvisningarna nedan för din och andras trivsel och
            hälsa!
          </h4>
          <hr class="hr-style" />
          <!-- <p class="content"></p> -->
          <div class="row mb-4">
            <div class="col-12">
              <!-- <ul class="unordered">
                <li v-for="item in array" :key="item.id" class="li-item mb-2">
                  <strong>{{ item.number }} .</strong>
                  {{ item.rule }}
                  <a
                    v-if="item.url"
                    :href="item.url"
                    class="contact"
                    target="_blank"
                  >Läs mer här!</a>
                </li>
              </ul>-->
              <table>
                <tr v-for="item in array" :key="item.id" class="unordered">
                  <td class="li-num">{{item.number}}</td>
                  <td class="li-item">
                    {{item.rule}}
                    <a
                      v-if="item.url"
                      :href="item.url"
                      class="contact"
                      target="_blank"
                    >Läs mer här!</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <h5 class="card-title">Varmt välkomna!</h5>
          <h5 class="card-title">BE YOU, BE LIMITLESS</h5>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class OutdoorGuidelines extends Vue {
  private array: any = [
    {
      id: 1,
      number: "1",
      rule:
        "Ha gärna handskar/vantar på er, alternativt alkogel (finns på plats) före, under och efter passet."
    },
    {
      id: 2,
      number: "2",
      rule: "Distans på 2 meter till varandra är att föredra."
    },
    {
      id: 3,
      number: "3",
      rule: "Egen vattenflaska medhavas, dela inte!"
    },
    {
      id: 4,
      number: "4",
      rule: "Vid minsta upplevda symptom vänligen avbryt och lämna."
    },
    {
      id: 5,
      number: "5",
      rule:
        "Har du någon i din omgivning eller själv varit sjuk, vänligen stanna hemma enligt Folkhälsomyndighetens rekommendationer.",
      url:
        "https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/information-till-idrotts--och-traningsanlaggningar/"
    },
    {
      id: 6,
      number: "6",
      rule: "Ta på varma/extra kläder såsom mössa, halsduk mm."
    },
    {
      id: 7,
      number: "7",
      rule: "Eget ansvar gäller vid deltagande!"
    }
  ];
}
</script>
<style scoped lang="scss">
.outdoor-guidelines {
  .card-title {
    font-weight: bolder;
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
    .contact {
      color: cornflowerblue;
      &:hover {
        text-decoration: none;
        color: cornflowerblue;
      }
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
      @media only screen and (max-width: 1024px) {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.1s ease-in-out 0s;
        transition: all 0.1s ease-in-out 0s;
      }
    }

    a:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    .name {
      color: var(--primary);
    }
    .unordered {
      text-align: left;
      .li-num {
        padding: 10px 15px 0 5px;
        vertical-align: initial;
        font-weight: bolder;
        font-size: 20px;
        @media only screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
      .li-item {
        text-decoration: none;
        list-style: none;
        font-size: 20px;
        padding: 10px;
        @media only screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
    }
    .content {
      @media only screen and (max-width: 568px) {
        font-size: 13px;
      }
    }
  }
}
</style>
