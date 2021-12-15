import PlayerSchema from "../model/player.js";

export async function save(newUser) {
  try {
    const playerModel = new PlayerSchema(newUser);
    return await playerModel.save();
  } catch (error) {
    console.error(error);
  }
}

export async function read(username) {
  try {
    return await PlayerSchema.findById(username).lean();
  } catch (error) {
    console.error(error);
  }
}

export async function update(username, userToUpdate) {
  try {
    return await PlayerSchema.findByIdAndUpdate(username, userToUpdate).lean();
  } catch (error) {
    console.error(error);
  }
}

export async function remove(username) {
  try {
    return await PlayerSchema.findByIdAndRemove(username).lean();
  } catch (error) {
    console.error(error);
  }
}
