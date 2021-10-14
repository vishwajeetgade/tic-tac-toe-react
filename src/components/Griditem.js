import React, {useEffect} from 'react';

function Griditem({style, turn, setTurn, id, setCheckWinner, checkWinner, winner, reset, handleAudio }) {
    let num = parseInt(id.split("-")[1]);
    const handleClick = () => {
        if(!winner && document.querySelector(`#${id} .boxtext`).innerText === ""){
            document.querySelector(`#${id} .boxtext`).innerText = turn;
            let newCheckWinner = [...checkWinner];
            newCheckWinner[num] = turn;
            setCheckWinner(newCheckWinner);
            setTurn(turn === "X" ? "0" : "X")
            handleAudio();
        }
    }

    useEffect(() => {
        document.querySelector(`#${id} .boxtext`).innerText = "";
    }, [reset]);


    return (
        <div id={id} className={style} onClick={handleClick}>
            <span className="boxtext"></span>
        </div>
    )
}

export default Griditem
