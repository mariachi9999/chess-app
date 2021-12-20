import IPlayer from "../../domain/core/IPlayer";
import ICreateGame from "../../domain/services/ICreateGame";
import Board from "../board/board";
import Game from "../game/game";

export default class Player implements IPlayer {
  constructor(public username: String) {
    this.username = username;
  }
}
