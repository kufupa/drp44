import { CategoryEnum } from "../utils/category.enum";
import { Presentation } from "./presentation";
import { stringWithImage } from "./stringWithImage";


export interface Question {
    // ROYGB
    category: CategoryEnum;
    // buttons to click
    symptoms: Array<stringWithImage>;
    // classification of symptoms
    presentation: Presentation;
}
