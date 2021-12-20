import IGame from "../../domain/model/IGame";
import IResponse from "../../domain/services/IResponse";

export const responseMessage = (message: String, game: IGame): IResponse => {
  return { message: message, game: game };
};
