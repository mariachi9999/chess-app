import IPlayer from "../../../domain/model/IPlayer";

export default class Player implements IPlayer {
  constructor(public username: String) {
    this.username = username;
  }
}
