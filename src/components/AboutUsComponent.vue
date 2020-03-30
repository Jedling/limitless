<template>
  <section class="about-us-comp">
    <div class="row mt-4">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
    </div>
    <figure>
      <img class="img-style" src="/img/aboutUs/regler.jpg" alt />
    </figure>
    <div class="container">
      <div class="row justify-content-center">
        <p class="text">{{ intro }}</p>
      </div>
      <section class="row">
        <div v-for="item in aboutUs" :key="item.Id" class="col-4 mt-2 mb-5">
          <a :href="item.Pdf" class="stadgar" target="_blank">
            {{ item.Name }}
            <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AboutUsModel } from "../types/AboutUsModel";
import aboutUsData from "../assets/data/AboutUsEntity";

@Component({
  components: {}
})
export default class AboutUsComponent extends Vue {
  private aboutUs: AboutUsModel[] = aboutUsData;
  private img: string = "/img/aboutUs/regler.jpg";
  private intro: string =
    "KFUM Limitless Malmö är en förening för alla där vi erbjuder allt ifrån funktionell träning till kampsportsträning. I nedanstående länkar kan ni läsa om vad vi står för och hur vi arbetar.";
}
</script>
<style scoped lang="scss">
.about-us-comp {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .img-style {
    width: 100%;
    height: 40vh;
    opacity: 0.65;
    -o-object-fit: cover;
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
    -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
    @media only screen and (min-width: 1024px) {
      height: 50vh;
    }
    @media only screen and (min-width: 1440px) {
      height: 35vh;
    }
  }
  .text {
    width: 600px;
    font-size: 20px;
    @media only screen and (min-width: 768px) {
      font-size: 15px;
    }
        @media only screen and (min-width: 1440px) {
      font-size: 20px;
      width: 800px;
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
}
</style>
