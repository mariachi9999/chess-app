import IGame from "../../domain/model/IGame";
import IResponse from "../../domain/services/IResponse";
import IResponseMessage from "../../domain/services/IResponseMessage";

export const responseMessage: IResponseMessage = (
  message: String,
  game: IGame
): IResponse => {
  return { message: message, game: game };
};
