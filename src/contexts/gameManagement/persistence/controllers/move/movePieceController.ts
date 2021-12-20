import express from "express";
import Game from "../../../repository/entities/game/game";
import { isBlack } from "../../../repository/services/isBlack";
import { isFirstMovement } from "../../../repository/services/isFirstMovement";
import { isColorTurn } from "../../../repository/services/isColorTurn";
import { GamesModel } from "../../models/gamesModel";
import { isGameOver } from "../../../repository/services/isGameOver";
import { doMove } from "../../../repository/services/doMove";

import { responseMessage } from "../../../repository/services/responseMessage";
import {
  GAME_OVER,
  WHITE_MOVE_FIRST,
  NOT_YOUR_TURN,
  INVALID_MOVE,
  VALID_MOVE,
} from "../../../repository/constants/message";
import { isLegalMove } from "../../../repository/services/isLegalMove";
import { updateGameInDb } from "../../services/updateGameInBb";
import IBoard from "../../../domain/model/IBoard";
import { findGame } from "../../services/findGameFromDb";
import { validMoveMessage } from "../../../repository/services/validMoveMessage";
import { checkStatus } from "../../../repository/services/checkStatus";
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
  let newStatus;
  let message;

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
    // If all previous is ok, do the move!
    newBoard = doMove(game, move);
    newStatus = checkStatus(newBoard);
    message = validMoveMessage(newBoard);
    // Update Game in DB after the move and return Game
    let gameUpdated = await updateGameInDb(id, newBoard as IBoard, newStatus);
    return res.send(responseMessage(message, gameUpdated));
  } catch (error) {
    res.status(500).send(error);
  }
};
