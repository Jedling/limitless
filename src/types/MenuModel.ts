interface IMenuModel {
  Id: number;
  Name: string;
  Path: string;
}

export class MenuModel implements IMenuModel {
  public Id: number;
  public Name: string;
  public Path: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    path: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.Path = path;
  }
}
