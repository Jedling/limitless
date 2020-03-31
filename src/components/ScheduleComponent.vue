<template>
  <div class="schedule-component">
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <OutdoorGuidelines />
      <div class="col-md-8 col-12 mb-4 mx-auto">
        <p class="intro-text">
          <strong>
            Prova gärna att lägga till sidan på din hemskärm så har du alltid
            snabb tillgång till schemat!
          </strong>
        </p>
      </div>
    </div>
    <!-- Probably add picture here
      <div class="row">
        <div class="col-12 mb-3">
          <figure>
            <img class="" src alt="" />
          </figure>
        </div>
      </div>
    -->
    <ScrollButton />
    <h4 class="mt-3 mb-4 sthlm-header">TILLFÄLLIGT SCHEMA</h4>
    <div class="row mb-5">
      <div class="col-12">
        <section class="timetable-wrap">
          <div class="timetable-container flex">
            <div class="days-wrap flex">
              <!-- <div v-for="day in schedule" :key="day.Id"> -->
              <div v-for="day in tempSchedule" :key="day.Id" class="day flex">
                <h4 class="weekday">{{ day.Weekday }}</h4>
                <div v-for="act in day.Activities" :key="act.Id">
                  <div class="class-container flex">
                    <span class="temp-time">{{ act.Time }}</span>
                    <span class="temp-name">
                      {{ act.Name }}
                      <br />
                      <span style="font-weight: 100;">{{ act.Location }}</span>
                    </span>

                    <!-- <p> {{ act.Location }} </p> -->
                  </div>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <h4 class="mt-3 mb-4 sthlm-header">ORDINARIE SCHEMA</h4>
    <div class="row mb-5">
      <div class="col-12">
        <section class="timetable-wrap">
          <div class="timetable-container flex">
            <div class="days-wrap flex">
              <!-- <div v-for="day in schedule" :key="day.Id"> -->
              <div v-for="day in schedule" :key="day.Id" class="day flex">
                <h4 class="weekday">{{ day.Weekday }}</h4>
                <div v-for="act in day.Activities" :key="act.Id">
                  <div class="class-container flex">
                    <span class="time">{{ act.Time }}</span>
                    <span class="name">{{ act.Name }}</span>
                  </div>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScrollButton from "@/components/ScrollButton.vue";
import { ScheduleModel } from "../types/ScheduleModel";
import scheduleData from "../assets/data/schedule";
import tempScheduleData from "../assets/data/TempSchedule";
import OutdoorGuidelines from "@/components/OutdoorGuidelines.vue";

@Component({
  components: {
    ScrollButton,
    OutdoorGuidelines
  }
})
export default class ScheduleComponent extends Vue {
  private schedule: ScheduleModel[] = scheduleData;
  private tempSchedule: ScheduleModel[] = tempScheduleData;
}
</script>
<style scoped lang="scss">
.schedule-component {
  .home-btn {
    font-size: 50px;
    color: var(--primary);
    padding: 0px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .temp-name,
  .temp-time {
    font-weight: bold;
  }
  .sthlm-header {
    text-align: center;
    background-color: var(--primary);
    color: white;
    margin: 0 auto;
    width: 50%;
    padding: 30px;
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    @media only screen and (max-width: 320px) {
      width: 100%;
      font-size: 20px;
    }
  }
  .name {
    font-weight: bolder;
  }
  p span {
    display: block;
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

  h4 {
    font-family: "Roboto", sans-serif;
    font-weight: inherit;
    line-height: 1.2;
    font-size: 1.414em;
  }

  .flex {
    display: flex;
  }

  .flex--space-between {
    justify-content: space-between;
  }

  .timetable-container {
    margin-top: 1em;
    flex-grow: 1;
    flex-direction: column;
    background-color: var(--menuText);
    &:first-child {
      margin-top: 0;
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
      padding: 1em 2px;
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
    }
  }

  @media only screen and (min-width: 768px) {
    .timetable-container {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
      border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
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
  @media only screen and (max-width: 568px) {
    .temp-name {
      flex: 2 0 0;
      font-size: 13px;
      padding-left: 12px;
      text-align: left;
    }
    .temp-time {
      padding-left: 5px;
      font-size: 13px;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 0px;
      flex: 1 0 0;
    }
  }
}
</style>
