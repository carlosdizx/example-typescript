export class Pixel {
  private readonly _red: number;
  private readonly _green: number;
  private readonly _blue: number;

  constructor(red: number, green: number, blue: number) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  get red(): number {
    return this._red;
  }

  get green(): number {
    return this._green;
  }

  get blue(): number {
    return this._blue;
  }
}
