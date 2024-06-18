import { Presentation } from "../../types/presentation";
// @ts-ignore
import BackImage from '../../components/imgs/backpain.png'
// @ts-ignore
import AirwayBlockage from '../../components/imgs/Airway Blockage.jpg'
// @ts-ignore
import InadequateBreathing from '../../components/imgs/Inadequate Breathing.jpg'
// @ts-ignore
import Shock from '../../components/imgs/Shock.jpg'
// @ts-ignore
import Abdominalpain from '../../components/imgs/Abdominal pain.jpg'
// @ts-ignore
import IssuewithNerveorSpinalCord from '../../components/imgs/Issue with Nerve or Spinal Cord.jpg'
// @ts-ignore
import Highbodytemperature from '../../components/imgs/High body temperature.jpg'
// @ts-ignore
import Painradiatingtotheback from '../../components/imgs/Pain radiating to the back.jpg'
// @ts-ignore
import Unabletowalk from '../../components/imgs/Unable to walk.jpg'
import { stringWithImage } from "../../types/stringWithImage";

export class BackPainHandler extends Presentation {
    black(): stringWithImage[] {
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
· Anxiety`
            },
            {
                text: `Issue with Nerve or Spinal Cord-Signs include:
· Weakness or numbness on one side of the body
· Trouble speaking or understanding speech
· Loss of vision or double vision
· Severe headache`,
image: IssuewithNerveorSpinalCord
            },
            {
                text: `High Temperature-Signs include:
· Fever or Heat exposure
· Flushed skin
· Sweating
· Irritability
· Lethargy`,
image: Highbodytemperature
            },
            {
                text: `Abdominal pain-Symptoms may include:
· Cramping
· Bloating
· Nausea
· Vomiting`,
image: Abdominalpain
            }
        ];
    }


    yellow(): Array<stringWithImage> {
        return [
            {
                text: `Nerve Issues or Spinal Cord-Symptoms may include:
    · Sudden weakness
    · Numbness
    · Confusion`,
    image: IssuewithNerveorSpinalCord
            },
            {
                text: `Injury to back-Symptoms may include:
    · Pain or Bruising
    · Difficulty moving`,
    image: Painradiatingtotheback
            },
            {
                text: `Unable to walk-Signs include:
    · Inability to bear weight
    · Severe pain when moving`,
    image: Unabletowalk
            },
            {
                text: `Adult with high temperature-Signs include:
    · Flushed skin
    · Sweating
    · Mild confusion
    · General discomfort`,
    image: Highbodytemperature
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