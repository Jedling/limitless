<template>
  <div class="container">
    <div v-for="info in accountData" :key="info.Id">
      <div class="card-wrapper">
        <div class="date">
          <span class="day">{{ date }}</span>
          <!-- <span class="month">{{ month }}</span> -->
        </div>
        <div class="card-image">
          <figure>
            <img :src="info.Img" alt style="width: 200px; margin-top: 40px;" />
          </figure>
        </div>
        <div class="card-info">{{ welcome }}</div>
        <div class="card-name">{{ info.Name }} {{ info.LastName }}</div>
        <div
          class="card-description"
        >Hej {{ info.Name }} du har varit och besökt oss {{ info.TrainingDays }} gånger och ditt favoritpass just nu är </div>
        <div class="card-stats clearfix">
          <div class="one-third">
            <div class="stat-value">Antal pass i år</div>
            <div class="stat">
              {{ info.TrainingDays }}st
              <!-- <sup>S</sup> -->
            </div>
          </div>
          <div v-for="favorite in info.Favorites" :key="favorite.Id">
            <div class="one-third">
              <div class="stat-value">Ditt favoritpass</div>
              <div class="stat">{{ favorite.Name }}</div>
            </div>
          </div>
          <div class="one-third no-border">
            <div class="stat-value">Förnya kortet om</div>
            <div class="stat">150 dagar</div>
          </div>
        </div>
      </div>
      <button @click="logout" class="btn mt-4 mb-4 logout-btn">Logga ut</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AccountModel } from "@/types/AccountModel";
import accountTypeData from "../assets/data/AccountEntity";
import axios from "axios";

@Component({})
export default class MyAccount extends Vue {
  private accountData: AccountModel[] = accountTypeData;
  private date: string = "";
  private month: number = 0;
  private welcome: string = "Välkommen!";

  private getDate() {
    let date = new Date().toLocaleString("sv-SE", {
      day: "numeric",
      month: "short"
    });
    this.date = date.substring(0, date.length - 1);
  }
  mounted() {
    this.getDate();
  }

  private async logout(e: any) {
    e.preventDefault();
    const response = await axios({
      method: "delete",
      url: "/api/login"
    });
    await this.$store.dispatch("checkIfLoggedIn");
    // console.log(
    //   "you just logged out, state says: ",
    //   this.$store.state.loggedIn
    // );
    // Go top of page when logging out
    window.scrollTo(0, 0);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logout-btn {
  width: 100%;
  outline: none;
  border: 1px solid var(--secondary);
  color: var(--menuText);
  background-color: var(--primary);
  max-width: 580px;
}
.date {
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--menuText);
  border: 1px solid var(--secondary);
  font-size: 18px;
  font-weight: 700;
  min-height: 48px;
  min-width: 48px;
  padding: 10px 4px;
  position: absolute;
  right: 5px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 5px;
  z-index: 9999;
}

.card-wrapper {
  background: white;
  max-width: 600px;
  display: inline-block;
  margin: auto;
  // border-radius: $border-radius-size + 5;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
}

.card-image {
  position: relative;
  height: 230px;
  margin-bottom: 35px;
  // border-top-left-radius: $border-radius-size;
  // border-top-right-radius: $border-radius-size;
  background: linear-gradient(
      to top,
      var(--primary, 1) 0%,
      rgb(121, 114, 112) 65%,
      rgb(182, 180, 179) 100%
    )
    fixed;
}

// .clash-card__image {
// }

.card-info {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 3px;
  color: var(--primary);
}

.card-name {
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
}

.card-description {
  padding: 20px;
  margin-bottom: 10px;
}

.card-stats {
  background: var(--primary);
  color: white;
  font-weight: 700;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  .one-third {
    border-right: 1px solid var(--menuText);
    font-size: 7px;
    width: 33%;
    float: left;
    padding: 20px 15px;
  }

  // sup {
  //   position: absolute;
  //   bottom: 4px;
  //   font-size: 45%;
  //   margin-left: 2px;
  // }

  .stat {
    position: relative;
    font-size: 11px;
    margin-bottom: 10px;
  }

  .stat-value {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 9px;
    margin-bottom: 10px;
  }

  .no-border {
    border-right: none;
  }
}
</style>
