export abstract class Presentation {
  abstract toString(): string;
  abstract red(): Array<string>;
  abstract orange(): Array<string>;
  abstract yellow(): Array<string>;
  abstract green(): Array<string>;
  abstract black(): Array<string>;
  abstract image(): string;
  static getInstance(): Presentation {
    throw new Error("Method not implemented.");
  }
  getClassName(): string {
    return this.toString();
  }
}
