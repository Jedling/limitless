<template>
  <footer class="footer container-fluid">
    <div class="row">
      <div class="col-12">
        <figure class="figure">
          <img
            src="/img/footer/beyoufooter.png"
            class="slogan"
            alt="Människor sittandes i cirkelformation i en föreläsningssal"
          />
        </figure>
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-12">
        <div class="row justify-content-center text-center mb-4">
          <div class="social-media">
            <a href="https://www.facebook.com/LimitlessMalmo/" target="_blank">
              <i class="fab icon fa-facebook-square"></i>
            </a>
          </div>
          <div class="social-media">
            <a href="https://www.instagram.com/limitlessmalmo/?hl=sv" target="_blank">
              <i class="fab icon fa-instagram"></i>
            </a>
          </div>
          <div class="social-media">
            <a href="" target="_blank">
              <i class="fab icon fa-youtube"></i>
            </a>
          </div>
        </div>
        <p class="text-center footer-contact">
          © COPYRIGHT 2019 KFUM LIMITLESS - Hosted by
          <span style="text-decoration:none;color:#fff;"
          >NeJo
        </span>
        <p class="text-center footer-gdpr" style="color:#fff;margin-top:.8em;">
          Betaniaplan 4, 211 55 Malmö
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  // background-image: url("../assets/header/background-img.png");
  background-color: var(--primary);
  background-size: cover;
  // box-shadow: 1px 3px 4px 10px rgba(0, 0, 0, 0.7);
  .footer-contact {
    color: rgb(58, 52, 52);
    margin-top: 0.8em;
  }
  .slogan {
    margin-bottom: .5rem;
    line-height: 1;
    width: 34%;
    margin-top: 14px;
  }
  .footer-gdpr {
    text-decoration: none;
    color: var(--menuText);
  }
  .fa-facebook-square,
  .fa-instagram,
  .fa-youtube {
    color: white;
    font-size: 20px;
    padding: 10px;
    @media (max-width: 320px) {
      font-size: 20px;
    }
    &:hover {
      color: var(--secondary);
    }
  }
}
</style>
