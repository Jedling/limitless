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
      </div>
      <div class="row">
        <div class="col-md-10 col-12 mb-4 mx-auto">
          <p class="card-text">
            Texten nedan finner du adress och kontaktuppgifter till LIMITLESS
            MALMÖ. Du kan även kontakta oss på
            <a
              href="https://www.facebook.com/LimitlessMalmo/"
              target="_blank"
              class="contact"
              >Facebook</a
            >
            och
            <a
              href="https://www.instagram.com/limitlessmalmo/?hl=sv"
              target="_blank"
              class="contact"
              >Instagram</a
            >
          </p>
        </div>
      </div>
      <!-- </div> -->
      <div itemscope itemtype="http://schema.org/Organization">
        <section class="row mb-5 card-frame justify-content-center">
          <div class="col-sm-6">
            <div class="card mt-4 mb-2">
              <div class="text-center">
                <span itemprop="name">
                  <h5 class="card-title">KFUM LIMITLESS</h5>
                </span>
                <!-- <h5 class="card-title">KFUM LIMITLESS</h5> -->
                <hr class="hr-style" />
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="fas fa-phone-square mr-2"></i>
                    <span itemprop="telephone">
                      <a href="tel: +46737616916" class="mail"
                        >+46 737 61 69 16</a
                      >
                    </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-envelope mr-2"></i>
                    <span itemprop="email">
                      <a class="mail" href="mailto: limitlessmalmo@hotmail.com"
                        >limitlessmalmo@hotmail.com</a
                      >
                    </span>
                  </li>
                </ul>
              </div>
              <div
                itemprop="address"
                itemscope
                itemtype="http://schema.org/PostalAddress"
              >
                <div class="card-body text-center">
                  <h5>Adress</h5>
                  <ul class="list-group text-center list-group-flush">
                    <li class="list-group-item">
                      <span itemprop="streetAddress">
                        <p>Betaniaplan vån 4</p>
                      </span>
                      <span itemprop="postalCode">
                        <p>211 55</p>
                        <span itemprop="addressLocality">
                          <p>Malmö</p>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card mt-4 mb-4">
              <div class="google-maps">
                <iframe
                  width="600"
                  height="450"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.1599206032897!2d13.00884861610492!3d55.599230380512616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a158dbb7fdcd%3A0xf27365eaffdc2802!2sBetaniaplan%204%2C%20211%2055%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1585486833722!5m2!1ssv!2sse"
                  id="gmap_canvas"
                  class="google"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FindUsComponent extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hitta-oss {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
  .card-text {
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  .card-frame {
    background-color: #f2f2f2;
    .card {
      background-color: #f2f2f2;
      border: none;
      .hr-style {
        background-color: var(--secondary);
        margin-top: 0;
      }

      .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #f2f2f2;
        border: none;

        .mail {
          font-size: 14px;
        }
      }
      .google-maps {
        position: relative;
        padding-bottom: 75%; // This is the aspect ratio
        height: 0;
        overflow: hidden;
        border: none;
      }
      .google-maps iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        border: none;
        .google {
          margin: 10px;
        }
      }
    }
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
}
</style>
