<template>
  <div class="main mb-3">
    <div class="container-fluid">
      <div class="row justify-content-center mx-auto" style="max-width: 900px;">
        <div
          v-for="menu in MenuContent"
          :key="menu.Id"
          class="col-4 p-0 col-md-4 mt-2"
        >
          <nav class="navigation">
            <router-link class="glyphicon glyphicon-list" :to="menu.Path">
              <!-- <button
                type="button"
                class="btn background btn-circle btn-xl"
              >{{ loggedIn ? menu.LoggedInName : menu.Name }}</button>
            </router-link> -->
              <button type="button" class="btn background btn-circle btn-xl">
                {{ menu.Name }}
              </button>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MenuModel } from "../types/MenuModel";
import menuData from "../assets/data/MenuEntity";

@Component({})
export default class Menu extends Vue {
  private MenuContent: MenuModel[] = menuData;
  private loggOut: string = "Logga ut";
  private logged: string = "";

  // async beforeMount() {
  //   await this.$store.dispatch("checkIfLoggedIn");
  // }
  // get loggedIn() {
  //   return this.$store.state.loggedIn;
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  background-color: white;
  .navigation {
    width: 100%;
    a {
      color: var(--menuText);
    }
    .background {
      background-color: var(--primary);
      // background: radial-gradient(at top left, #55585f, #55585f, grey);
    }

    .btn-circle:hover {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
    .btn-circle {
      // width: 30px;
      // height: 30px;
      text-align: center;
      padding: 6px 0;
      // font-size: 0.6em;
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
        font-size: 0.5em;
        padding: 0px;
        margin: 5px;
      }
      @media only screen and (max-width: 320px) {
        // width: 70px;
        // height: 70px;
        font-size: 0.5em;
        padding: 10px !important;
        margin: 5px;
        // word-break: break-word;
      }
      padding: 10px 16px;
      margin: 10px;
      font-size: 1.2rem;
      line-height: 1.33;
      border-radius: 100%;
    }
    //   .fade-enter-active, .fade-leave-active {
    //   transition: opacity .5s;
    // }
    // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    //   opacity: 0;
    // }
  }
}
</style>
