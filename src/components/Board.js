import { render } from "@testing-library/react";
import Square from "./Square";

// const Board = () => {
const Board = ({squares, handleClick}) => {
    const renderSquare = (i) => {
        return(
            //  <Square value = {i} key={i} />
            <Square 
            // value = {props.squares[i]} 
            value = {squares[i]} 
            key={i} 
            // handleClick = {() => props.handleClick(i)}
            handleClick = {() => handleClick(i)}
            />
             )
    };
    
    const renderRow = (start) => {
        return (
        <div className="board-row">
            {Array.from(new Array(3), (_,index) => (
                renderSquare(start + index)
            ))}
        </div>
        )
    };
    
    return (
        <div>
            {renderRow(0)}
            {renderRow(3)}
            {renderRow(6)}
        </div>
    );
};

export default Board;