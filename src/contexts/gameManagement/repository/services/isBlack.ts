import IIsBlack from "../../domain/services/IIsBlack";

export const isBlack: IIsBlack = (color: String) => {
  return color === "b" ? true : false;
};
