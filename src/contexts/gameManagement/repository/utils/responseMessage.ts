import IGame from "../../domain/core/IGame";
import IResponse from "../../domain/services/IResponse";

export const responseMessage = (message: String, game: IGame): IResponse => {
  return { message: message, game: game };
};
