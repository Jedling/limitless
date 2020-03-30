import { ScheduleModel } from "@/types/ScheduleModel";

const scheduleData: ScheduleModel[] = [
  // Detta är det riktiga schemat, ska upp när Corona är chill
  {
    Id: 1,
    Weekday: "MÅNDAG",
    Activities: [
      {
        Id: 1,
        Name: "WAKE UP LIMITLESS",
        Time: "06:30 - 07:15"
      },
      {
        Id: 2,
        Name: "KICK/THAIBOXNING",
        Time: "17:00 - 18:15"
      },
      {
        Id: 3,
        Name: "BOXNING",
        Time: "18:15 - 19:30"
      },
      {
        Id: 4,
        Name: "BRASILIANSK JIU JITSU / SUBMISSION WRESTLING (VÅN 2)",
        Time: "18:45 - 20:00"
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
        Time: "12:00 - 12:45"
      },
      {
        Id: 2,
        Name: "FITNESS MMA",
        Time: "18:00 - 19:15"
      },
      {
        Id: 3,
        Name: "BOXNING",
        Time: "19:15 - 20:30"
      }
    ]
  },
  {
    Id: 3,
    Weekday: "ONSDAG",
    Activities: [
      {
        Id: 1,
        Name: "WAKE UP LIMITLESS",
        Time: "06:30 - 07:15"
      },
      {
        Id: 2,
        Name: "HIKARI DO",
        Time: "17:00 - 18:00"
      },
      {
        Id: 3,
        Name: "KICK/THAIBOXNING",
        Time: "18:00 - 19:15"
      },
      {
        Id: 4,
        Name: "LIMITLESS HIIT (VÅN 1)",
        Time: "19:15 - 20:00"
      },
      {
        Id: 5,
        Name: "BRASILIANSK JIU JITSU / SUBMISSION WRESTLING (VÅN 2)",
        Time: "19:15 - 20:30"
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
        Time: "12:00 - 12:45"
      },
      {
        Id: 2,
        Name: "LIMITLESS HIIT FLOW YOGA (VÅN 2)",
        Time: "18:00 - 19:15"
      },
      {
        Id: 3,
        Name: "BOXNING",
        Time: "19:00 - 20:15"
      },
      {
        Id: 4,
        Name: "BRASILIANSK JIU JITSU / SUBMISSION WRESTLING (VÅN 2)",
        Time: "19:30 - 20:45"
      }
    ]
  },
  {
    Id: 5,
    Weekday: "FREDAG",
    Activities: [
      {
        Id: 1,
        Name: "FITNESS MMA",
        Time: "17:00 - 18:15"
      },
      {
        Id: 2,
        Name: "BOXNING",
        Time: "18:15 - 19:30"
      }
    ]
  },
  {
    Id: 6,
    Weekday: "LÖRDAG",
    Activities: [
      {
        Id: 1,
        Name: "KICK/THAIBOXNING",
        Time: "10:00 - 11:15"
      },
      {
        Id: 2,
        Name: "OPEN MAT",
        Time: "11:15 - 13:00"
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
        Time: "11:00 - 12:00"
      },
      {
        Id: 2,
        Name: "FITNESS MMA + FYS",
        Time: "12:15 - 13:30"
      }
    ]
  }
];
const scheduleType: ScheduleModel[] = scheduleData;

export default scheduleType;
