// import logo from './logo.svg';
import Board from './Board';
import './App.css';
import React from 'react';

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // squares: new Array(9).fill('X')
      squares: new Array(9).fill(null),
      xIsNext:true
    };
  }
  handleClick = (i)=> {
    const squares = [...this.state.squares];
    // squares[i] = 'X';
    if (squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({squares, xIsNext: !this.state.xIsNext  });
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    // const status = `Next player: ${this.state.xIsNext ? 'X': 'O'}`
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X': 'O'}`
    return (
      <div className="game">
        {/* <Board/> */}
        <Board 
          squares = {this.state.squares} 
          handleClick = {this.handleClick}
        />
        <div className="game-info">
          <div>{status}</div>
        </div>

      </div>
    );
  } 
}
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

export default App;
