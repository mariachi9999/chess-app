import IBoard from "../model/IBoard";
export default interface ICheckStatus {
  (newBoard: IBoard): String;
}
