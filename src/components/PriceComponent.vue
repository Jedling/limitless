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
        <div class="col-md-10 col-12 mb-4 mx-auto wrapper">
          <h5 class="title mt-4">TRÄNINGSAVGIFTER OCH MEDLEMSAVGIFT:</h5>
          <hr class="hr-style" />
          <p class="card-text">INBETALNINGSUPPGIFTER</p>
          <p class="card-text">BANKGIRO:</p>
          <div class="dropdown">
            <i class="fas fa-info-circle info">
            </i>
              <span class="swish">SWISH: 123 165 6446</span>
            
            <div class="dropdown-content">
              <p
                class="swish-hover"
              >Vid SWISH-betalning ange fullständiga personnr (2000-06-12-XXXX) samt för vad inbetalningen avser t ex Medlemsavgift.</p>
            </div>
          </div>
          <p class="card-text">ÅRSKORT: 3 800 kr</p>
          <p class="card-text">HALVÅRSKORT: 2 800 kr</p>
          <p class="card-text">10-KORT: 900 kr</p>
          <p class="card-text">
            På samtliga priser ovan tillkommer en obligatorisk medlemsavgift på 100 kr som avser medlemskap i föreningen KFUM Limitless Malmö. Den gäller per kalenderår oavsett datum för inbetalning.
            Vid inbetalning via bankgiro ange för- och efternamn för den inbetalningen avser samt fullständiga personnr (2000-06-12-XXXX) samt för vad inbetalningen avser t ex Träningsavgift.
            Vid SWISH-betalning ange fullständiga personnr (2000-06-12-XXXX) samt för vad inbetalningen avser t ex Medlemsavgift.
            Medlemsavgiften skall betalas in separat vid samtliga inbetalningar med fullständigt personnr (2000-06-12-XXXX) för den medlemsavgiften avser samt ange ”Medlemsavgift 20XX” i meddelande tillsammans med fullständiga personnr.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PriceComponent extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
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
    .title {
      // margin-top: 0.5rem;
    }
    .swish {
      cursor: pointer;
      text-decoration: underline;
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
  }
}
</style>
