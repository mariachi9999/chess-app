import express from "express";
import Game from "../../../repository/game/game";
import { isBlack } from "../../../repository/utils/isBlack";
import { isFirstMovement } from "../../../repository/utils/isFirstMovement";
import { isColorTurn } from "../../../repository/utils/isColorTurn";
import { GamesModel } from "../../models/gamesModel";
import { isGameOver } from "../../../repository/utils/isGameOver";
import { doMove } from "../../../repository/utils/doMove";

import { responseMessage } from "../../../repository/utils/responseMessage";
import {
  GAME_OVER,
  WHITE_MOVE_FIRST,
  NOT_YOUR_TURN,
  INVALID_MOVE,
  VALID_MOVE,
} from "../../../repository/utils/constants/message";
import { isLegalMove } from "../../../repository/utils/isLegalMove";
import { updateGameInDb } from "../../utils/updateGame";
import IBoard from "../../../domain/core/IBoard";
import { findGame } from "../../utils/findGameFromDb";
import { validMoveMessage } from "../../../repository/utils/validMoveMessage";
const { Chess } = require("chess.js");

// POST endpoint
export const movePiece = async (
  req: express.Request,
  res: express.Response
) => {
  const { id, move, color } = req.body;
  let game = await GamesModel.findOne({ game_id: id });
  let table = new Chess(game.board.table);
  let newBoard;

  // console.log(game);

  try {
    //Check if is already game over.
    if (isGameOver(game)) {
      return res.send(responseMessage(GAME_OVER, game));
    }
    //Check if black wants to move first
    if (isFirstMovement(game) && isBlack(color)) {
      return res.send(responseMessage(WHITE_MOVE_FIRST, game));
    }
    //Check if is it player color turn
    if (isColorTurn(game) !== color) {
      return res.send(responseMessage(NOT_YOUR_TURN, game));
    }
    //Check if is it a valid move
    if (!isLegalMove(game, req.body)) {
      return res.send(responseMessage(INVALID_MOVE, game));
    }
    // If all previous es ok, do the move!
    newBoard = doMove(game, move);
    // Update Game in DB after the move and return Game
    let gameUpdated = await updateGameInDb(id, newBoard as IBoard);
    let message = validMoveMessage(gameUpdated);
    return res.send(responseMessage(message, gameUpdated));
  } catch (error) {
    res.status(500).send(error);
  }
};
