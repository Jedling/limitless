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
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="card mb-3">
            <div class="card-body text-center">
              <p class="card-text">
                Projekt LIV – Lugnt inre välmående vänder sig till dig som
                drabbats av stroke eller Parkinsons sjukdom. I projektet har nya
                målgruppsanpassade övningar utvecklats som kombinerar mindfulness,
                hikari, yoga, boxning och dans.
              </p>

              <p class="card-text">
                Övningarna syftar till att uppnå
                ett inre, stressbefriat lugn, att stimulera rörlighet och
                balanssinne samt att motverka hjärntrötthet.
                <br>
                  Våra LIV-pass heter Hikari & Mindfulness. Aktiviteterna är
                kostnadsfria för medlemmar i partnerföreningar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AboutUsComponent extends Vue {}
</script>
<style scoped lang="scss">
.about-us-comp {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
    :hover {
      color: var(--hover);
    }
  }
  .card {
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
  .card-text {
    font-size: 1.3rem;
  }
  .no-border {
    border: 0px !important;
  }
  .img-style {
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    // width: 200px;
    // height: 200px;
    // margin: 0 auto;
  }
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
}
</style>