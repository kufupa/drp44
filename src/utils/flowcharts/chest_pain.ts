import { Presentation } from "../../types/presentation";
// @ts-ignore
import ChestImage from '../../components/imgs/chestpain.png'
// @ts-ignore
import AirwayBlockage from '../../components/imgs/Airway Blockage.jpg'
// @ts-ignore
import InadequateBreathing from '../../components/imgs/Inadequate Breathing.jpg'
// @ts-ignore
import Severepain from '../../components/imgs/Severe pain.jpg'
// @ts-ignore
import Cardiacpain from '../../components/imgs/Cardiac pain.jpg'
// @ts-ignore
import Acutelyshortofbreath from '../../components/imgs/Acutely short of breath.jpg'
// @ts-ignore
import Abnormalpulse from '../../components/imgs/Abnormal pulse.png'
// @ts-ignore
import Shock from '../../components/imgs/Shock.jpg'
// @ts-ignore
import Persistentvomiting from '../../components/imgs/Persistent vomiting.jpg'

import { stringWithImage } from "../../types/stringWithImage";


export class ChestPainHandler extends Presentation {
    black(): stringWithImage[] {
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


    red(): Array<stringWithImage> {
        return [
            {
                text: `Airway Blockage-Due to objects, swelling or abnormalities. 
            You might have:
·        difficulty breathing
·        wheezing or harsh, grating sound
·        visible swelling
·        difficulty swallowing`,
                image: AirwayBlockage
            },
            {
                text: `Inadequate Breathing-You may feel:
·       out of breath
·        rapid + shallow breathing
·        tired or weak
·        pressure or tightness in chest
·        bluish lips
·        dizziness`,
                image: InadequateBreathing
            },
            {
                text: `Shock-Struggle to get oxygen.
Common Symptoms are:
·        Weakness or Disoriented
·        Racing or Pounding Heart 
·        Cold, Clammy and Sweaty Skin
·        Pale, Bluish skin - especially around lips and fingernails
·        Nausea
·        Low Blood Pressure`,
                image: Shock
            }
        ];
    }


    orange(): Array<stringWithImage> {
        return [
            {
                text: `Severe pain-It may cause:
· Inability to move
· Sweating
· High blood pressure
· Nausea
· Anxiety`,
                image: Severepain
            },
            {
                text: `Cardiac pain-Symptoms may include:
· Pressure or tightness in the chest
· Pain spreading to shoulders, neck, or arms
· Shortness of breath
· Sweating`,
                image: Cardiacpain
            },
            {
                text: `Acutely short of breath-Symptoms may include:
· Rapid breathing
· Gasping for air
· Chest tightness
· Anxiety`,
                image: Acutelyshortofbreath
            },
            {
                text: `Abnormal pulse-Irregular heartbeats or pulse rate. Symptoms may include:
· Fast or slow pulse
· Palpitations
· Dizziness`,
                image: Abnormalpulse
            }
        ];
    }


    yellow(): Array<stringWithImage> {
        return [
            {
                text: `Sharp Chest pain-Worsens with breathing or coughing:
· Chest pain
· Pain with deep breaths
· Pain with coughing or sneezing`,
image: Cardiacpain
            },
            {
                text: `Persistent vomiting-Symptoms may include:
· Severe nausea
· Dehydration
· Weakness`,
image: Persistentvomiting
            },
            {
                text: `Significant cardiac history-Past heart-related health issues. Symptoms may include:
· Previous heart attacks
· Chronic heart conditions`,
image: Cardiacpain
            },
            {
                text: `Moderate pain-Symptoms may include:
· Persistent discomfort
· Limited movement`
            }
        ];
    }


    green(): Array<stringWithImage> {
        return [
            {
                text: `Vomiting-Symptoms may include:
· Nausea
· Discomfort in the stomach`,
image: Persistentvomiting
            },
            {
                text: `Recent mild pain-Symptoms may include:
· Minor discomfort
· No significant impact on daily activities`
            },
            {
                text: `Recent problem-A newly occurring issue that is not severe. Symptoms may include:
· Minor irritation
· Mild inconvenience`
            }
        ];
    }


    blue(): Array<stringWithImage> {
        return [
            {
                text: `No urgent condition-Patient does not exhibit any immediate or severe symptoms. Signs include:
· Stable condition
· No significant pain or distress`
            }
        ];
    }

}
