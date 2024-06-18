import { stringWithImage } from "../../types/stringWithImage";
import { Presentation } from "../../types/presentation";

export class NoneOfTheAbove extends Presentation {

    static getInstance = () => {
        return new NoneOfTheAbove();
    }

    toString(): string {
        return "None of the Above";
    }
    red(): stringWithImage[] {
        throw new Error("Method not implemented.");
    }
    orange(): stringWithImage[] {
        throw new Error("Method not implemented.");
    }
    yellow(): stringWithImage[] {
        throw new Error("Method not implemented.");
    }
    green(): stringWithImage[] {
        throw new Error("Method not implemented.");
    }
    black(): stringWithImage[] {
        throw new Error("Method not implemented.");
    }
    image(): string {
        throw new Error("Method not implemented.");
    }

}