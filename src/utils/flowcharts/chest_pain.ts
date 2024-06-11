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
        `Shock-The body isn’t getting enough blood flow, so vital organs struggle to get oxygen.
Common Symptoms are:
· Weakness
· Your heart might be racing or pounding
· Cold, Clammy and Sweaty Skin
· Pale, Bluish skin – especially around lips and fingernails
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
        `Cardiac pain-Pain associated with heart issues, often felt in the chest. Symptoms may include:
· Pressure or tightness in the chest
· Pain spreading to shoulders, neck, or arms
· Shortness of breath
· Sweating`,
        `Acutely short of breath-Sudden and severe difficulty in breathing. Symptoms may include:
· Rapid breathing
· Gasping for air
· Chest tightness
· Anxiety`,
        `Abnormal pulse-Irregular heartbeats or pulse rate. Symptoms may include:
· Skipped beats
· Fast or slow pulse
· Palpitations
· Dizziness`,
    ];
}

yellow(): Array<string> {
    return [
        `Pleuritic pain-Sharp chest pain that worsens with breathing or coughing. Symptoms may include:
· Localized chest pain
· Pain with deep breaths
· Pain with coughing or sneezing`,
        `Persistent vomiting-Continuous vomiting that does not resolve. Symptoms may include:
· Severe nausea
· Dehydration
· Weakness`,
        `Significant cardiac history-Past heart-related health issues. Symptoms may include:
· Previous heart attacks
· Angina
· Chronic heart conditions`,
        `Moderate pain-Pain that is noticeable but not severe. Symptoms may include:
· Persistent discomfort
· Limited movement`,
    ];
}

green(): Array<string> {
    return [
        `Vomiting-Episodes of vomiting that may not be continuous. Symptoms may include:
· Nausea
· Discomfort in the stomach`,
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
