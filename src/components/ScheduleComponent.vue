<template>
  <div class="schedule-component">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
        <div class="col-md-8 col-12 mb-4 mx-auto">
          <!-- <p class="intro-text">
            <strong
              >Schemas delas upp i färgen för högre interaktionsvärde och för
              att öka förståelse och särskilja på dagar kan en ytterligare
              förklaring av färgerna läggas till.</strong
            >
          </p>
          <br />-->
          <!-- <p>
            Varmt välkommen att delta i sköna, avslappnande ro- och
            stillhetsövningar, medvetna rörelser till musik och olika
            balansövningar. Vi brukar vara 10–15 deltagare per grupp och vi
            anpassar övningarna för sittande, liggande och stående. Övningarna
            har under två år utvecklats, testats och valts ut av fler än 200
            deltagare med stroke eller Parkinson. Alla kan delta – var och en
            utifrån sin egen förmåga. Aktiviteterna är kostnadsfria för
            medlemmar i partnerföreningar. Schemat gäller grupperna i Malmö,
            Lund, Helsingborg, Ystad och i Lomma. Övrig information finner du på
            Facebook Projekt LIV.
          </p>-->
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-3">
          <figure>
            <img class="schedule-img" src alt="Människor sitter i en ring och utövar Mindfulness" />
          </figure>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <section class="timetable-wrap">
            <div class="timetable-container flex">
              <div class="days-wrap flex">
                <div class="day flex">
                  <!-- Veckodag -->
                  <h4 class="weekday">MÅNDAG</h4>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">06:30 - 07:15</span>
                    <span class="name">WAKE UP LIMITLESS</span>
                    <!-- <span class="level">
                      Malmö, Hylliekrokens Golfcenter alt. FIFH (vid
                      Mobilia)
                    </span>-->
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">17:00 - 18:15</span>
                    <span class="name">KICK/THAIBOXNING</span>
                    <!-- <span class="level">Malmö, Kalendeg. 18, vån 3</span> -->
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">18:15 - 19:30</span>
                    <span class="name">BOXNING</span>
                    <!-- <span class="level">Malmö, Kalendeg. 18, vån 3</span> -->
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">18:45 - 20:00</span>
                    <span class="name">BRASILIANSK JIU JITSU (VÅN 2)</span>
                    <!-- <span class="level">Malmö, Kalendeg. 18, vån 3</span> -->
                  </div>
                </div>
                <!-- Veckodag -->
                <div class="day flex">
                  <h4 class="weekday">TISDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">12:00 - 12:45</span>
                    <span class="name">LIMITLESS HIIT FLOW YOGA</span>
                    <!-- <span class="level">Malmö, KFUM Betaniaplan 4</span> -->
                  </div>
                  <div class="class-container flex color color--scheme4">
                    <span class="time">18:00 - 19:15</span>
                    <span class="name">FITNESS MMA</span>
                    <!-- <span class="level">Ystad, Seniorernas hus, Petrigatan 10</span> -->
                  </div>
                  <div class="class-container flex color color--scheme5">
                    <span class="time">19:15 - 20:30</span>
                    <span class="name">BOXNING</span>
                    <!-- <span class="level">Malmö, BK Fox Lundavägen 56</span> -->
                  </div>
                </div>
                <!-- Veckodag -->
                <div class="day flex">
                  <h4 class="weekday">ONSDAG</h4>
                  <div class="class-container flex color color--scheme6">
                    <span class="time">06:30 - 07:15</span>
                    <span class="name">WAKE UP LIMITLESS</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">17:00 - 18:00</span>
                    <span class="name">HIKARI DO</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">18:00 - 19:15</span>
                    <span class="name">KICK/THAIBOXNING</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">19:15 - 20:30</span>
                    <span class="name">LIMITLESS HIIT</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">19:15 - 20:30</span>
                    <span class="name">BRASILIANSK JIU JITSU (VÅN 2)</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                </div>
                <!-- Veckodag -->
                <div class="day flex">
                  <h4 class="weekday">TORSDAG</h4>
                  <div class="class-container flex color color--scheme7">
                    <span class="time">12:00 - 12:45</span>
                    <span class="name">LIMITLESS ENERGY</span>
                    <!-- <span class="level">Helsingborg, Kurirgatan 1</span> -->
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">19:30 - 20:45</span>
                    <span class="name">BOXNING</span>
                    <!-- <span class="level">Malmö, Kalendegatan 18, vån 3</span> -->
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">19:30 - 20:45</span>
                    <span class="name">BRASILIANSK JIU JITSU (VÅN 2)</span>
                    <!-- <span class="level">Lomma, Havsblick Centrumgatan 4</span> -->
                  </div>
                </div>
                <!-- Veckodag -->
                <div class="day flex">
                  <h4 class="weekday">FREDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">17:00 - 18:15</span>
                    <span class="name">FITNESS MMA</span>
                    <!-- <span class="level">Malmö, KFUM Betaniaplan 4</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">18:15 - 19:30</span>
                    <span class="name">BOXNING</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">LÖRDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">10:00 - 11:15</span>
                    <span class="name">KICK/THAIBOXNING</span>
                    <!-- <span class="level">Malmö, KFUM Betaniaplan 4</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">11:15 - 13:00</span>
                    <span class="name">OPEN MAT</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">SÖNDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">11:00 - 12:00</span>
                    <span class="name">HIKARI DO</span>
                    <!-- <span class="level">Malmö, KFUM Betaniaplan 4</span> -->
                  </div>
                   <div class="class-container flex color color--scheme6">
                    <span class="time">12:15 - 13:30</span>
                    <span class="name">FITNESS MMA + FYS</span>
                    <!-- <span class="level">Lund, Annegården Skansv. 5</span> -->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ScheduleComponent extends Vue {}
