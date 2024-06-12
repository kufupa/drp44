import { Presentation } from "../presentation";

export class NoneOfTheAbove extends Presentation {

    static getInstance = () => {
        return new NoneOfTheAbove();
    }

    toString(): string {
        return "None of the Above";
    }
    red(): string[] {
        throw new Error("Method not implemented.");
    }
    orange(): string[] {
        throw new Error("Method not implemented.");
    }
    yellow(): string[] {
        throw new Error("Method not implemented.");
    }
    green(): string[] {
        throw new Error("Method not implemented.");
    }
    black(): string[] {
        throw new Error("Method not implemented.");
    }
    image(): string {
        throw new Error("Method not implemented.");
    }

}