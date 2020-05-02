import { ScheduleModel } from "@/types/ScheduleModel";

const tempScheduleData: ScheduleModel[] = [
  // {
  //   Id: 1,
  //   Weekday: "MÅNDAG",
  //   Activities: [
  //     {
  //       Id: 1,
  //       Name: "BOXNING",
  //       Location: "TALLRIKEN, PILDAMMSPARKEN",
  //       Time: "17:30 - 18:30"
  //     }
  //   ]
  // },
  {
    Id: 2,
    Weekday: "TISDAG",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT FLOW YOGA",
        Location: "GRÄSMATTAN BREDVID KFUM-HUSET",
        Time: "12:00 - 12:45"
      },
      {
        Id: 2,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      }
    ]
  },
  {
    Id: 3,
    Weekday: "ONSDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "KICK/THAIBOXNING",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      }
    ]
  },
  {
    Id: 4,
    Weekday: "TORSDAG",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS ENERGY",
        Location: "GRÄSMATTAN BREDVID KFUM-HUSET",
        Time: "12:00 - 12:45"
      },
      {
        Id: 2,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      }
    ]
  },
  // {
  //   Id: 5,
  //   Weekday: "FREDAG",
  //   Activities: [
  //     {
  //       Id: 1,
  //       Name: "KICK/THAIBOXNING samt BOXNING",
  //       Location: "TALLRIKEN, PILDAMMSPARKEN",
  //       Time: "17:30 - 18:30"
  //     }
  //   ]
  // },
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
      // {
      //   Id: 1,
      //   Name: "HIKARI DO",
      //   Location: "PILDAMMSTEATERN",
      //   Time: "11:0 - 12:00"
      // },
      {
        Id: 2,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "PILDAMMSTEATERN",
        Time: "12:00 - 13:00"
      },
    ]
  }
];
const tempScheduleType: ScheduleModel[] = tempScheduleData;

export default tempScheduleType;