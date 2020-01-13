interface IScheduleModel {
  Id: number;
  Name: string;
  LastName: string;
  Age: number;
  Date: string;
}

export class ScheduleModel implements IScheduleModel {
  public Id: number;
  public Name: string;
  public LastName: string;
  public Age: number;
  public Date: string;

  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    lastName: string = '',
    age: number = 0,
    date: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.LastName = lastName;
    this.Age = age;
    this.Date = date;
  }
}
