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

<script lang='ts'>
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
    "KFUM Limitless Malmö är en förening för alla där vi erbjuder allt ifrån funktionell träning till kampsportsträning. Nedanstående länkar beskriver utförligt och på ett läsvärt sätt material om föreningens ståndpunkter.";
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
  }

  // .hr-style {
  //   background-color: var(--secondary);
  // }

  // .name {
  //   color: var(--primary);
  // }
  // .content {
  //   @media only screen and (max-width: 568px) {
  //     font-size: 13px;
  //   }
  // }
  .text {
    width: 600px;
  }
  .stadgar {
    padding: 0;
    -webkit-transition: 0.2s;
    display: block;
    width: 100%;
    color: var(--primary);
    background-color: white;
    border: none;
    text-decoration: none;
    transition: 0.2s;
    // background-color: #f2f2f2;
    &:hover {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
