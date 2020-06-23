import { ScheduleModel } from "@/types/ScheduleModel";

const tempScheduleData: ScheduleModel[] = [
  {
    Id: 1,
    Weekday: "MÅNDAG",
    Activities: [
      {
        Id: 1,
        Name: "KICK/THAIBOXNING",
        Location: "PILDAMMSTEATERN",
        Time: "17:30 - 18:30"
      },
      {
        Id: 3,
        Name: "BOXNING",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "18:30 - 19:30"
      },
      {
        Id: 2,
        Name: "BRASILIANSK JIU-JITSU/SUBMISSION WRESTLING",
        Location: "KFUM-HUSET, VÅN 1",
        Time: "18:00 - 19:00"
      }
    ]
  },
  {
    Id: 2,
    Weekday: "TISDAG",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT FLOW YOGA",
        Location: "GRÄSMATTAN INTILL KFUM-HUSET",
        Time: "12:00 - 13:00"
      },
      {
        Id: 2,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      },
      {
        Id: 3,
        Name: "BOXNING",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "18:30 - 19:30"
      }
    ]
  },
  {
    Id: 3,
    Weekday: "ONSDAG",
    Activities: [
      // {
      //   Id: 1,
      //   Name: "HIKARI DO",
      //   Location: "TALLRIKEN, PILDAMMSPARKEN",
      //   Time: "17.00-18.00,"
      // },
      {
        Id: 2,
        Name: "KICK/THAIBOXNING",
        Location: "PILDAMMSTEATERN",
        Time: "18:00 - 19:00"
      },
      {
        Id: 3,
        Name: "BRASILIANSK JIU-JITSU/SUBMISSION WRESTLING",
        Location: "KFUM-HUSET, VÅN 1",
        Time: "18.00-19.00,"
      }
    ]
  },
  {
    Id: 4,
    Weekday: "TORSDAG",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS ENERGY (JÄMNA VECKOR)",
        Location: "GRÄSMATTAN BREDVID KFUM-HUSET",
        Time: "12:00 - 13:00"
      },
      {
        Id: 2,
        Name: "MAD FIT INFERNO (OJÄMNA VECKOR)",
        Location: "GRÄSMATTAN BREDVID KFUM-HUSET",
        Time: "12:00 - 13:00"
      },
      {
        Id: 3,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      },
      {
        Id: 4,
        Name: "BOXNING",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "18:30 - 19:30"
      }
    ]
  },
  {
    Id: 5,
    Weekday: "FREDAG",
    Activities: [
      // {
      //   Id: 1,
      //   Name: "KICK/THAIBOXNING samt BOXNING",
      //   Location: "TALLRIKEN, PILDAMMSPARKEN",
      //   Time: "17:30 - 18:30"
      // }
    ]
  },
  {
    Id: 6,
    Weekday: "LÖRDAG",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "PILDAMMSTEATERN",
        Time: "10:30 - 11:30"
      },
      {
        Id: 2,
        Name: "URBAN HIIT FLOW YOGA",
        Location: "PILDAMMSTEATERN",
        Time: "11.30-12.30"
      }
    ]
  },
  {
    Id: 7,
    Weekday: "SÖNDAG",
    Activities: [
      {
        Id: 1,
        Name: "HIKARI DO",
        Location: "PILDAMMSTEATERN",
        Time: "11:00 - 12:00"
      },
      {
        Id: 2,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "PILDAMMSTEATERN",
        Time: "12:00 - 13:00"
      }
    ]
  }
];
const tempScheduleType: ScheduleModel[] = tempScheduleData;

export default tempScheduleType;
