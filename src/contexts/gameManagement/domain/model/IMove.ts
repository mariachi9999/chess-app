export default interface IMove {
  game_id: Number;
  color: String;
  move: { from: String; to: String };
}
