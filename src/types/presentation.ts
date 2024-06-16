import { stringWithImage } from "./stringWithImage";

export abstract class Presentation {
  abstract toString(): string;
  abstract red(): Array<stringWithImage>;
  abstract orange(): Array<stringWithImage>;
  abstract yellow(): Array<stringWithImage>;
  abstract green(): Array<stringWithImage>;
  abstract black(): Array<stringWithImage>;
  abstract image(): string;
  static getInstance(): Presentation {
    throw new Error("Method not implemented.");
  }
  getClassName(): string {
    return this.toString();
  }
}
