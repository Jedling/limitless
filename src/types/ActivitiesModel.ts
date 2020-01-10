interface IActivitiesModel{
  Id: number;
  Description: string;
  Url: string;
  Name: string;
  Trainers: any[];
}

export class ActivitiesModel implements IActivitiesModel {
  public Id: number;
  public Description: string;
  public Url: string;
  public Name: string;
  public Trainers: any[];
  /**
   *
   */
  constructor(
    id: number = 0,
    description: string = '',
    url: string = '',
    name: string = '',
    Trainers: any = [],
  ) {
    this.Id = id;
    this.Description = description;
    this.Url = url;
    this.Name = name;
    this.Trainers = Trainers;
  }
}
