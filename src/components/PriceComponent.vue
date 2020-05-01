<template>
  <div class="prices">
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
      <div class="row">
        <div
          class="col-md-10 col-12 mb-4 justify-content-center mx-auto wrapper"
        >
          <h5 class="title mt-4">{{ title }}</h5>
          <hr class="hr-style" />
          <p class="card-text">{{ itenary }}</p>
          <div class="row justify-content-center">
            <div v-for="item in content" :key="item.id">
              <div class="content">
                <section class="col-12" style="">
                  <div class="inner-content">
                    <h5 class="header">{{ item.association }}</h5>
                    <hr class="hr-style" />
                    <p class="card-text">{{ item.bankinfo }}</p>
                    <div class="dropdown">
                      <i class="fas fa-info-circle info"></i>
                      <span class="swish">SWISH: {{ item.swish }}</span>

                      <div class="dropdown-content">
                        <p class="swish-hover">
                          Vid SWISH-betalning ange fullständiga personnr
                          (2000-06-12-XXXX) samt för vad inbetalningen avser t
                          ex Medlemsavgift.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="card-text">
            <p class="full-year">ÅRSKORT: 3 800 kr</p>
            <p class="half-year">HALVÅRSKORT: 2 800 kr</p>
            <p class="ten-card">10-KORT: 900 kr</p>
            <p class="summer-offer">
              SOMMARERBJUDANDE <span style="color: red">*</span> (1/5-31/8): 999
              KR
            </p>
          </div>
          <section class="payment-info">
            <p class="card-text">
              På samtliga avgifter ovan tillkommer en
              <strong>
                obligatorisk medlemsavgift på 50 kr till KFUM Malmö samt 100 kr
                till KFUM Limitless </strong
              >, dessa avser medlemskap i föreningen KFUM Malmö samt KFUM
              Limitless och är giltigt endast under det kalenderår som
              inbetalning görs. Vid SWISH-betalning ange fullständigt personnr
              (2000-06-12-XXXX) samt för vad inbetalningen avser t ex
              Medlemsavgift.
            </p>
            <hr class="hr-style" />
            <p>
              Vid inbetalning via BANKGIRO ange för- och efternamn för den
              inbetalningen avser samt fullständigt personnr (2000-06-12-XXXX)
              samt för vad inbetalningen avser t ex Träningsavgift.
            </p>
            <p>
              Medlemsavgiften skall betalas in separat från träningsavgiften med
              fullständigt personnr (2000-06-12-XXXX) för den medlemsavgiften
              avser samt ange ”Medlemsavgift 20XX” i meddelande tillsammans med
              fullständiga personnr. Vid inbetalning av träningsavgiften,
              oavsett SWISH eller BANKGIRO, skall fullständigt personnr
              (2000-06-12-XXXX) samt vilket träningskort det gäller tillexempel
              ”Sommarebjudandet”.
            </p>
            <p>
              <span style="color: red;">*</span>=Tillfälligt erbjudande, gäller
              endast NYA medlemmar!
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PriceComponent extends Vue {
  private title: string = "TRÄNINGSAVGIFTER OCH MEDLEMSAVGIFT";
  private itenary: string = "INBETALNINGSUPPGIFTER";
  private content: any = [
    {
      id: 1,
      association: "KFUM LIMTLESS",
      bankinfo: "BANKGIRO: 5239-6561",
      swish: "123 166 6446"
    },
    {
      id: 2,
      association: "KFUM MALMÖ",
      bankinfo: "BANKGIRO: 272-1934",
      swish: "123 189 8980"
    }
  ];
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.prices {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .wrapper {
    padding: 0 15px;
    background-color: #f5f5f5;
    .hr-style {
      background-color: var(--secondary);
    }
    .content {
      margin: 5px;
      padding: 5px;
      border-radius: 1px;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
      background-color: rgba(143, 167, 143, 0.1);
      .header {
        margin-top: 10px;
        font-weight: 700;
      }
    }
    // .title {
    //   // margin-top: 0.5rem;
    // }
    .dropdown {
      margin-bottom: 1rem;
      .swish {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .info {
      margin-right: 5px;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      left: 50%;
      margin-left: -140px !important;
      z-index: 1;
      text-align: left;
      list-style-type: none;
      overflow-x: hidden;
      .swish-hover {
        width: 280px;
        padding: 10px;
        margin: 0;
      }
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
    .payment-info {
      width: 75%;
      margin: 0 auto;
      text-align: left;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .summer-offer {
      @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
}
</style>
