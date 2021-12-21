import IBoard from "../model/IBoard";

export default interface IValidMoveMsg {
  (newBoard: IBoard): String;
}
