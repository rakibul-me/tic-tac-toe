var turn = "X";
let scoreX = 0;
let scoreO = 0;
document.getElementById('sX').innerText = scoreX;
document.getElementById('sO').innerText = scoreO;
var withComputer = false;
let wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let best = [5,1,3,7,9];
let winner;
let winnerCheckedTimes = 0;
let btns = document.getElementsByClassName('btns');
let indicator = document.getElementsByClassName('indicator')[0];
var level;
function handleClick(id, com) {
    let elem = getelem(id)
    if(elem.innerText != ''){
        return;
    }
    elem.innerText = turn;
    winner = checkWinner(turn);
    if(!winner){
        swapPlayer(com);
    } else {
        if(winnerCheckedTimes == 1){
            selectWinner();
        }
    }
    checkDraw();
}
function swapPlayer(com){
    if(turn == "X"){
        turn = "O";
        indicator.style.left = 'calc(100% - 60px)';
    } else {
        turn = "X";
        indicator.style.left = 0;
    }
    if(withComputer && !com){
        let empty = [];
        let i, j = 0;
        for(i = 0; i < btns.length; i++){
            if(btns[i].innerText == ""){
                empty[j] = btns[i];
                j++;
            }
        }
        if(level == 1){
            let i;
            let length = wins.length;
            if(rndInt(1,3) == 2){
                for(i = 0; i < length; i++){
                    if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][2], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][1]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][1], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][0]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][0], true);
                        }, 700);
                        prevent(); 
                        return;
                    }
                }
            }
            if(rndInt(1,4) == 2){
                for(i = 0; i < length; i++){
                    if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][2], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][1]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][1], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][0]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][0], true);
                        }, 700);
                        prevent(); 
                        return;
                    }
                }
            }
            setTimeout(() => {
                handleClick(Number(empty[rndInt(0, empty.length - 1)].getAttribute('id').substring(1)), true);
            }, 700);
            prevent();
        } else if(level == 2) {
            let i;
            let length = wins.length;
            for(i = 0; i < length; i++){
                if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][2], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][1]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][1], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][0]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][0], true);
                    }, 700);
                    prevent(); 
                    return;
                }
            }
            if(rndInt(1,3) == 2){
                for(i = 0; i < length; i++){
                    if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][2], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][1]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][1], true);
                        }, 700);
                        prevent(); 
                        return;
                    } else if(getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][0]).innerText == '') {
                        setTimeout(() => {
                            handleClick(wins[i][0], true);
                        }, 700);
                        prevent(); 
                        return;
                    }
                }
            }
            length = best.length;
            for(i = 0; i < length; i++){
                if(getelem(best[i]).innerText == ''){
                    setTimeout(() => {
                        handleClick(best[i], true);
                    }, 700);
                    prevent(); 
                    return;
                }
            }
            setTimeout(() => {
                handleClick(Number(empty[rndInt(0, empty.length - 1)].getAttribute('id').substring(1)), true);
            }, 700);
            prevent();
        } else if(level == 3){
            let i;
            let length = wins.length;
            for(i = 0; i < length; i++){
                if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][2], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][0]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][1]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][1], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][1]).innerText == "O" && getelem(wins[i][2]).innerText == "O" && getelem(wins[i][0]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][0], true);
                    }, 700);
                    prevent(); 
                    return;
                }
            }
            for(i = 0; i < length; i++){
                if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][2], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][0]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][1]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][1], true);
                    }, 700);
                    prevent(); 
                    return;
                } else if(getelem(wins[i][1]).innerText == "X" && getelem(wins[i][2]).innerText == "X" && getelem(wins[i][0]).innerText == '') {
                    setTimeout(() => {
                        handleClick(wins[i][0], true);
                    }, 700);
                    prevent(); 
                    return;
                }
            }
            length = best.length;
            for(i = 0; i < length; i++){
                if(getelem(best[i]).innerText == ''){
                    setTimeout(() => {
                        handleClick(best[i], true);
                    }, 700);
                    prevent(); 
                    return;
                }
            }
            setTimeout(() => {
                handleClick(Number(empty[rndInt(0, empty.length - 1)].getAttribute('id').substring(1)), true);
            }, 700);
            prevent();
        }
    }
}
function checkWinner(turn){
    let length = wins.length;
    for(i = 0; i < length; i++){
        if(getelem(wins[i][0]).innerText == turn && getelem(wins[i][1]).innerText == turn && getelem(wins[i][2]).innerText == turn){
            winnerCheckedTimes++;
            return turn;
        }
    }
}
function getelem(id){
    return document.getElementById(`b${id}`);
}
function selectWinner() {
    if(winner == "X"){
        let elem = document.getElementById('pX');
        document.getElementById('winner1').style.display = 'inline';
        scoreX += 1;
    } else if(winner == "O"){
        let elem = document.getElementById('pO');
        document.getElementById('winner2').style.display = 'inline';
        scoreO += 1;
    }
    document.getElementById('sX').innerText = scoreX;
    document.getElementById('sO').innerText = scoreO;
}
function checkDraw(){
    if(!winner){
        let filled = 0;
        for(let i = 0; i < btns.length; i++){
            if(btns[i].innerText != ""){
                filled++;
            }
        }
        if(filled === 9){
            document.getElementById('draw').style.display = 'inline-block';
        }
    }
}
function rndInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function restart(){
    turn = "X";
    indicator.style.left = 0;
    winner = undefined;
    winnerCheckedTimes = 0;
    let i;
    for(i = 0; i < btns.length; i++){
        document.getElementById(`b${i + 1}`).innerText = '';
    }
    document.getElementById('draw').style.display = 'none';
    document.getElementById('winner1').style.display = 'none';
    document.getElementById('winner2').style.display = 'none';
}
function cancel() {
    winnerCheckedTimes = 0;
    scoreX = 0;
    scoreO = 0;
    document.getElementById('sX').innerText = scoreX;
    document.getElementById('sO').innerText = scoreO;
    winner = undefined;
    let i;
    for(i = 0; i < btns.length; i++){
        document.getElementById(`b${i + 1}`).innerText = '';
    }
    document.getElementById('winner1').style.display = 'none';
    document.getElementById('winner2').style.display = 'none';
    document.getElementsByClassName('game')[0].style.display = 'none';
    document.getElementsByClassName('dashboard')[0].style.display = 'none';
    document.getElementsByClassName('choice')[0].style.display = 'none';
}
function newGame() {
    turn = "X";
    indicator.style.left = 0;
    winnerCheckedTimes = 0;
    scoreX = 0;
    scoreO = 0;
    document.getElementById('sX').innerText = scoreX;
    document.getElementById('sO').innerText = scoreO;
    winner = undefined;
    let i;
    for(i = 0; i < btns.length; i++){
        document.getElementById(`b${i + 1}`).innerText = '';
    }
    document.getElementById('draw').style.display = 'none';
    document.getElementById('winner1').style.display = 'none';
    document.getElementById('winner2').style.display = 'none';
    document.getElementsByClassName('game')[0].style.display = 'none';
    document.getElementsByClassName('dashboard')[0].style.display = 'none';
    document.getElementsByClassName('choice')[0].style.display = 'block';
}
function chooseComputer(){
    withComputer = true;
    document.getElementById('pX').innerText = 'You';
    document.getElementById('pO').innerText = "Computer";
    document.getElementById('chooseLevel').style.display = 'block';
    document.getElementsByClassName('name-form')[0].style.display = 'none';
}
function closeCom() {
    document.getElementsByClassName('game')[0].style.display = 'block';
    document.getElementsByClassName('dashboard')[0].style.display = 'flex';
    document.getElementsByClassName('choice')[0].style.display = 'none';
    document.getElementsByClassName('name-form')[0].style.display = 'none';
    document.getElementById('chooseLevel').style.display = 'none';
}
function chooseFriend() {
    withComputer = false;
    document.getElementById('chooseLevel').style.display = 'none';
    document.getElementsByClassName('name-form')[0].style.display = 'block';
}
function createFriendGame(){
    document.getElementById('pX').innerText = document.getElementById('player1').value;
    document.getElementById('pO').innerText = document.getElementById('player2').value;
    document.getElementsByClassName('game')[0].style.display = 'block';
    document.getElementsByClassName('dashboard')[0].style.display = 'flex';
    document.getElementsByClassName('choice')[0].style.display = 'none';
    document.getElementsByClassName('name-form')[0].style.display = 'none';
}

document.getElementById('nameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createFriendGame();
});
function prevent() {
    document.getElementById('prevent').style.display = 'block';
    setTimeout(() => {
        document.getElementById('prevent').style.display = 'none';
    }, 600);
}
