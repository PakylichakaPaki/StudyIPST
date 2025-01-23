import { createContext, useContext } from 'react'
import {IGameContext} from "@/shared/store";

const DEFAULT_VALUES: IGameContext = {
  board: Array.from({length: 9}, (_, id) => ({
    id, player: null,
  })),
  setBoard: () => {},
  currentPlayer: 'X',
  setCurrentPlayer: () => {},
  moveCount: 0,
  winner: null,
  setWinner: () => {},
  resetGame: () => {},
}

const GameContext = createContext<IGameContext>(DEFAULT_VALUES)

const useGameContext = (): IGameContext => useContext(GameContext)

export {
  DEFAULT_VALUES,
  GameContext,
  useGameContext
}
