import { Presentation } from "../presentation";
// @ts-ignore
import StomachImage from '../../components/StomachImage.png'
import { stringWithImage } from "../../types/stringWithImage";


export class AbdominalPainAdultsHandler extends Presentation {
    image(): string {
        return StomachImage;
    }

    static getInstance = () => {
        return new AbdominalPainAdultsHandler();
    }

    toString(): string {
        return "Abdominal Pain in Adults";
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
                image: ''
            },
            {
                text: `Inadequate Breathing-You may feel:
·       out of breath
·        rapid + shallow breathing
·        tired or weak
·        pressure or tightness in chest
·        bluish lips
·        dizziness`,
                image: ''
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
                image: ''
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
                image: ''  
            },
            {
                text: `Pain radiating to the back-You might feel:
·  Sharp or Dull Pain
·  Pain starts mildly but becomes intense over time
·  Difficulty moving or bending`,
                image: ''  
            },
            {
                text: `Vomiting blood-It may cause:
·  Vomit is bright red or look dark like coffee grounds.
·  Feeling faint or lightheaded
·  Pain in stomach area.
·  Unusually weak or fatigued.`,
                image: ''  
            },
            {
                text: `Passing fresh or altered blood-It may cause:
·  Bright red blood that is fresh
·  Dark brown or black blood that indicates it has been in the system longer
·  Presence of clots in the blood
·  Blood mixed with stool or urine`,
                image: ''  
            },
            {
                text: `PV blood loss and >20 weeks pregnant-It may cause:
·  Unexpected bleeding from the vagina
·  Unexpected spots or blood stains in underwear 
·  Heavier and more frequent periods
·  Bleeding that occurs outside of your regular menstrual cycle.`,
                image: ''  
            },
            {
                text: `High body temperature- You might experience:
·  Sweating
·  Cold and shivering
·  Weakness or Tiredness
·  Headaches and Fatigue`,
                image: ''  
            }
        ];
    }


    yellow(): Array<stringWithImage> {
        return [
            {
                text: `Possibly pregnant-
· Late or Missed Period       
· Nausea or Morning Sickness
· Tender, swollen, or sore breasts.`,
                image: ''  
            },
            {
                text: `Shoulder tip pain- You might feel:
· Pain from another part of the body, such as the abdomen, but is felt in the shoulder.
· Pain that comes on quickly and can be sharp or aching.`,
                image: ''  
            },
            {
                text: `Black or redcurrant stools- You might have:
· Black, Sticky Stools
· Red colored stools`,
                image: ''  
            },
            {
                text: `Persistent vomiting- Common Symptoms:
· Continuous Vomiting
· Dry mouth, dizziness, and reduced urination due to loss of fluids.
· Nausea`,
                image: ''  
            },
            {
                text: `Adult with high body temperature in an adult- You might have:
· Fever
· Excessive sweating
· Experiencing chills or shivering
· Feeling unusually tired or weak.`,
                image: ''  
            }
        ];
    }


    green(): Array<stringWithImage> {
        return [
            {
                text: `Recent mild pain-Mild chest pain that has occurred recently. Common Symptoms:
·  Noticeable Discomfort
·  Manageable : Usually relieved with rest or over·the·counter pain medication.`,
                image: ''  
            },
            {
                text: `Vomiting-Recent vomiting episodes. You might:
·  One or More Episodes : Vomiting that has occurred recently.
·  Nausea : Feeling queasy or sick to your stomach before or after vomiting.
·  Other Symptoms : Possible abdominal pain, dizziness, or weakness.`,
                image: ''  
            },
            {
                text: `Recent problem-Any new or recent issue related to chest pain. You might:
·  New Symptoms : Any new or recent chest pain or discomfort.`,
                image: ''  
            }
        ];
    }


    black(): Array<stringWithImage> {
        return [
            {
                text: `Past mild pain-Any mild pain experienced in the past that is no longer present. You might:
·  Intermittent Discomfort : Pain that came and went, not constant.
·  Mild Intensity : Pain that was noticeable but not severe or debilitating.
·  No Long-Term Effects : Pain that resolved on its own without lasting impact.
·  Specific Triggers : Pain that was associated with certain activities or movements.`,
                image: ''
            }
        ];
    }

}
