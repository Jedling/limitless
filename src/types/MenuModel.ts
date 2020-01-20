interface IMenuModel {
  Id: number;
  Name: string;
  LoggedInName: string;
  Path: string;
}

export class MenuModel implements IMenuModel {
  public Id: number;
  public Name: string;
  public LoggedInName: string;
  public Path: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    name: string = '',
    loggedInName: string = '',
    path: string = '',
  ) {
    this.Id = id;
    this.Name = name;
    this.LoggedInName = loggedInName;
    this.Path = path;
  }
}
