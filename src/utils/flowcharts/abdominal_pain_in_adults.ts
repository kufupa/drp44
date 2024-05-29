import { Presentation } from "../presentation";

export class AbdominalPainAdultsHandler implements Presentation {

    toString() {
        return "Abdominal Pain in Adults"
    }

    red() {
      return [
        "Airway compromise",
        "Inadequate breathing",
        "Shock"
      ];;
    }
  
    orange() {
      return [
        "Severe pain",
        "Pain radiating to the back",
        "Vomiting blood",
        "Passing fresh or altered blood PR",
        "PV blood loss and >20 weeks pregnant",
        "Very hot adult"
      ];
    }
  
    yellow() {
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
  
    green() {
      return [
        "Recent mild pain",
        "Vomiting",
        "Recent problem"
      ];
    }
  
    black() {
      return [];
    }
  }