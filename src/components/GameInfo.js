import React from 'react'

function GameInfo({turn, winner, handleReset}) {
    let winnerText = turn==="X"?"0":"X";
    return (
        <div className="gameinfo">
            <h2>Welcome to React Tic Tac Toe</h2>
            <div>
                <span className="info">{winner ?`${winnerText} Won`:`Turn of ${turn}`}</span>
                <button id="reset" onClick={handleReset}>RESET</button>
            </div>
            {winner && <div id="imgbox">
                <img src="https://d1j8pt39hxlh3d.cloudfront.net/uploads/confetti_ball_256.gif" alt="celebration gif" />
            </div>}
        </div>
    )
}

export default GameInfo
