import { CategoryEnum } from "./category.enum";


export interface Question {
    // ROYGB
    category: CategoryEnum;
    // buttons to click
    symptoms: Array<string>;
    // classification of symptoms
    presentation: Presentation;
}
