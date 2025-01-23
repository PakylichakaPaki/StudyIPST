import { useGameContext } from "@/shared/store";
import { useEffect } from "react";
import { IWinner } from "@/shared/interfaces";

const useBoardUseCase = () => {
    const { board, setWinner } = useGameContext();
    // победил?
    const checkWinner = (): IWinner => {
        const winningCombinations = [
            // проверка на линии
            // --
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // ||
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // \/
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                board[a].player &&
                board[a].player === board[b].player &&
                board[a].player === board[c].player
            ) {
                return board[a].player; 
            } 
        }

        // проверка на ничью 
        if (board.every((cell) => cell.player !== null)) {
            return "draw";
        }
        return null;
    };

    // каждое обновнеие проверка
    useEffect(() => {
        const winner = checkWinner();
        setWinner(winner);
    }, [board]);
    return {
        checkWinner,
    };
};

export { useBoardUseCase };