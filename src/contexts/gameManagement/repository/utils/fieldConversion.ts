export const fieldConversion = (string: String) => {
  let notation = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ];

  let adjusted = string
    .split("")
    .filter((char: string) => notation.includes(char));
  return adjusted.join("");
};
