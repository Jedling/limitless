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
      <section class="row justify-content-center">
        <div v-for="item in aboutUs" :key="item.Id">
          <div class="col-12 col-lg-6 card-block">
            <h5 class="card-title mt-4"></h5>

            <!-- <p @click="showModalContent(item.Id)" class="rules">
              {{ item.Name }}
            </p> -->
            <a :href="item.Pdf" target="_blank"> {{ item.Name }} </a>
             <!-- <iframe class="pdf-style" :src="item.Pdf"></iframe> -->
          </div>
        </div>
      </section>
    </div>

    <!-- </div> -->
    <!-- <transition name="fade">
      <div v-show="modal" class="modal-filter">
        <div class tabindex="-1" role="dialog">
          <div class="modal-dialog modal-full" ref="modal" role="document">
            <div class="content">
              <div class="modal-header">
                <button
                  @click="closeModal()"
                  type="button"
                  class="close-btn"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body mx-auto text-center">
                <div v-for="item in this.modalContent" :key="item.Id">
                  <a :href="item.Pdf" target="_blank"></a>
                  <iframe class="pdf-style" :src="item.Pdf"></iframe>
                  <iframe src="https://drive.google.com/file/d/14qXHnIDPQiqFtJ3Eq9aPaNX3HAw5GrFg/preview" width="640" height="480"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition> -->
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
  private modal: boolean = false;
  private modalContent: any = [];

  private async showModalContent(Id: number) {
    // window.open(url, "_blank");
    this.modal = true;
    let temp = this.aboutUs;
    this.modalContent = temp.find(img => {
      return img.Id === Id;
    });
    console.log(this.modalContent);

    document.documentElement.style.overflow = "hidden";
  }
  private closeModal() {
    document.documentElement.style.overflow = "scroll";
    this.modal = false;
  }
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

  .card-block {
    padding: 0px 13px;
    -webkit-transition: 0.2s;
    margin: 13px;
    max-width: 520px;
    transition: 0.2s;
    background-color: #f2f2f2;
    @media only screen and (max-width: 568px) {
    }
    .hr-style {
      background-color: var(--secondary);
    }

    .name {
      color: var(--primary);
    }
    .content {
      @media only screen and (max-width: 568px) {
        font-size: 13px;
      }
    }
  }

  .card-block:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
}
.modal-full {
  min-width: 100%;
  margin: 0;
  background-color: none;
}

.content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;

  .modal-header {
    display: inline-block;
    border: none;
    .close-btn {
      float: right;
      outline-style: none;
      background-color: transparent;
      border: 0;
      -webkit-appearance: none;
      float: right;
      font-size: 1.7rem;
      line-height: 1;
      color: #fff;
      opacity: 0.5;
    }
  }
  .modal-body {
    position: relative;
    max-width: 900px;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    .pdf-style {
      height: calc(100vh - 140px);
      width: 100%;
      @media only screen and (min-width: 768px) {
        width: 800px;
      }
    }
  }
}

.modal-filter {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
