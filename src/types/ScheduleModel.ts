interface IScheduleModel {
  Id: number;
  Weekday: string;
  Activities: any[];
}

export class ScheduleModel implements IScheduleModel {
  public Id: number;
  public Weekday: string;
  public Activities: any[];
  /**
   *
   */
  constructor(id: number = 0, weekday: string = "", activities: any = []) {
    this.Id = id;
    this.Weekday = weekday;
    this.Activities = activities;
  }
}
