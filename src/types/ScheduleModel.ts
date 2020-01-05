interface IScheduleModel {
  Id: number;
  Weekday: string;
  Time: number;
  Name: string;
  Trainer: string;
}

export class ScheduleModel implements IScheduleModel {
  public Id: number;
  public Weekday: string;
  public Time: number;
  public Name: string;
  public Trainer: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    weekday: string = '',
    time: number = 0,
    name: string = '',
    trainer: string = '',
  ) {
    this.Id = id;
    this.Weekday = weekday;
    this.Time = time;
    this.Name = name;
    this.Trainer = trainer;
  }
}
