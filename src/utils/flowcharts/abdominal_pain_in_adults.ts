import { Presentation } from "../presentation";
// @ts-ignore
import StomachImage from '../../components/StomachImage.png'


export class AbdominalPainAdultsHandler extends Presentation {
    image(): string {
        return StomachImage;
    }

    static getInstance = () => {
        return new AbdominalPainAdultsHandler();
    }

    toString(): string {
        return `Abdominal Pain in Adults`;
    }

    red(): Array<string> {
        return [
            `Airway compromise-Occurs when there is a blockage of the airways due to external objects, swelling or abnormalities. You might:
·        find it difficult to breathe
·        make a wheezing sound
·        make a harsh, grating sound
·        have visible swelling
·        difficulty swallowing`,
            `Inadequate Breathing-Involves inability to breathe effectively due to lungs or other muscles. You may feel:
·        shortness of breath
·        rapid + shallow breathing
·        tired or weak
·        pressure or tightness in chest
·        bluish lips
·        dizziness`,
            `Shock-The body isn’t getting enough blood flow, so vital organs struggle to get oxygen.
Common Symptoms are:
·        Weakness
·        Your heart might be racing or pounding
·        Cold, Clammy and Sweaty Skin
·        Pale, Bluish skin – especially around lips and fingernails
·        Nausea
·        Low Blood Pressure
·        Feel Disoriented`,
        ];
    }

    orange(): Array<string> {
        return [
            `Severe pain-Pain that lasts for a long time and doesn't go away. You might feel:
·  Constant, Intense Pain: The pain doesn't go away, has persisted for a while and is very strong.
·  Interference with Daily Activities : Difficulty performing normal tasks like walking, sitting, or sleeping.`,
            `Pain radiating to the back-Pain that starts in your abdomen and moves to your back. You might feel:
·  Sharp or Dull Pain
·  Pain may start mildly but becomes more intense over time.
·  Difficulty moving or bending due to the pain spreading to your back.
`,
            `Vomiting blood-Throwing up blood. You might:
·  Vomit can appear bright red or look dark like coffee grounds.
·  You may feel faint or lightheaded due to blood loss.
·  Pain or discomfort in your stomach area.
·  Feeling unusually weak or fatigued.
`,
            `Passing fresh or altered blood PR-`,
            `PV blood loss and >20 weeks pregnant-Unexpected bleeding from the vagina. You might:
·  You may find unexpected spots or stains of blood in underwear
·  Your periods might be much heavier than usual or occur more often.
·  Irregular Bleeding : Bleeding that occurs outside of your regular menstrual cycle.
`,
            `Very hot adult-High body temperature. You might:
·  Your skin may feel hot to the touch and you might sweat a lot.
·  You may feel cold and shiver even though you are hot.
·  Weakness or Tiredness, and have less energy than usual
·  Headache
`
        ];
    }

    yellow(): Array<string> {
        return [
            `Possibly pregnant-Signs you might be pregnant.
· Your menstrual period is late or missed entirely.
· Nausea or Morning Sickness: Feeling nauseous or vomiting, especially in the morning.
· Breast Changes: Tender, swollen, or sore breasts.
`,
            `Shoulder tip pain-Pain felt at the tip of your shoulder. You might feel:
· Referred Pain: Pain that originates from another part of the body, such as the abdomen, but is felt in the shoulder.
· Sudden Onset: Pain that comes on quickly and can be sharp or aching.
`,
            `Black or redcurrant stools-Unusual stool color indicating potential internal issues. You might:
· Black, Tarry Stools: Stools that look black and sticky, which can indicate bleeding in the upper digestive tract.
· Bright Red Stools: Red·colored stools, which can indicate bleeding in the lower digestive tract.
· Accompanying Symptoms: Possible abdominal pain, weakness, or dizziness.
`,
            `History of acutely vomiting blood-Previously experienced vomiting blood. You might:
· Recurring Vomiting of Blood: History of throwing up bright red blood or dark, coffee·ground·like material.
· Associated Symptoms: Past episodes may have included dizziness, weakness, or abdominal pain.
· Underlying Conditions: Possible history of conditions like ulcers, liver disease, or bleeding disorders.
`,
            `Persistent vomiting-Constant or repeated vomiting. You might:
· Continuous Vomiting: Vomiting frequently, which doesn’t seem to stop.
· Dehydration Signs: Dry mouth, dizziness, and reduced urination due to loss of fluids.
· Nausea: Constant feeling of nausea that accompanies the vomiting.
`,
            `Hot adult-High body temperature in an adult. You might:
· Fever: Feeling very hot with a body temperature above normal.
· Sweating: Excessive sweating despite feeling very warm.
· Chills: Experiencing chills or shivering even when you feel hot.
· Weakness or Fatigue: Feeling unusually tired or weak.
`,
            `Moderate pain-Pain that is present but not intense. You might feel:
·  Noticeable Discomfort : Pain that you are aware of, but it is not severe.
·  No Major Interference : It doesn't significantly affect your ability to perform daily activities.
·  Manageable : Usually relieved with rest or over·the·counter pain medication.
`
        ];
    }

    green(): Array<string> {
        return [
            `Recent mild pain-Mild chest pain that has occurred recently. You might:
·  Noticeable Discomfort : Mild pain that you are aware of, but it is not severe.
·  No Major Interference : It doesn't significantly affect your ability to perform daily activities.
·  Manageable : Usually relieved with rest or over·the·counter pain medication.
`,
            `Vomiting-Recent vomiting episodes. You might:
·  One or More Episodes : Vomiting that has occurred recently.
·  Nausea : Feeling queasy or sick to your stomach before or after vomiting.
·  Other Symptoms : Possible abdominal pain, dizziness, or weakness.
`,
            `Recent problem-Any new or recent issue related to chest pain. You might:
·  New Symptoms : Any new or recent chest pain or discomfort.
·  Unresolved Issues : Recent symptoms that haven’t gone away or improved.
·  Mild to Moderate Impact : Symptoms that are noticeable but not debilitating.
`
        ];
    }

    black(): Array<string> {
        return [
            `Past mild pain-Any mild pain experienced in the past that is no longer present. You might:
·  Intermittent Discomfort : Pain that came and went, not constant.
·  Mild Intensity : Pain that was noticeable but not severe or debilitating.
·  No Long-Term Effects : Pain that resolved on its own without lasting impact.
·  Specific Triggers : Pain that was associated with certain activities or movements.
`
        ];
    }
}
