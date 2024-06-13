import { Presentation } from "../presentation";
// @ts-ignore
import ChestImage from '../../components/imgs/chestpain.png'


export class ChestPainHandler extends Presentation {
    black(): string[] {
        throw new Error("Method not implemented.");
    }
    image(): string {
        return ChestImage;
    }

    static getInstance = () => {
        return new ChestPainHandler();
    }

    toString(): string {
        return "Chest Pain";
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
        `Severe pain. It may cause:
· Inability to move
· Sweating
· High blood pressure
· Nausea
· Anxiety`,
        `Cardiac pain-Symptoms may include:
· Pressure or tightness in the chest
· Pain spreading to shoulders, neck, or arms
· Shortness of breath
· Sweating`,
        `Acutely short of breath-Symptoms may include:
· Rapid breathing
· Gasping for air
· Chest tightness
· Anxiety`,
        `Abnormal pulse-Irregular heartbeats or pulse rate. Symptoms may include:
· Fast or slow pulse
· Palpitations
· Dizziness`,
    ];
}

yellow(): Array<string> {
    return [
        `Sharp Chest pain-Worsens with breathing or coughing:
· Chest pain
· Pain with deep breaths
· Pain with coughing or sneezing`,
        `Persistent vomiting-Symptoms may include:
· Severe nausea
· Dehydration
· Weakness`,
        `Significant cardiac history-Past heart-related health issues. Symptoms may include:
· Previous heart attacks
· Chronic heart conditions`,
        `Moderate pain-Symptoms may include:
· Persistent discomfort
· Limited movement`,
    ];
}

green(): Array<string> {
    return [
        `Vomiting-Symptoms may include:
· Nausea
· Discomfort in the stomach`,
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
