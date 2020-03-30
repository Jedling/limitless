import { ScheduleModel } from "@/types/ScheduleModel";

const tempScheduleData: ScheduleModel[] = [
  {
    Id: 1,
    Weekday: "TISDAGAR",
    Activities: [
      {
        Id: 1,
        Name: "TALLRIKEN, PILDAMMSPARKEN",
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
        Name: "TALLRIKEN, PILDAMMSPARKEN",
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
        Name: "AMFITEATERN, PILDAMMSPARKEN",
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
        Name: "AMFITEATERN, PILDAMMSPARKEN",
        Time: "12:00 - 13:00"
      }
    ]
  }
];
const tempScheduleType: ScheduleModel[] = tempScheduleData;

export default tempScheduleType;