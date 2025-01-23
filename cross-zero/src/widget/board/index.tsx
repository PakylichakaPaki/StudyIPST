import styles from "./styles.module.scss";
import { FC, HTMLAttributes } from "react";
import { makeClassname } from "@/shared/utils";
import { CellComponent } from "@/shared/components";
import { useGameContext } from "@/shared/store";
import { useCellUseCase } from "@/entities/cell";
import { useBoardUseCase } from "@/entities/board";
import { Button } from "@/shared/components/button";

type IBoardWidgetProps = HTMLAttributes<HTMLDivElement>;

const BoardWidget: FC<IBoardWidgetProps> = ({ className, ...props }) => {
    const { board, resetGame, winner, moveCount } = useGameContext();
    const { handleCellClick } = useCellUseCase();
    useBoardUseCase();
    return (
        <div className={makeClassname(styles.gameBoard, className)} {...props}>
            {/* Отображение игрового поля */}
            {board.map((cell) => (
                <CellComponent onClick={handleCellClick} cell={cell} key={cell.id} />
            ))}
            {/* Счётчик ходов */}
            <div>Ходов: {moveCount}</div>
            {/* Кнопка "Новая игра" */}
            <Button onClick={resetGame} disabled={!winner}>
                Новая игра
            </Button>
        </div>
    );
};

export default BoardWidget;