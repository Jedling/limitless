import { ScheduleModel } from "@/types/ScheduleModel";

const tempScheduleData: ScheduleModel[] = [
  {
    Id: 1,
    Weekday: "TISDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      }
    ]
  },
  {
    Id: 2,
    Weekday: "TORSDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "TALLRIKEN, PILDAMMSPARKEN",
        Time: "17:30 - 18:30"
      }
    ]
  },
  {
    Id: 3,
    Weekday: "LÖRDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "PILDAMMSTEATERN",
        Time: "10:30 - 11:30"
      }
    ]
  },
  {
    Id: 4,
    Weekday: "SÖNDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "LIMITLESS HIIT IN THE PARK",
        Location: "PILDAMMSTEATERN",
        Time: "12:00 - 13:00"
      }
    ]
  }
];
const tempScheduleType: ScheduleModel[] = tempScheduleData;

export default tempScheduleType;