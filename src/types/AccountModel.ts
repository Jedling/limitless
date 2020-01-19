interface IScheduleModel {
  Id: number;
  Name: string;
  LastName: string;
  Activated: string;
  Favorites: any[];
  TrainingDays: number;
  Img: string;
}

export class ScheduleModel implements IScheduleModel {
  public Id: number;
  public Name: string;
  public LastName: string;
  public Activated: string;
  public Favorites: any[];
  public TrainingDays: number;
  public Img: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    lastName: string = '',
    activated: string = '',
    favorites: any[],
    trainingDays: number = 0,
    img: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.LastName = lastName;
    this.Activated = activated;
    this.Favorites = favorites;
    this.TrainingDays = trainingDays;
    this.Img = img;
  }
}
