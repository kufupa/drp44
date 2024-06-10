import { Presentation } from "../presentation";
// @ts-ignore

export class ChestPainHandler extends Presentation {
    // image(): string {
    //     return ChestImage;
    // }

    static getInstance = () => {
        return new ChestPainHandler();
    }

    toString(): string {
        return 'Chest Pain'
    }

    red(): Array<string> {
        return [
            `Airway compromise-Occurs when there is a blockage of the airways due to external objects, swelling, or abnormalities. You might:
    · find it difficult to breathe
    · make a wheezing sound
    · make a harsh, grating sound
    · have visible swelling
    · difficulty swallowing`,
            `Inadequate Breathing-Involves inability to breathe effectively due to lungs or other muscles. You may feel:
    · shortness of breath
    · rapid + shallow breathing
    · tired or weak
    · pressure or tightness in chest
    · bluish lips
    · dizziness`,
            `Shock-The body isn't getting enough blood flow, so vital organs struggle to get oxygen.
    Common Symptoms are:
    · Weakness
    · Your heart might be racing or pounding
    · Cold, Clammy and Sweaty Skin
    · Pale, Bluish skin - especially around lips and fingernails
    · Nausea
    · Low Blood Pressure
    · Feel Disoriented`,
        ];
    }
    
    orange(): Array<string> {
        return [
            `Severe pain-Intense or sharp pain that significantly impairs daily activities. It may cause:
    · Inability to move
    · Sweating
    · High blood pressure
    · Nausea
    · Anxiety`,
            `Acute neurological deficit-Sudden loss of neurological function due to injury or illness. Signs include:
    · Weakness or numbness on one side of the body
    · Trouble speaking or understanding speech
    · Loss of vision or double vision
    · Severe headache`,
            `Significant mechanism of injury-Refers to an event causing a high risk of severe injury, such as:
    · Car accidents
    · Falls from height
    · Penetrating injuries`,
            `Hot child-A child with an abnormally high body temperature due to fever or heat exposure. Signs include:
    · Flushed skin
    · Sweating
    · Irritability
    · Lethargy`,
            `Very hot adult-An adult with an abnormally high body temperature due to fever or heat exposure. Signs include:
    · Flushed skin
    · Sweating
    · Confusion
    · Weakness`,
            `Abdominal pain-Severe pain in the abdominal region. Symptoms may include:
    · Cramping
    · Bloating
    · Nausea
    · Vomiting`,
        ];
    }
    
    yellow(): Array<string> {
        return [
            `New neurological deficit-Recent loss of neurological function. Symptoms may include:
    · Sudden weakness
    · Numbness
    · Confusion`,
            `Direct trauma to the back-Injury to the back from an external force. Symptoms may include:
    · Pain
    · Bruising
    · Difficulty moving`,
            `Unable to walk-Inability to stand or walk due to pain or weakness. Signs include:
    · Inability to bear weight
    · Severe pain on movement`,
            `Hot adult-An adult with a moderately high body temperature due to fever or heat exposure. Signs include:
    · Flushed skin
    · Sweating
    · Mild confusion
    · General discomfort`,
            `Moderate pain-Pain that is noticeable but not severe. Symptoms may include:
    · Persistent discomfort
    · Limited movement`,
            `Colicky pain-Intermittent and cramp-like pain. It may be associated with:
    · Gastrointestinal issues
    · Urinary tract problems`,
            `Inappropriate history-Information provided by the patient that doesn't match the clinical findings. Signs include:
    · Discrepancies in symptoms
    · Inconsistent explanations`,
        ];
    }
    
    green(): Array<string> {
        return [
            `Recent mild pain-Pain that has occurred recently but is not severe. Symptoms may include:
    · Minor discomfort
    · No significant impact on daily activities`,
            `Recent problem-A newly occurring issue that is not severe. Symptoms may include:
    · Minor irritation
    · Mild inconvenience`,
        ];
    }
    
    blue(): Array<string> {
        return [
            `No urgent condition-Patient does not exhibit any immediate or severe symptoms. Signs include:
    · Stable condition
    · No significant pain or distress`,
        ];
    }
    



}