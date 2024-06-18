import { Question } from "./question";
import { stringWithImage } from "./stringWithImage";

export interface FlowChartInterface {
  buttonsList: stringWithImage[];
  onNoneClick: () => void;
  onSubmitClick: () => void;
  whenClick: (buttonData: stringWithImage) => void;
}