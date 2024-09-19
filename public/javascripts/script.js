
let p = document.querySelector(".GameOrder")

p.innerText = "Vez do jogador X"

let tt1 = document.querySelector("#t1");
let t1 = tt1.getContext("2d"); 
t1.strokeStyle = 'white'
t1.moveTo(100, 0);
t1.lineTo(100, 100);
t1.lineTo(0, 100);
t1.stroke()

let tt2 = document.querySelector("#t2");
let t2 = tt2.getContext("2d"); 
t2.strokeStyle = 'white'
t2.moveTo(0, 0);
t2.lineTo(0, 100);
t2.lineTo(100, 100);
t2.lineTo(100, 0);
t2.stroke()

let tt3 = document.querySelector("#t3");
let t3 = tt3.getContext("2d"); 
t3.strokeStyle = 'white'
t3.moveTo(0, 0);
t3.lineTo(0, 100);
t3.lineTo(100, 100);
t3.stroke()

let tt4 = document.querySelector("#t4");
let t4 = tt4.getContext("2d"); 
t4.strokeStyle = 'white'
t4.moveTo(0, 0);
t4.lineTo(100, 0);
t4.lineTo(100, 100);
t4.lineTo(0, 100);
t4.stroke()

let tt5 = document.querySelector("#t5");
let t5 = tt5.getContext("2d"); 
t5.strokeStyle = 'white'
t5.moveTo(0, 0);
t5.lineTo(100, 0);
t5.lineTo(100, 100);
t5.lineTo(0, 100);
t5.lineTo(0, 0);
t5.stroke()

let tt6 = document.querySelector("#t6");
let t6 = tt6.getContext("2d"); 
t6.strokeStyle = 'white'
t6.moveTo(100, 0);
t6.lineTo(0, 0);
t6.lineTo(0, 100);
t6.lineTo(100, 100);
t6.stroke()

let tt7 = document.querySelector("#t7");
let t7 = tt7.getContext("2d"); 
t7.strokeStyle = 'white'
t7.moveTo(0, 0);
t7.lineTo(100, 0);
t7.lineTo(100, 100);
t7.stroke()

let tt8 = document.querySelector("#t8");
let t8 = tt8.getContext("2d"); 
t8.strokeStyle = 'white'
t8.moveTo(0, 100);
t8.lineTo(0, 0);
t8.lineTo(100, 0);
t8.lineTo(100, 100);
t8.stroke()

let tt9 = document.querySelector("#t9");
let t9 = tt9.getContext("2d"); 
t9.strokeStyle = 'white'
t9.moveTo(0, 100);
t9.lineTo(0, 0);
t9.lineTo(100, 0);
t9.stroke()


function drawX (tN) {
	tN.moveTo(10, 10);
	tN.lineTo(90, 90);
	tN.moveTo(90, 10);
	tN.lineTo(10, 90);
	tN.stroke();

	gameTurns++
	playerTurn = 'O'
	console.log(playerTurn)
	console.log(gameWin)
	p.innerText = "Vez do jogador O"
	check()
}

function drawO (tN) {
	tN.beginPath();
	tN.arc(50, 50, 40, 0, Math.PI * 2);
	tN.stroke();

	playerTurn = 'X'
	console.log(playerTurn)
	console.log(gameWin)
	p.innerText = "Vez do jogador X"
	check()
}

let playerTurn = 'O'
gameTurns = 1
let gameEnd = false
let click = []
let gameWin = []


tt1.addEventListener('click', () => {
	if(!click.includes(1)){
		if(playerTurn === 'X'){
			drawX(t1)
			click.push(1)
			gameWin[0] = "X"
		} else {
			drawO(t1)
			click.push(1)
			gameWin[0] = "O"
		}
	}
})
tt2.addEventListener('click', () => {
	if(!click.includes(2)){
		if(playerTurn === 'X'){
			drawX(t2)
			click.push(2)
			gameWin[1] = "X"
		} else {
			drawO(t2)
			click.push(2)
			gameWin[1] = "O"
		}
	}
})
tt3.addEventListener('click', () => {
	if(!click.includes(3)){
		if(playerTurn === 'X'){
			drawX(t3)
			click.push(3)
			gameWin[2] = "X"
		} else {
			drawO(t3)
			click.push(3)
			gameWin[2] = "O"
		}
	}
})
tt4.addEventListener('click', () => {
	if(!click.includes(4)){
		if(playerTurn === 'X'){
			drawX(t4)
			click.push(4)
			gameWin[3] = "X"
		} else {
			drawO(t4)
			click.push(4)
			gameWin[3] = "O"
		}
	}
})
tt5.addEventListener('click', () => {
	if(!click.includes(5)){
		if(playerTurn === 'X'){
			drawX(t5)
			click.push(5)
			gameWin[4] = "X"
		} else {
			drawO(t5)
			click.push(5)
			gameWin[4] = "O"
		}
	}
})
tt6.addEventListener('click', () => {
	if(!click.includes(6)){
		if(playerTurn === 'X'){
			drawX(t6)
			click.push(6)
			gameWin[5] = "X"
		} else {
			drawO(t6)
			click.push(6)
			gameWin[5] = "O"
		}
	}
})
tt7.addEventListener('click', () => {
	if(!click.includes(7)){
		if(playerTurn === 'X'){
			drawX(t7)
			click.push(7)
			gameWin[6] = "X"
		} else {
			drawO(t7)
			click.push(7)
			gameWin[6] = "O"
		}
	}
})
tt8.addEventListener('click', () => {
	if(!click.includes(8)){
		if(playerTurn === 'X'){
			drawX(t8)
			click.push(8)
			gameWin[7] = "X"
		} else {
			drawO(t8)
			click.push(8)
			gameWin[7] = "0"
		}
	}
})
tt9.addEventListener('click', () => {
	if(!click.includes(9)){
		if(playerTurn === 'X'){
			drawX(t9)
			click.push(9)
			gameWin[8] = "X"
		} else {
			drawO(t9)
			click.push(9)
			gameWin[8] = "O"
		}
	}
})

function isert() {
	for (let i = 0; i < 9; i++) {
		if (gameWin[i] == undefined) {
			gameWin[i] = i
		}
	}
}

function check() {
	
}
