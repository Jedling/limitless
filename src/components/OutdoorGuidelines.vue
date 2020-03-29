<template>
  <div class="container">
    <div class="outdoor-guidelines">
      <section class="row justify-content-center">
        <div class="col-10 col-lg-10 card-block">
          <h5 class="card-title mt-4">
            Vänligen följ anvisningarna nedan för din och andras trivsel och
            hälsa!
          </h5>
          <hr class="hr-style" />
          <!-- <p class="content"></p> -->
          <div class="row">
            <div class="col-12">
              <ul class="unordered">
                <li v-for="item in array" :key="item.id" class="li-item mb-2">
                  <strong> {{ item.number }} .</strong>
                  {{ item.rule }}
                </li>
              </ul>
            </div>
          </div>
          <h5>Varmt välkomna! BE YOU, BE LIMITLESS</h5>
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
        "Har du någon i din omgivning eller själv varit sjuk, vänligen stanna hemma enligt Folkhälsomyndighetens rekommendationer."
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
      transition: all 1s ease;

      &:hover {
        color: white;
        text-decoration: none;
        // transition: all 0.5s ease;
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
    // max-width: 720px;
    transition: 0.2s;
    background-color: #f2f2f2;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    @media only screen and (max-width: 568px) {
    }
    .hr-style {
      background-color: var(--secondary);
    }

    .name {
      color: var(--primary);
    }
    .unordered {
      text-align: left;

      .li-item {
        text-decoration: none;
        list-style: none;
        font-size: 20px;
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

  // .card-block:hover {
  //   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  // }
}
</style>
