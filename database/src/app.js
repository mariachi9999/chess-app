import { connect, disconnect } from "./connection.js";
import { save, read, update, remove } from "./data-access/playerDataAccess.js";

await connect();

const player = {
  username: "mariachi9999",
};

const savedPlayer = await save(player);
console.log(await read(savedPlayer.username));

const playerToUpdate = {
  wins: 1,
};

console.log(await update(savedPlayer.username, playerToUpdate));
console.log(await remove(savedPlayer.username));

// for desktop
//disconnect()
