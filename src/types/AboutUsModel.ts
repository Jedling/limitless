interface IAboutUsModel {
  Id: number;
  Pdf: string;
  Name: string;
}

export class AboutUsModel implements IAboutUsModel {
  public Id: number;
  public Pdf: string;
  public Name: string;
  /**
   *
   */
  constructor(
    id: number = 0,
    pdf: string = '',
    name: string = '',
  ) {
    this.Id = id;
    this.Pdf = pdf;
    this.Name = name;
  }
}
