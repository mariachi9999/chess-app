export default interface ILastMove {
  color: String;
  from: String;
  to: String;
  flags: String;
  piece: String;
  captured?: String;
  san: String;
}
