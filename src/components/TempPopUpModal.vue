<template>
  <div>
    <!--Smooth transition on hide and show for scroll to top button-->
    <transition name="fade">
      <div v-if="modalShowDescription" class="modal-filter">
        <div class="dc-modal scrollbar" id="scrollbar" ref="modal">
          <!-- <button
            @click="closeModal"
            type="button"
            class="close"
            data-dismiss="modal"
          >
            &times;
          </button> -->
          <div>
            <div>
              <!-- <div class="modal-content"> -->
              <!-- <div class="modal-header">
                  <h4 class="modal-title">korv</h4>
                </div> -->
              <div class="modal-body">
                <div class="outdoor-guidelines">
                  <!-- <section class="row justify-content-center"> -->
                    <div class="card-block">
                      <h4 class="card-title mt-4">
                        {{ title }}
                      </h4>
                      <hr class="hr-style" />
                      <!-- <p class="content"></p> -->
                      <figure>
                        <img style="width: 100%;" :src="summerDeal" alt="" />
                      </figure>
                      <!-- <div class="row">
                        <div class="col-12">
                          <ul class="unordered">
                            <li
                              v-for="item in array"
                              :key="item.id"
                              class="li-item mb-2"
                            >
                              <p>
                                Hej och varmt välkommen till LIMITLESS MALMÖ!
                                Med hänsyn till rådande smittorisk av Covid-19
                                även känt som Corona-viruset, upplyser vi dig om
                                att LIMITLESS MALMÖ har anpassat all sin
                                verksamhet och följer de riktlinjer, krav samt
                                hygienanvisningar som gäller för våra
                                aktiviteter.
                              </p>
                              <hr class="hr-style" />
                              <p>
                                Samtliga av våra pass hålls därför utomhus
                                tillsvidare och är anpassade enligt
                                Folkhälsomyndigheten samt andra myndigheters
                                rekommendationer för att minska
                                smittspridningen. Vi följer utvecklingen
                                kontinuerligt för att kunna vidta de åtgärder
                                som behövs för att säkerställa det för samtliga
                                deltagare och instruktörer under träningen. Du
                                är välkommen att kontakta ansvariga för mer
                                information om så önskas.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div> -->
                      <h5>Varmt välkomna!</h5>
                      <h5 style="font-weight: bolder;">BE YOU, BE LIMITLESS</h5>
                    </div>
                  <!-- </section> -->
                </div>
                <button
                  @click="closeModal"
                  type="button"
                  class="close-button"
                  data-dismiss="modal"
                >
                  STÄNG
                </button>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TempPopUpModal extends Vue {
  private modalShowDescription: boolean = true;
  private title: string = "Sommarerbjudande!";
  private summerDeal: string = "/img/introPopUp/sommardeal.JPG";
  private array: any = [
    // {
    //   id: 1,
    //   number: "1",
    //   rule:
    //     "Hej och varmt välkommen till LIMITLESS MALMÖ! Med hänsyn till rådande smittorisk av Covid-19 även känt som Corona-viruset, upplyser vi dig om att LIMITLESS MALMÖ har anpassat all sin verksamhet och följer de riktlinjer, krav samt hygienanvisningar som gäller för våra aktiviteter. Samtliga av våra pass hålls därför utomhus tillsvidare och är anpassade enligt Folkhälsomyndigheten samt andra myndigheters rekommendationer för att minska smittspridningen. Vi följer utvecklingen kontinuerligt för att kunna vidta de åtgärder som behövs för att säkerställa det för samtliga deltagare och instruktörer under träningen. Du är välkommen att kontakta ansvariga för mer information om så önskas. BE YOU, BE LIMITLESS!"
    // }
  ];

  private created() {
    this.modalShowDescription = true;
  }

  private closeModal() {
    this.modalShowDescription = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal-body {
  padding-left: 0;
  padding-right: 0;
}
.card-block {
  -webkit-transition: 0.2s;
  // max-width: 720px;
  //   box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  @media only screen and (max-width: 568px) {
  }
  .card-title {
    font-weight: 700;
    font-size: 1.3rem;
    @media only screen and (min-width: 768) {
      font-size: 1.75rem;
    }
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
    }
  }
  .content {
    @media only screen and (max-width: 568px) {
      font-size: 13px;
    }
  }
}
.modal-filter {
  visibility: visible;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 1;
}
.dc-modal {
  top: 50% !important;
  left: 50% !important;
  float: left;
  transform: translate(-50%, -50%);
  position: fixed !important;
  //   width: 70% !important;
  z-index: 9999 !important;
  //   color: #fff;
  border-radius: 1px;
  @media (max-width: 768px) {
    width: 90% !important;
  }
  .close-button {
    cursor: pointer;
    margin-top: 50px;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    width: 50%;
    background-color: var(--primary);
    border: 1px solid dimgray;
    color: white;
    @media only screen and (max-width: 768px) {
      margin-top: 10px;
    }
  }
  .modal-header {
    color: black;
    border-bottom: 4px solid;
    display: block;
    text-align: center;
  }
  //   .modal-content {
  //     display: block;
  //     color: black;
  //     position: relative;
  //     -ms-flex-direction: column;
  //     flex-direction: column;
  //     pointer-events: auto;
  //     background-color: #fff;
  //     background-clip: padding-box;
  //     border: 1px solid rgba(0, 0, 0, 0.2);
  //     border-radius: 0.1rem;
  //     outline: 0;
  //     width: 90% !important;
  //     margin: auto;
  //     padding: 5px;
  //     box-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
  //   }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.scrollbar {
  float: left;
  height: 85%;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}
#scrollbar::-webkit-scrollbar {
  width: 3px;
  background-color: #f5f5f5;
}
#scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  //   background-image: -webkit-gradient(
  //     linear,
  //     40% 0%,
  //     75% 84%,
  //     from(rgb(248, 80, 80)),
  //     to(rgb(230, 90, 90)),
  //     color-stop(0.6, rgb(243, 69, 0))
  //   );
  background-color: var(--secondary);
}
</style>
