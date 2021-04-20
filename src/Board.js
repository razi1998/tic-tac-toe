import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    squares(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.squares(0)}
                    {this.squares(1)}
                    {this.squares(2)}
                </div>
                <div className="border-row">
                    {this.squares(3)}
                    {this.squares(4)}
                    {this.squares(5)}
                </div>
                <div className="border-row">
                    {this.squares(6)}
                    {this.squares(7)}
                    {this.squares(8)}
                </div>
                
            </div>
        )
    }
}
export default Board