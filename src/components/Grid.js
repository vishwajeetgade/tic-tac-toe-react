import React, { useEffect, useState } from 'react'
import Griditem from './Griditem';
import GameInfo from './GameInfo';
import ting from '../audio/ting.wav'
import winning from '../audio/winning.wav'
const tingAudio = new Audio(ting);
const winAudio = new Audio(winning);

function Grid() {
    const [turn, setTurn] = useState("X");
    const [checkWinner, setCheckWinner] = useState(["9","1","2","3","4","5","6","7","8"]);
    const [winner, setWinner] = useState(false);
    const [reset, setReset] = useState(false);

    useEffect(() => {
        const check = [
            [0,1,2,5,5,0],
            [3,4,5,5,15,0],
            [6,7,8,5,25,0],
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],
            [2,5,8,15,15,90],
            [0,4,8,5,15,45],
            [2,4,6,5,15,135],
        ];
        Array.from(check).forEach(e => {
            if(checkWinner[e[0]] === checkWinner[e[1]] && checkWinner[e[2]] === checkWinner[e[1]]){
                setWinner(true);
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width = "20vw";
                winAudio.play();
            }
        });
    }, [checkWinner]);

    const handleReset = () => {
        setWinner(false);
        setCheckWinner(["0","1","2","3","4","5","6","7","8"]);
        setTurn("X");
        let res = reset ? false : true
        setReset(res);
        document.querySelector(".line").style.width = "0";
    }

    const handleAudio = () => {
        tingAudio.play();
    }

    return (
        <div className="GameContainer">
            <div className="container">
                <div className="line"></div>
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-0`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box bl-0 bt-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-1`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box bt-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-2`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box br-0 bt-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-3`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box bl-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-4`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-5`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box br-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-6`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box bl-0 bb-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-7`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box bb-0" />
                <Griditem winner={winner} handleAudio={handleAudio} id={`i-8`} turn={turn} setTurn={setTurn} checkWinner={checkWinner} setCheckWinner={setCheckWinner} reset={reset} style="box br-0 bb-0" />
            </div>
            <GameInfo turn={turn} winner={winner} handleReset={handleReset} />
        </div>

    )
}

export default Grid
