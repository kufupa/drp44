import { Presentation } from "../presentation";
// @ts-ignore
import BackImage from '../../components/imgs/backpain.png'

export class BackPainHandler extends Presentation {
        black(): string[] {
                throw new Error("Method not implemented.");
        }
        image(): string {
                return BackImage;
        }

    static getInstance = () => {
        return new BackPainHandler();
    }

    toString(): string {
        return "Back Pain"
    }

    red(): Array<string> {
        return [
            `Airway Blockage-Due to objects, swelling or abnormalities. 
            You might have:
·        difficulty breathing
·        wheezing or harsh, grating sound
·        visible swelling
·        difficulty swallowing`,
            `Inadequate Breathing-You may feel:
·       out of breath
·        rapid + shallow breathing
·        tired or weak
·        pressure or tightness in chest
·        bluish lips
·        dizziness`,
            `Shock-Struggle to get oxygen.
Common Symptoms are:
·        Weakness / Disoriented
·        Racing / Pounding Heart 
·        Cold, Clammy and Sweaty Skin
·        Pale, Bluish skin - especially around lips and fingernails
·        Nausea
·        Low Blood Pressure`,
        ];
    }
    
    orange(): Array<string> {
        return [
            `Severe pain-It may cause:
    · Inability to move
    · Sweating
    · High blood pressure
    · Nausea
    · Anxiety`,
            `Issue with Nerve / Spinal Cord-Signs include:
    · Weakness or numbness on one side of the body
    · Trouble speaking or understanding speech
    · Loss of vision or double vision
    · Severe headache`,
            `High Temperature-Signs include:
    · Fever / Heat exposure
    · Flushed skin
    · Sweating
    · Irritability
    · Lethargy`,
            `Abdominal pain-Symptoms may include:
    · Cramping
    · Bloating
    · Nausea
    · Vomiting`,
        ];
    }
    
    yellow(): Array<string> {
        return [
            `Nerve Issues / Spinal Cord-Symptoms may include:
    · Sudden weakness
    · Numbness
    · Confusion`,
            `Injury to back-Symptoms may include:
    · Pain / Bruising
    · Difficulty moving`,
            `Unable to walk-Signs include:
    · Inability to bear weight
    · Severe pain when moving`,
            `Adult with high temperature-Signs include:
    · Flushed skin
    · Sweating
    · Mild confusion
    · General discomfort`,
            `Moderate pain-Symptoms may include:
    · Persistent discomfort
    · Limited movement`,
        ];
    }
    
    green(): Array<string> {
        return [
            `Recent mild pain-Symptoms may include:
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