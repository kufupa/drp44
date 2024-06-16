import { List } from "postcss/lib/list"
import { Question } from "../types/question"
import { CategoryEnum } from "./category.enum";
import { Presentation } from "../types/presentation";
import { AbdominalPainAdultsHandler } from "./flowcharts/abdominal_pain_in_adults";
import { getPresentation } from "./gemini";
import { BackPainHandler } from "./flowcharts/back_pain";
import { ChestPainHandler } from "./flowcharts/chest_pain";
import { NoneOfTheAbove } from "./flowcharts/none_of_the_above";
import { stringWithImage } from "../types/stringWithImage";

// mapping between string and Presentation 
const patientProblemMap: { [key: string]: Presentation } = {
    "Abdominal Pain in Adults": AbdominalPainAdultsHandler.getInstance(),
    "Abdominal Pain in Children": AbdominalPainAdultsHandler.getInstance(),
    "Chest Pain": ChestPainHandler.getInstance(),
    "Back Pain": BackPainHandler.getInstance(),
    "None of the Above": NoneOfTheAbove.getInstance()
    // Add more mappings as needed...
};

export function getFromMap(str: string): Presentation {
    console.log("GEMINI STRING INPUT IS:" + str);
    return patientProblemMap[str];
}

export const selectFlowchart = async (symptom: string, age: string, sex: string): Promise<Presentation> => {
    try {
        const geminiPresentation = await getPresentation(symptom, age, sex);
        console.log(geminiPresentation);
        if (geminiPresentation === "None of the Above") {
            throw new Error("None of the Above");
        }
        const presentation: Presentation = getFromMap(geminiPresentation.trim());

        if (!presentation) {
            throw new Error(`No presentation found for category: ${geminiPresentation.trim()}`);
        }

        return presentation;
    } catch (error) {
        console.error('Error in selectFlowchart:', error);
        throw new Error(`Failed to get presentation for symptom: ${symptom}`);
    }
};

export function nextQuestion(presentation: Presentation, category: CategoryEnum): Question {
    var nextCategory: CategoryEnum;
    var symptoms: Array<stringWithImage>;

    // next question will have the next lowest category 
    // and symptoms are given by calling the relevant function to access them
    if (category === CategoryEnum.RED) {
        nextCategory = CategoryEnum.ORANGE;
        symptoms = presentation.orange().map(symptom => ({
            text: symptom.text,
            image: symptom.image || '', // Ensure image property is provided or set a default value
        }));
    } else if (category === CategoryEnum.ORANGE) {
        nextCategory = CategoryEnum.YELLOW;
        symptoms = presentation.yellow().map(symptom => ({
            text: symptom.text,
            image: symptom.image || '', // Ensure image property is provided or set a default value
        }));
    } else if (category === CategoryEnum.YELLOW) {
        nextCategory = CategoryEnum.GREEN;
        symptoms = presentation.green().map(symptom => ({
            text: symptom.text,
            image: symptom.image || '', // Ensure image property is provided or set a default value
        }));
    } else if (category === CategoryEnum.GREEN) {
        nextCategory = CategoryEnum.BLACK;
        symptoms = presentation.black().map(symptom => ({
            text: symptom.text,
            image: symptom.image || '', // Ensure image property is provided or set a default value
        }));
    } else if (CategoryEnum.BLACK) {
        // if currrent category is black, then there are no lower categories
        nextCategory = CategoryEnum.BLACK;
        symptoms = [];
    } else {
        nextCategory = CategoryEnum.BLACK;
        symptoms = [];
    }

    const answer: Question = {
        category: nextCategory,
        symptoms,
        presentation,
    }

    return answer;
}

export const firstButton = (presentation: Presentation) => {
    const first: Question = {
        category: CategoryEnum.RED,
        symptoms: presentation.red().map(symptom => ({
            text: symptom.text,
            image: symptom.image || '', // Ensure image property is provided or set a default value
        })),
        presentation: presentation
    }
    // console.log(first);
    return first;
}


export const nextButtons = (buttonsPressed: Question) => {
    const { category, symptoms, presentation } = buttonsPressed;
    // if more than one symptom is present, then this category is decided
    if (symptoms.length > 0) {
        const answer: Question = {
            category,
            // array is empty to show category is final category
            symptoms: [],
            presentation
        }
        return answer;
    } else {
        // if no symptomps are chosen then the next question is returned
        return nextQuestion(presentation, category);
    }
}