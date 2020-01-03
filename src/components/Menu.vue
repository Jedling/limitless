<template>
  <div class="main mb-3">
    <div class="container-fluid">
      <div class="row justify-content-center mx-auto">
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="about-us">
              <button type="button" class="btn background btn-circle btn-xl">OM FÖRENINGEN</button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="schema-aktiviteter">
              <button type="button" class="btn background btn-circle btn-xl">SCHEMAN</button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <!-- <i class="glyphicon glyphicon-ok">Schema</i> -->
            <router-link class="glyphicon glyphicon-list" to="hitta-oss">
              <button type="button" class="btn background btn-circle btn-xl">HITTA -OCH KONTAKTA OSS</button>
            </router-link>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="e-boken">
              <button type="button" class="btn background btn-circle btn-xl">
                <!-- <router-link class="glyphicon glyphicon-list" to="Partners" -->
                TRÄNINGSPASS
              </button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="övningar">
              <button type="button" class="btn background btn-circle btn-xl">HIKARI DO</button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="appen">
              <button type="button" class="btn background btn-circle btn-xl">PROJEKT</button>
            </router-link>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="partners">
              <button type="button" class="btn background btn-circle btn-xl">IT-POLICY / GDPR</button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to>
              <button type="button" class="btn background btn-circle btn-xl">PRISER</button>
            </router-link>
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to>
              <button type="button" class="btn background btn-circle btn-xl">PARTNERS</button>
            </router-link>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-6 col-md-6">
            <router-link class="glyphicon glyphicon-list" to="partners">
              <button type="button" class="btn background btn-circle btn-xl">LOGGA IN</button>
            </router-link>
          </div>
          <div class="col-6 col-md-6">
            <router-link class="glyphicon glyphicon-list" to>
              <button type="button" class="btn background btn-circle btn-xl">NY<br> DELTAGARE <br> PROVA PÅ</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Menu extends Vue {
  // @Prop() private msg!: string;
  // private navTypes: NavTypeModel[] = navTypeData;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  background-color: white;
  // max-width: 1200px;
  a {
    color: var(--menuText);
  }
  .background {
    background-color: var(--primary);
  }

  .btn-circle:hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 0.8em;
    line-height: 1.428571429;
    font-weight: 700;
    border-radius: 15px;
    color: white;
  }
  .btn-circle.btn-xl {
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 736px) {
      font-weight: 700;
      width: 80px;
      height: 80px;
      font-size: 0.6em;
      padding: 0px;
      margin: 5px;
    }
    @media only screen and (max-width: 320px) {
      // width: 70px;
      // height: 70px;
      font-size: 0.6em;
      padding: 10px !important;
      margin: 5px;
      // word-break: break-word;
    }
    padding: 10px 16px;
    margin: 10px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 100%;
  }
  //   [type="radio"] {
  //   position: absolute;
  //   opacity: 0;
  //   width: 0;
  //   height: 0;
  // }

  // /* IMAGE STYLES */
  // [type="radio"] + .btn-circle {
  //   cursor: pointer;
  //   width: 100%;
  //   &:hover {
  //     background-color: #cec9c0;
  //     transition: 0.5s ease;
  //     color: white;
  //   }
  // }

  // /* CHECKED STYLES */
  // [type="radio"]:checked + .btn-circle {
  //   background-color: red;
  //   color: white;
  //   border-radius: 15px;
  // }
}
</style>
