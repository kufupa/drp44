import { Question } from "../utils/question";

export interface FlowChartInterface {
  buttonsList: string[];
  onNoneClick: () => void;
  onSubmitClick: () => void;
  whenClick: (buttonData: string) => void;
}