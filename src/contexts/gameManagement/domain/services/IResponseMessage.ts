import IGame from "../model/IGame";
import IMove from "../model/IMove";
import IResponse from "./IResponse";

export default interface IResponseMessage {
  (message: String, game: IGame): IResponse;
}
