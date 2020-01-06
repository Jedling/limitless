interface IActivitiesModel{
  Id: number;
  Description: string;
  Url: string;
  Name: string;
  Trainer: any[];
}

export class ActivitiesModel implements IActivitiesModel {
  public Id: number;
  public Description: string;
  public Url: string;
  public Name: string;
  public Trainer: any[];
  /**
   *
   */
  constructor(
    id: number = 0,
    description: string = '',
    url: string = '',
    name: string = '',
    trainer: any = [],
  ) {
    this.Id = id;
    this.Description = description;
    this.Url = url;
    this.Name = name;
    this.Trainer = trainer;
  }
}