</script>
<style scoped lang="scss">
.studiecirkel {
  font-size: 3em;
  color: white;
  background-color: rgb(132, 76, 147);
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 568px) {
    font-size: 2em;
  }
}
.home-btn {
  font-size: 50px;
  color: var(--primary);
  padding: 0px;
}
.home-btn:hover {
  color: var(--hover);
}
.schedule-img {
  width: 100%;
  height: 400px;
  padding: 15px;
  object-fit: cover;
  background-color: white;
  box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  @media only screen and (max-width: 568px) {
    height: auto;
    padding: 5px;
  }
}
$container-background-color: white;
$cel-background-color: lighten(rgb(230, 230, 230), 10%);
$dark--color: rgba(0, 0, 0, 0.87);
$light--color: var(--primary);
// html {
//   box-sizing: border-box;
// }

// html,
// body {
//   min-height: 100vh;
// }

// body {
//   background: white;
//   line-height: 1.414;
//   font-family: "Open Sans", sans-serif;
//   font-size: 16px;
//   color: black;
//   text-rendering: optimizelegibility;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//   -webkit-text-size-adjust: none;
//   -webkit-font-smoothing: antialiased;
//   -moz-tap-highlight-color: rgba(0, 0, 0, 0);
//   -moz-text-size-adjust: none;
//   -moz-font-smoothing: antialiased;
//   -ms-tap-highlight-color: rgba(0, 0, 0, 0);
//   -ms-text-size-adjust: none;
//   -ms-font-smoothing: antialiased;
// }

// h1,
// h2,
h3,
h4 {
  font-family: "Roboto", sans-serif;
  font-weight: inherit;
  line-height: 1.2;
}

// h1 {
//   font-size: 3.998em;
// }

// h2 {
//   font-size: 2.827em;
// }

h3 {
  font-size: 1.999em;
}

h4 {
  font-size: 1.414em;
}

.flex {
  display: flex;
}

.flex--space-between {
  justify-content: space-between;
}

// .timetable-wrap {
//   // width: 100vw;
// }

.timetable-container {
  margin-top: 1em;
  flex-grow: 1;
  flex-direction: column;
  background-color: $container-background-color;
  &:first-child {
    margin-top: 0;
  }
  h3 {
    width: 100%;
  }
}

.day {
  flex-direction: column;
  h4 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    background-color: var(--primary);
    color: var(--menuText);
  }
}

.class-container {
  background-color: #f2f2f2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  .time {
    font-weight: bold;
  }
  .name {
    font-weight: bold;
  }
}

@media only screen and (max-width: 1024px) {
  .timetable-container {
    h3 {
      padding-left: 10px;
    }
    h3.is_stuck {
      background-color: white;
    }
  }
  .days-wrap {
    flex-direction: column;
  }
  .day {
    margin-top: 0.5em;
    h4 {
      padding-left: 10px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  .class-container {
    flex-direction: row;
    padding: 1em 0;
    .time {
      padding-left: 5px;
      font-size: 13px;
      flex: 1 0 0;
    }
    .name {
      flex: 2 0 0;
      font-size: 13px;
      padding-left: 12px;
      text-align: left;
      @media only screen and (min-width: 768px) {
        text-align: center;
      }
    }
    // .level {
    //   // display: none;
    //   font-size: 12px;
    //   padding-right: 5px;
    //   flex: 0 0 0;
    // }
  }
}

// @media only screen and (min-width: 568px) and (max-width: 767px) {
//   .class-container {
//     .time {
//       flex: 1 0 0;
//     }
//     .name {
//       flex: 2 0 0;
//     }
//     .level {
//       display: flex;
//       flex: 2 0 0;
//     }
//   }
// }

@media only screen and (min-width: 768px) {
  // .timetable-wrap {
  //   padding: 10px;
  // }
  .timetable-container {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    h3 {
      padding-left: 10px;
    }
  }
  .days-wrap {
    border-top: 1px solid rgba(243, 27, 27, 0.12);
    flex-grow: 1;
    justify-content: space-between;
  }
  .day {
    width: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    &:last-child {
      border-right: none;
    }
    h4 {
      text-align: center;
    }
  }
  .class-container {
    flex-direction: column;
    padding-bottom: 1em;
    .time {
      text-align: center;
      padding: 5px 0;
    }
    .name {
      padding: 0 10px;
      font-weight: 300;
    }
    .level {
      padding: 0 10px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>