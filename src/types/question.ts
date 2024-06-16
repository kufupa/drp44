import { CategoryEnum } from "../utils/category.enum";
import { Presentation } from "./presentation";


export interface Question {
    // ROYGB
    category: CategoryEnum;
    // buttons to click
    symptoms: Array<string>;
    // classification of symptoms
    presentation: Presentation;
}
