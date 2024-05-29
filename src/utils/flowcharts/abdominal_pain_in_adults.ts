import { Presentation } from "../presentation";


export class AbdominalPainAdultsHandler extends Presentation {
    
    static getInstance = () => {
      return new AbdominalPainAdultsHandler();
    }

    toString(): string {
        return "Abdominal Pain in Adults";
    }

    red(): Array<string> {
        return [
            "Airway compromise",
            "Inadequate breathing",
            "Shock"
        ];
    }

    orange(): Array<string> {
        return [
            "Severe pain",
            "Pain radiating to the back",
            "Vomiting blood",
            "Passing fresh or altered blood PR",
            "PV blood loss and >20 weeks pregnant",
            "Very hot adult"
        ];
    }

    yellow(): Array<string> {
        return [
            "Possibly pregnant",
            "Shoulder tip pain",
            "Black or redcurrant stools",
            "History of acutely vomiting blood",
            "Persistent vomiting",
            "Hot adult",
            "Moderate pain"
        ];
    }

    green(): Array<string> {
        return [
            "Recent mild pain",
            "Vomiting",
            "Recent problem"
        ];
    }

    black(): Array<string> {
        return [];
    }
}
