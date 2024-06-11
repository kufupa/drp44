import { Question } from "../utils/question";

export interface FlowChartInterface {
  buttonsList: string[];
  onNoneClick: () => void;
  onSubmitClick: () => void;
  onMouseDown: (buttonData: string) => void;
  onMouseUp: () => void;
  whenClick: (buttonData: string) => void;
}