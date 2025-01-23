import { useGameContext } from "@/shared/store";
import { ICell } from "@/shared/interfaces";

const useCellUseCase = () => {
    const {
        board,
        currentPlayer,
        setBoard,
        setCurrentPlayer,
        winner,
        setMoveCount, 
    } = useGameContext();

    const handleCellClick = (cell: ICell): void => {
        if (winner) {
            alert("Игра уже завершена!");
            return;
        }

        if (cell.player !== null) {
            alert("Эта ячейка уже занята!");
            return;
        }

        const updatedBoard = board.map((c) =>
            c.id === cell.id ? { ...c, player: currentPlayer } : c
        );

        setBoard(updatedBoard);

        setMoveCount((prev) => prev + 1);

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };
    return {
        handleCellClick,
    };
};

export { useCellUseCase };