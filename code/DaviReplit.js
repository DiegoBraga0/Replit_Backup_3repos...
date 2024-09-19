
// Replit Daiehgo - main.ts → 20/11 (Segunda → Não teve Filosofia) → Multimidia...
/*
	>>> Ajeitar → Tudo ok (INCREDITAVEL!!!)

	>>> Fazer → Adicionar oque falta de conteudo, acertar a chamar + de 1 eny nas cenas e acertar a transição entre cenas!!!

	>>>	Possiveis melhorias → Tentar melhorar o transição dos turno que tá meio meia
		> Melhorar as animções e adicionar animações dos personagens pra ataques...

	>>> Future → Ajeitas os outros leveis, transição dos leveis
		> Ajeitar a escala adaptavel da tela que é inexistente no momento kk...

	>>> BAHAHAHAHAHAHAHAHAHAHAHAHHA → Eu... Eu consegui tirar os switches cases absurdamente grandes straindo um parametro implementado no construtor da carta, simulando o que a tag faz P O G G E R S ! ! !
		> Agora é resolver essa resolução BAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHA
*/

import kaboom from "kaboom"
import "kaboom/global"

kaboom({
	font: "joystix"
})

// > Debug Output
let docs = document.querySelector("#ver-test")
// Use Example → docs.innerHTML = "<p id='ver-test'>" + "d.len:" +`${deck.length}` + "| h.len:" +`${hand.length}` +"| curDraw:" +`${curDraw}` + "</p>" // >> Debug Output

//-------------------DebugButton------------------------
function DebugButton() {
	addButton("Debug", vec2((w / 100 * 90), (h / 100 * 10)), () => {
		debugS()
		/*
		onUpdate(() => {
			if (enyHover) {
				debug.log("Hovering Enemy")
			} else if (pHover) {
				debug.log("Hovering Player")
			} else {
				debug.log("Not Hovering")
			}
		})*/
		onUpdate(() => {
			if (dHover){
				debug.log("dHover")
			} else if(gHover) {
				debug.log("gHover")
			} else {
				debug.log("Not Hovering")
			}
		})
	})
}	

function debugS(){ // Ativa || Desativa o debug mode
	if (!debug.inspect){
		debug.inspect = true
	} else {
		debug.inspect = false
	}
}

//-------------------Variaveis--------------------------

//-----Resolution-----
let w = window.innerWidth;
let h = window.innerHeight;

//-----Card System Vars-----
let isDrag = true
let curDraggin = null
let curDraw = null
let curShuffle = null

let hSlotA = false
let hSlotB = false
let hSlotC = false
let hSlotD = false
let hSlotE = false
let hSlotF = false
let hSlotG = false	
let hSlotH = false
let hSlotI = false
let sDraw = true
let a = false

let deckOn = false
let graveOn = false
let dHover = false
let gHover = false
//-----Game vars-----
let Turno
let Mana
let enyHover = false;
let enyAtk = false;
let pHover = false;
let pAtk = false;
let sCard = false;
let pBuff = false
let eBuff = false

let Player, Eny1, healthbar, healthbarP, NumeroVidaE, NumeroVidaP, Dano, DanoP, MxP, MxE, NumEnemy, NumCards;
let PowerBuff
let sWait, sEffect, sHeal, sAtk
let iconAtk, iconWait, iconEffect, iconHeal, iconMana

//-----Cartas-----
let CartaHit, CartaBurn, CartaHeal;
let deck = [], hand = [], grave = [], deadZone = []
let Hit, Burn, Heal, Buff, Fire, Fira,Water, Claw, Ice, Earth, Wind, Light, Dark, Shadow, Lightning;
let Player_Dano_Burn, Player_Dano_Sang, ConstBurn = 1, ConstSang = 1
let BurnEfect = 0, BurnEfect_Dano = 0, SangEfect = 0, SangEfect_Dano = 0 

//-----Cards Cooldown-----
let cooldownHeal = 0, cooldownBurn = 0

//-----Character Vars-----
let PLAYER_DANO = 6
let PLAYER_HEALTH = 300
let ENY1_HEALTH = 200
let ENY1_DANO = 5
//-----ConstsPos-----
let C1, C2, C3, C4, C5, C6, C7, C8
const handPositions = [
	C1 = make([
		pos(w / 100 * 21, h / 100 * 82),
		"C1"
	]),
	C2 = make([
		pos(w / 100 * 29, h / 100 * 82),
		"C2"
	]),
	C3 = make([
		pos(w / 100 * 37, h / 100 * 82),
		"C3"
	]),
	C4 = make([
		pos(w / 100 * 45, h / 100 * 82),
		"C4"
	]),

	C5 = make([
		pos(w / 100 * 53, h / 100 * 82),
		"C5"
	]),

	C6 = make([
		pos(w / 100 * 61, h / 100 * 82),
		"C6"
	]),

	C7 = make([
		pos(w / 100 * 65, h / 100 * 82),
		"C7"
	]),

	C8 = make([
		pos(w / 100 * 72.5, h / 100 * 82),
		"C8"
	]),
]

let G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12, G13, G14, G15
const gravePos = [
	G1 = make([
		pos(w / 100 * 32, h / 100 * 22),
		"G1"
	]),
	G2 = make([
		pos(w / 100 * 40, h / 100 * 22),
		"G2"
	]),
	G3 = make([
		pos(w / 100 * 48, h / 100 * 22),
		"G3"
	]),
	G4 = make([
		pos(w / 100 * 56, h / 100 * 22),
		"G4"
	]),

	G5 = make([
		pos(w / 100 * 64, h / 100 * 22),
		"G5"
	]),

	G6 = make([
		pos(w / 100 * 32, h / 100 * 40),
		"G6"
	]),

	G7 = make([
		pos(w / 100 * 40, h / 100 * 40),
		"G7"
	]),

	G8 = make([
		pos(w / 100 * 48, h / 100 * 40),
		"G8"
	]),

	G9 = make([
		pos(w / 100 * 56, h / 100 * 40),
		"G9"
	]),

	G10 = make([
		pos(w / 100 * 64, h / 100 * 40),
		"G10"
	]),
]

let p1, p2, p3, e1, e2, e3, e4, e5
const pPos = [
	p1 = make([
		pos(w / 100 * 26, h / 100 * 48),
		"p1Pos",
	]),
]
const ePos = [ 
	e1 = make([
		pos(w / 100 * 76, h / 100 * 52),
		"eny1Pos",
	]),
	e2 = make([
		pos(w / 100 * 86, h / 100 * 63),
		"eny2Pos",
	]) 
]

let SlotAP, SlotBP, SlotAE, SlotBE
const SupCard = [

	SlotAP = add([
		sprite("CartaSlot"),
		pos(w / 100 * 7, h / 100 * 65),
		area(),
		anchor("center"),
		scale(2.6),
	]),
	SlotBP = add([
		sprite("CartaSlot"),
		pos(w / 100 * 12, h / 100 * 65),
		area(),
		anchor("center"),
		scale(2.6),
	]),
	SlotAE = add([
		sprite("CartaSlot"),
		pos(w / 100 * 88, h / 100 * 65),
		area(),
		anchor("center"),
		scale(2.6),
	]),
	SlotBE = add([
		sprite("CartaSlot"),
		pos(w / 100 * 93, h / 100 * 65),
		area(),
		anchor("center"),
		scale(2.6),
	]),

]

const CartasGerais = [

	CartaHit = add([
		sprite("CartaHit"),
		pos(handPositions[0].pos),
		area({
			cursor: "grab",
			shape: new Rect(vec2(0), 41.5, 53)
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		drag(),
		"CartaHit",
	]),
	CartaHeal = add([
		sprite("CartaHeal"),
		pos(handPositions[1].pos),
		area({
			cursor: "grab",
			shape: new Rect(vec2(0), 41.5, 53)
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		drag(),
		"CartaHeal",
	]),

	CartaBurn = add([
		sprite("CartaBurn"),
		pos(handPositions[2].pos),
		area({
			cursor: "grab",
			shape: new Rect(vec2(0), 41.5, 53)
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		drag(),
		"CartaBurn"
	]),
]
//-------------------Functions----------------------------

//-----Init Function-----
function start() { // > Inicializa o game
	Turno = 1
	Mana = 4
	go("menu")
} // start

//-----UI Buttons Functions-----
function addButton(txt, p, f) { // > Cria botões das telas.
	const btn = add([
		rect(100, 100, { radius: 8 }),
		pos(p),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	])

	btn.add([
		text(txt, {
			size: 13
		}),
		anchor("center"),
		color(0, 0, 0),
	])

	btn.onHoverUpdate(() => {
		const t = time() * 10
		btn.scale = vec2(1.2)
		setCursor("pointer")
	})

	btn.onHoverEnd(() => {
		btn.scale = vec2(1)
		setCursor("default")
	})

	btn.onClick(f)

	return btn

} // addButton

function addButtonSprite(SpriteName, p, f) { // Cria buttons com sprite
	const SpriteButton = add([
		sprite(SpriteName),
		pos(p),
		scale(1.6),
		anchor("center"),
		area(),
	])

	SpriteButton.onHoverUpdate(() => {
		const t = time() * 10
		SpriteButton.scale = vec2(2)
		setCursor("pointer")
	})

	SpriteButton.onHoverEnd(() => {
		SpriteButton.scale = vec2(1.6)
		setCursor("default")
	})

	SpriteButton.onClick(f)

	return SpriteButton

} // addButtonSprite

//-----Cards Functions------

// > Propiedades
function drag() { // > Drag das cartas

	//let isDrag = true // > virou variavel global(que deus o tenha!); 
	let offset = vec2(0)

	return {
		id: "drag",
		require: ["pos", "area"],
		add() {
			this.onClick(() => {
				if (curDraggin) {
					return
				}
				curDraggin = this
				offset = mousePos().sub(this.pos)
				readd(this)
				setCursor("grabbing")
			})
		},
		update() {
			if (!isDrag) {
				setCursor("default")
				return // > Se o drag estiver desativado sai da struct
			}
			if (curDraggin === this) {
				this.pos = mousePos().sub(offset)
			}
		},
		inpect() {
			return isDrag ? "on" : "off"
		},
		setDragOff() {
			isDrag = true
		},
		setDragOn() {
			isDrag = false
		},
		dragEnd() {
			if (curDraggin === this) {
				this.moveTo(handPositions[hand.indexOf(this)].pos);
				sCard = false
				setCursor("default")
			}
		},
		cardUse(){
			if (curDraggin == this) {
				Mana--;
				if (this === hand[0]) { hSlotA = false }
				else if (this === hand[1]) { hSlotB = false } 
				else if (this === hand[2]) { hSlotC = false }
				else if (this === hand[3]) { hSlotD = false }
				else if (this === hand[4]) { hSlotE = false }
				else if (this === hand[5]) { hSlotF = false }
				else if (this === hand[6]) { hSlotG = false }
				else if (this === hand[7]) { hSlotH = false }
				else if (this === hand[8]) { hSlotI = false }
				createShuffleCard(this)
				//drawCard()
				sCard = false
				setCursor("default")
				//handSplit(this) // > cardSplit existe... vamo vê depois
			}
		},
		rand(i){
			if(curDraggin === null) return
			this.moveTo(handPositions[i].pos)
			curDraggin = null
		},
	} // Return
} // drag

function draw() { // > Cartas compraveis do deck

	return {
		id: "draw",
		require: [],
		pick() {
			if(curDraw) {
				return
			}
			curDraw = this
		},
		draw() {
			if(curDraw === null) return
			if (curDraw === this) {
				createDragCard(this)
				curDraw = null
			}
		},
		show() {
			if(curDraw === null) return
			this.hidden = false
			readd(this)
			curDraw = null
		},
		hide() {
			if(curDraw === null) return
			this.hidden = true
			curDraw = null
		},
		rand(i) {
			if(curDraw === null) return
			this.moveTo(gravePos[i].pos)
			curDraw = null
		}
	} // Return
} // draw

function shuffle() { // > Cartas embaralhaveis no deck

	return {
		id: "shuffle",
		require: [],
		pick() {
			if(curShuffle) {
				return
			}
			curShuffle = this
		},
		shuffle() {
			if(curShuffle === null) return
			if(curShuffle === this) {
				createDrawCard(this)
				curShuffle = null
			}
		},
		show(){
			if(curShuffle === null) return
			this.hidden = false
			readd(this)
			curShuffle = null
		},
		hide(){
			if(curShuffle === null) return
			this.hidden = true
			curShuffle = null
		},
		rand(i){
			if(curShuffle === null) return
			this.moveTo(gravePos[i].pos)
			curShuffle = null
		},
	} // Return
} // shuffle

// > Generators
function addCardDrag(S) { // Cria e retorna cards com drag com >> S: sprite

	let Card = add([
		sprite(S),
		pos(),
		area({
			/*cursor: "grab",*/
			shape: new Rect(vec2(0), 41.5, 53),
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		drag(),
		{
			name: `${S}`,
		}
	])

	Card.onHover(() => {
		setCursor("grab")
	})

	Card.onHoverEnd(() => {
		setCursor("default")
	})

	return Card
} // addCard

function addCardDraw(S) { // Cria e retorna cards com draw com >> S: sprite
	let Card = add([
		sprite(S),
		pos(),
		area({
			/*cursor: "grab",*/
			shape: new Rect(vec2(0), 41.5, 53),
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		draw(),
		{
			name: `${S}`,
		}
	])

	Card.onHoverEnd(() => {
		setCursor("default")
	})

	return Card
} // addCardDraw

function addCardShuffle(S) { // Cria e retorna cards com shuffle com >> S: sprite
	let Card = add([
		sprite(S),
		pos(),
		area({
			/*cursor: "grab",*/
			shape: new Rect(vec2(0), 41.5, 53),
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		shuffle(),
		{
			name: `${S}`,
		}
	])

	Card.onHoverEnd(() => {
		setCursor("default")
	})

	return Card
} // addCardShuffle

// > Organizer
function handCard(card) {
	let ind = deck.indexOf(card)
	deck.splice(ind, 1)
	if (!hSlotA) { card.moveTo(handPositions[0].pos); hSlotA = true; hand[0] = card }
	else if (!hSlotB) { card.moveTo(handPositions[1].pos); hSlotB = true; hand[1] = card }
	else if (!hSlotC) { card.moveTo(handPositions[2].pos); hSlotC = true; hand[2] = card }
	else if (!hSlotD) { card.moveTo(handPositions[3].pos); hSlotD = true; hand[3] = card }
	else if (!hSlotE) { card.moveTo(handPositions[4].pos); hSlotE = true; hand[4] = card }
	else if (!hSlotF) { card.moveTo(handPositions[5].pos); hSlotF = true; hand[5] = card }
	else if (!hSlotG) { card.moveTo(handPositions[6].pos); hSlotG = true; hand[6] = card }
	else if (!hSlotH) { card.moveTo(handPositions[7].pos); hSlotH = true; hand[7] = card }
	else if (!hSlotI) { card.moveTo(handPositions[8].pos); hSlotI = true; hand[8] = card }
	readd(card)
} // handCard

function deckCard(card) {
	card.hidden = true
	let ind = grave.indexOf(card)
	grave.splice(ind, 1)
	deck.push(card)
	IndexD = deck.length - 1
	card.moveTo(gravePos[IndexD].pos)
	readd(card)
} // deckCard

function graveCard(card) {
	card.hidden = true
	if(!hSlotA) { delete hand[0] }
	if(!hSlotB) { delete hand[1] }
	if(!hSlotC) { delete hand[2] }
	if(!hSlotD) { delete hand[3] }
	if(!hSlotE) { delete hand[4] }
	if(!hSlotF) { delete hand[5] }
	if(!hSlotG) { delete hand[6] }
	if(!hSlotH) { delete hand[7] }
	if(!hSlotI) { delete hand[8] }
	grave.push(card)
	card.moveTo(gravePos[grave.length - 1].pos)
	readd(card)
} // graveCard

// > Creators
function createDragCard(Card) {
	destroy(Card)
	Card = addCardDrag(`${Card.name}`)
	handCard(Card)
} // createDragCard

function createDrawCard(Card) {
	destroy(Card)
	Card = addCardDraw(`${Card.name}`)
	deckCard(Card)
} // createDrawCard

function createShuffleCard(Card) {
	destroy(Card)
	Card = addCardShuffle(`${Card.name}`)
	graveCard(Card)
} // createShuffleCard

// > Manipulations
function drawCard() {
	wait(0.1, () => {
		if(sDraw){
			if (deck.length > 0 ) {
					if (Mana > 0 ) {
						if(hand.length <= 5) {
							curDraw = deck[deck.length - 1]
							curDraw.hidden = false
							curDraw.draw()
						} else {
							createShuffleCard(hand[0])
							hand.splice(0,1)
							wait(0.1, () => {
								for(let i = 0 ; i < hand.length; i++){
									curDraggin = hand[i]
									curDraggin.rand(i)
									if(i == hand.length - 1){
										hSlotF = false
									}
								}
								curDraw = deck[deck.length - 1]
								curDraw.hidden = false
								curDraw.draw()
							})					
						}
					} else if (Mana === 0) {
						curDraw = deck[deck.length - 1]
						curDraw.hidden = false
						curDraw.draw()
						Mana--;
					}
			} else {
				for (let i = grave.length -1; i >= 0; i--){
					shuffleCard()
				}
				drawCard()
			} // else (deck.length > 0)
		} // if(sDraw)
	}) // wait
} // drawCard

function shuffleCard() {
	if(grave.length > 0) {
		curShuffle = grave[grave.length - 1]
		curShuffle.shuffle()
	} else { debug.log('Sem cartas para embaralhar') } // else
} // shuffle Card

function splitCards(arr) { // > Embaralha as posições das cartas no deck ou no cemiterio toda vez que vc vê eles
	arr.sort(function(){return 0.5 - Math.random()});

	if (arr === deck) {
		for (let i = 0; i < deck.length; i++) {
			curDraw = deck[i]
			curDraw.rand(i)
		}
	} 
	else if (arr === grave) {
		for (let i = 0; i < grave.length; i++) {
			curShuffle = grave[i]
			curShuffle.rand(i)
		}
	}
	else if (arr === hand) {
		for (let i = 0; i < hand.length; i++) {
			curDraggin = hand[i]
			curDraggin.rand(i)
		}
	}

}

// Non Cards Functions

// > Enemy Functions
function InimigoTurn() { // Turno do inimigo

	let EnyRate = rand(1, 100) //> gera um numero entre 1 e 100
	//const EnyRate = 80 //> Testar ações especificas

	//-----Wait-----
	if (EnyRate <= 2) { // 2% de chance de ele esperar
		//---------Esse espera vai ser trocado pra Buff(Em breve....)------------------

		sWait = true // > bolleano pra confirmar que a ação
		iconWait = add([
			sprite("espera"),
			pos(w / 100 * 76, h / 100 * 39),
			anchor("center"),
			scale(1),
		])

		EnyActions()
	}
	//-----Heal-----
	else if (2 < EnyRate && EnyRate <= 10) { // 8% de chance de ele healar
		let healPoint = ENY1_HEALTH - Eny1.hp()  // Variavel pra checar a vida perdida
		if (healPoint >= 8) { // Ele vai healar se ele tiver perdido ao menos 8 de vida
			sHeal = true // > bolleano pra confirmar que a ação
			iconHeal = add([
				sprite("cura", {
					anim: "idle"
				}),
				pos(w / 100 * 76, h / 100 * 36),
				anchor("center"),
				scale(1.5)
			])
			debug.log("Heal")
			EnyActions()

		} else { //> Se ele ta com a vida cheia ele ataca em vez de healar  
			sAtk = true // > bolleano pra confirmar que a ação
			iconAtk = add([
				sprite("Atk"),
				pos(w / 100 * 76, h / 100 * 39),
				anchor("center"),
				scale(1)
			])

			debug.log("Attack")
			EnyActions()
		}
	}
	//-----Efeitos------
	else if (10 < EnyRate && EnyRate <= 18) { // 8% de chance de ele aplicar efeito
		//--------Efeito tá pra ajeitar ainda--------------
		sEffect = true
		iconEffect = add([
			sprite("efeito"),
			pos(w / 100 * 76, h / 100 * 39),
			anchor("center"),
			scale(1)
		])

		debug.log("Efeito");
		EnyActions()
	}
	//-----Atk------
	else { // Atk caso não seja nenhum dos outros e com a maior porcentagem(82%)
		sAtk = true // > bolleano pra confirmar que a ação
		iconAtk = add([
			sprite("Atk"),
			pos(w / 100 * 76, h / 100 * 39),
			anchor("center"),
			scale(1)
		])

		debug.log("Attack") 
		EnyActions()
	}

} // InimigoTurn

function enemyPass() { // Trocar do turno do inimigo pro turno do player

	const eTurnA = add([
		text("Player", { size: 70 }),
		pos(w / 100 * 65, h/100*40),
		anchor("center"),
		color(0, 0, 0),
		outline(2),
		move(LEFT, 350),
		lifespan(1.5 , {fade: 0.5}),
	])

	const eTurnB = add([
		text("Turn", { size: 70 }),
		pos(w/100*65, h/100*50),
		anchor("center"),
		color(0, 0, 0),
		move(LEFT, 350),
		lifespan(1.5 , {fade: 0.5}),
	])

	wait(1.8, () => {
		Turno = 1
		curDraggin = null
		Mana = 4
		setTimeout(InimigoTurn, 100)
	})
} // enemyPass

function AnimActs(target) { // Criar os sprites com animação do NumLog

	if(target == "pA"){
		let pHitEff = add([
			sprite("PlayerHit", {
				anim: "idle"
			}),
			pos(Eny1.pos),
			area(),
			anchor("center"),
			scale(2),
			lifespan(0.8 , {fade: 0.5}),
		])	
	} else if (target == "p"){

	} else if (target == "eA"){
		let enyHitEff = add([
			sprite("MouseHit", {
				anim: "idle"
			}),
			pos(Player.pos),
			anchor("center"),
			scale(2),
			lifespan(0.8, {fade:0.5}),
		])
	} else if (target == "e"){

	}
} // AnimActs

function EnyActions() { // Ações do inimigo
	onUpdate(() => {
		if (Turno == 2 && sWait) {
			destroy(iconWait)
			sWait = false
			enemyPass()
		}
		if (Turno == 2 && sHeal) {
			//---Acão---
			let MaxHealE = ENY1_HEALTH - Eny1.hp() // > Checar a vida perdida
			pAtk = true
			enyAtk = true
			if (MaxHealE <= 9) { // > Se a vida perdida é menor que 10 só vai ser healado ate a vida maxima
				Eny1.heal(MaxHealE)
				NumLog(MaxHealE)
			}
			else {
				Eny1.heal(10)
				NumLog(10)
			}
			destroy(iconHeal)
			//---Resetando o Turno---
			sHeal = false
			enemyPass()
		}
		if (Turno == 2 && sAtk) { // > Se é o turno do inimigo(vc tem 3 turnos) && se a ação é atk
			//---Acão---
			Player.hurt(ENY1_DANO)
			enyAtk = true
			NumLog(ENY1_DANO)
			enyAtk = false
			destroy(iconAtk)
			//---Resetando o Turno---
			sAtk = false
			enemyPass()
		}
		if (Turno == 2 && sEffect) {
			const efeitos = [
				"-dano", "ferido", "-turno"
			]
			const efeitoE = choose(efeitos)
			switch (efeitoE) {
				case "-dano":
					PLAYER_DANO = PLAYER_DANO - PLAYER_DANO / 2
					break;
				case "ferido":
					Player.hurt(PLAYER_DANO)
					break;
				case "-turno":
					Turno = Turno - 1
					break;
			}
			destroy(iconEffect)
			sEffect = false
			enemyPass()
	}
	})
} // EnyActions

// > Combat Things
function PassTurn(){// Passar o turno pro inimigo

	PowerBuff = 1

	if (ConstBurn == 3){
		debug.log("ehhh")
		BurnEfect = 0
		ConstBurn = 1
	} else{
		debug.log("ohhh")
		ConstBurn++
	}
	Eny1.hurt(BurnEfect)

	if (ConstSang == 3){
		debug.log("ehhh")
		SangEfect = 0
		ConstSang = 1
	} else{
		debug.log("ohhh")
		ConstSang++
	}
	Eny1.hurt(SangEfect)

	const eTurnA = add([
		text("Enemy", { size: 70 }),
		pos(w / 100 * 65, h/100*40),
		anchor("center"),
		color(0, 0, 0),
		outline(2),
		move(LEFT, 350),
		lifespan(1.5 , {fade: 0.5}),
	])

	const eTurnB = add([
		text("Turn", { size: 70 }),
		pos(w/100*65, h/100*50),
		anchor("center"),
		color(0, 0, 0),
		move(LEFT, 350),
		lifespan(1.5 , {fade: 0.5}),
	])

	wait(1.8, () => {
		Turno = 2
	})
} // PassTurn

function ManaActions() { // Comente isso Davi 
	onUpdate(() => {
		if (Mana == 0) {
			isDrag = false
			iconMana.use(sprite('Mana0'))
		}
		if (Mana == 4){
			isDrag = true
			iconMana.use(sprite('Mana'))
		}
	})
} // ManaActions

function NumLog(Number) { // Logs numéricos das ações do player e do enemy
	let TxtN = Number.toString()

	if(pAtk && !enyAtk) { // Player Atk
		let LogDmg = add([
			text("-" + TxtN),
			pos(w / 100 * 76, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(255, 0, 0),
			lifespan(0.8, { fade: 0.5 }),
		])	
		AnimActs("pA")
		pAtk = false
	} else if(!pAtk && !enyAtk && !pBuff) { // Player Heal
		let LogHeal = add([
			text("+" + TxtN),
			pos(w / 100 * 26, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(0, 255, 0),
			lifespan(0.8, { fade: 0.5 }),
		])
	} else if(!pAtk && !enyAtk && pBuff) { // Player Heal
		let LogBuff = add([
			text("+" + TxtN),
			pos(w / 100 * 26, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(0, 0, 255),
			lifespan(0.8, { fade: 0.5 }),
		])
	} else if (enyAtk && !pAtk) { // Enemy Atk
		let LogEDmg = add([
			text("-" + TxtN),
			pos(w / 100 * 26, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(255, 0, 0),
			lifespan(0.8, { fade: 0.5 }),
		])
		AnimActs("eA")
		enyAtk = false
	} else if (enyAtk && pAtk) { // Enemy Heal
		let LogEHeal = add([
			text("+" + TxtN),
			pos(w / 100 * 76, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(0, 255, 0),
			lifespan(0.8, { fade: 0.5 }),
		])

		enyAtk = false
		pAtk = false
	}
} // NumLog

function Combat() { // Sistema principal de combate

	PowerBuff = 1

	onKeyRelease("d", () => { // Compra cartas com d
		drawCard()
	})

	onKeyRelease("q", () => { // Ativa o Degub Mode com q
		debugS()
	})

	onKeyRelease("m", () => { // Reorganiza a mão kk
		splitCards(hand);
	})

	onKeyRelease("f", () => { // Debug Output no canto superior da tela com f
		onUpdate(() => { // Checar as cartas AAAAAAAAAAAAAAAAAAA!
			docs.innerHTML = // >> Debug Output
				"<p id='ver-test'>" 
				+ "d.len:" + `${deck.length}` 
				+ " || h.len:" +`${hand.length}` 
				+ " || g.len:" +`${grave.length}` 
				+ " || Mana:" +`${Mana}` 
				+ " || Turno:" +`${Turno}` 
				+ " || SlotA:" +`${hSlotA}`
				+ " || SlotB:" +`${hSlotB}`
				+ " || SlotC:" +`${hSlotC}`
				+ " || SlotD:" +`${hSlotD}`
				+ " || SlotE:" +`${hSlotE}`
				+ " || SlotF:" +`${hSlotF}`
				+ " || A:" +`${a}`
				+ "</p>" 
		})
	})

	InimigoTurn() //

	ManaActions()

	onClick(() => {
		wait(0.1, () => {
			if(curDraggin !== null) {
				if(curDraggin.name == "CartaHeal"){
					sCard = true
				} else if (curDraggin.name == "CartaBuff") {
					sCard = true 
				}
			}
		})
	})

	onMouseRelease(() => { // > Quando solta o mouse

		if(!isDrag) { // Se o Drag estiver desligado
			return
		}

		if (curDraggin) { // > Se tem algo no draggin

			if (curDraggin.name == "CartaHit") {
				pAtk = true // > Vat pra checar o NumLog > Log do dano/heal
				if (enyHover) { //> Card Action
					debug.log("Damaged");
					let Player_Dano_Buff = (PLAYER_DANO / 2) * PowerBuff
					Eny1.hurt(Player_Dano_Buff);
					NumLog(Player_Dano_Buff);
					curDraggin.cardUse();
				} else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Hit
			if (curDraggin.name == "CartaHeal") {
				if (pHover) {
					if (Player.hp() == PLAYER_HEALTH) {
						debug.log("Vida Cheia");
						curDraggin.dragEnd()
					}
					else {
						pAtk = false
						let MaxHeal = PLAYER_HEALTH - Player.hp() // > Checar a vida perdida
						if (MaxHeal <= 9) { // > Se a vida perdida é menor que 10 só vai ser healado ate a vida maxima
							Player.heal(MaxHeal)
							NumLog(MaxHeal)
							curDraggin.cardUse()
						}
						else {
							Player.heal(10)
							NumLog(10)
							curDraggin.cardUse()
						}
					} // else
				} // pHover 
				else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Heal
			if (curDraggin.name == "CartaBurn") {
				pAtk = true
				if (enyHover) {
					debug.log("Burning");
					Player_Dano_Burn = ((PLAYER_DANO / 2) - 1) * PowerBuff
					Eny1.hurt(Player_Dano_Burn)
					NumLog(Player_Dano_Burn)
					BurnEfect_Dano = Player_Dano_Burn
					BurnEfect = BurnEfect + BurnEfect_Dano
					ConstBurn = ConstBurn - 1
					enyHover = false
					curDraggin.cardUse();
				} else {// enyHover
				curDraggin.dragEnd()
				}
			} // curDraggin == Burn
			if (curDraggin.name == "CartaBuff") {
				pAtk = false // 
				if (pHover) { //> Card Action
					PowerBuff = PowerBuff * 2
					debug.log("Power Buff");
					NumLog(PowerBuff)
					curDraggin.cardUse();

				} else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Buff
			if (curDraggin.name == "CartaFire") {
				pAtk = true // 
				if (enyHover) { //> Card Action
					debug.log("Burning");
					Player_Dano_Burn = ((PLAYER_DANO / 2) - 1) * PowerBuff
					Eny1.hurt(Player_Dano_Burn)
					NumLog(Player_Dano_Burn)
					BurnEfect_Dano = Player_Dano_Burn
					BurnEfect = BurnEfect + BurnEfect_Dano
					ConstBurn = ConstBurn - 1
					enyHover = false
					curDraggin.cardUse();
				} else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Fire
			if (curDraggin.name == "CartaFira") {
				pAtk = true // 
				if (enyHover) { //> Card Action
					Player_Dano_Burn = ((PLAYER_DANO / 2) - 1) * PowerBuff
					BurnEfect_Dano = Player_Dano_Burn
					BurnEfect = BurnEfect + BurnEfect_Dano
					ConstBurn = ConstBurn - 1
					enyHover = false
					curDraggin.cardUse();
				} else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Fira
			if (curDraggin.name == "CartaWater") {
				pAtk = true // 
				if (enyHover) { //> Card Action
					debug.log("Damaged");
					let Player_Dano_Buff = PLAYER_DANO * PowerBuff
					Eny1.hurt(Player_Dano_Buff);
					NumLog(Player_Dano_Buff);
					curDraggin.cardUse();
				} else {
					curDraggin.dragEnd()
				}
			} // curDraggin == Water

			if (curDraggin.name == "CartaClaw") {
				pAtk = true // 
				if (enyHover) {
					Player_Dano_Sang = ((PLAYER_DANO / 2) - 1) * PowerBuff
					Eny1.hurt(Player_Dano_Sang)
					NumLog(Player_Dano_Sang)
					SangEfect_Dano = Player_Dano_Sang
					SangEfect = SangEfect + SangEfect_Dano
					ConstSang = ConstSang - 1
					enyHover = false
					curDraggin.cardUse()
				}else {
					curDraggin.dragEnd()
				}
			}//curDraggin == claw

			curDraggin = null // > Soltar a carta após usar

		} // curDraggin
	}) // onMouseRelease

} // Combat

// > Recursos

function TextBox(){

	const textbox = add([
		rect(width() - 200, 120, { radius: 6 }),
		anchor("center"),
		pos(w / 100 * 32, h / 100 * 40),
		outline(8),
	])

	// Text
	const txt = add([
		text("", { size: 32, width: width() - 230, align: "center" }),
		pos(textbox.pos),
		anchor("center"),
		color(0, 0, 0),
	])

}

function addEnemy(spr, i) {

	MxE = ENY1_HEALTH

	Eny1 = add([
		sprite(spr),
		health(ENY1_HEALTH),
		pos(ePos[i].pos),
		area({
			scale: 0.6,
		}),
		scale(3),
		anchor(vec2(0.01, -0.1)),
		"Eny1",
	])

	Eny1.onHoverUpdate(() => {
		enyHover = true
		if (curDraggin) {
			if (!sCard) {
				setCursor("crosshair")
			}
			else if(sCard){
				setCursor("no-drop")
			}
		}
	})

	Eny1.onHoverEnd(() => {
		enyHover = false
		if (curDraggin) {
			setCursor("grabbing")
		}
	})

	Eny1.onHurt(() => {
		Eny1Hurt = true;
		healthbar.set(Eny1.hp())
		NumeroVidaE.onUpdate(() => {
			if(Eny1.hp() < 0){
				NumeroVidaE.text = 0 + "/" + ENY1_HEALTH
			} else {
				NumeroVidaE.text = Eny1.hp() + "/" + ENY1_HEALTH
			}
		})
	})

	healthbar = add([
		rect(140, 20, { radius: 8 }),
		pos((w / 100 * 71.5) + 2, h / 100 * 41.5),
		color(107, 201, 108),
		anchor("left"),
		{
			max: ENY1_HEALTH,
			set(hp) {
				this.width = 140 * hp / this.max
				this.flash = true
			},
		},
	])

	if (healthbar.flash) {
		healthbar.color = rgb(255, 255, 255)
		healthbar.flash = false
	} else {
		healthbar.color = rgb(127, 255, 127)
	}

	NumeroVidaE = add([
		text(ENY1_HEALTH + "/" + MxE, { size: 16 }),
		pos(healthbar.pos),
		anchor("left"),
		color(0, 0, 0),
	])

}

/*function addEnemy2(spr, i) {

	MxE = ENY1_HEALTH

	Eny1 = add([
		sprite(spr),
		health(ENY1_HEALTH),
		pos(ePos[i].pos),
		area({
			scale: 0.6,
		}),
		scale(3),
		anchor(vec2(0.01, -0.1)),
		"Eny1",
	])

	Eny1.onHoverUpdate(() => {
		enyHover = true
		if (curDraggin) {
			if (!sCard) {
				setCursor("crosshair")
			}
			else if(sCard){
				setCursor("no-drop")
			}
		}
	})

	Eny1.onHoverEnd(() => {
		enyHover = false
		if (curDraggin) {
			setCursor("grabbing")
		}
	})

	Eny1.onHurt(() => {
		Eny1Hurt = true;
		healthbar.set(Eny1.hp())
		NumeroVidaE.onUpdate(() => {
			if(Eny1.hp() < 0){
				NumeroVidaE.text = 0 + "/" + ENY1_HEALTH
			} else {
				NumeroVidaE.text = Eny1.hp() + "/" + ENY1_HEALTH
			}
		})
	})

	healthbar = add([
		rect(140, 20, { radius: 8 }),
		pos((w / 100 * 78) + 2, h / 100 * 56),
		color(107, 201, 108),
		anchor("left"),
		{
			max: ENY1_HEALTH,
			set(hp) {
				this.width = 140 * hp / this.max
				this.flash = true
			},
		},
	])

	if (healthbar.flash) {
		healthbar.color = rgb(255, 255, 255)
		healthbar.flash = false
	} else {
		healthbar.color = rgb(127, 255, 127)
	}

	NumeroVidaE = add([
		text(ENY1_HEALTH + "/" + MxE, { size: 16 }),
		pos(healthbar.pos),
		anchor("left"),
		color(0, 0, 0),
	])

}*/

function addPlayer(spr, i) {
	MxP = PLAYER_HEALTH

	Player = add([
		sprite(spr),
		health(PLAYER_HEALTH),
		pos(pPos[i].pos),
		scale(2.8),
		anchor(vec2(0, 0.01)),
		area({
			scale: 0.7,
		}),
		"Player1"
	])

	healthbarP = add([
		rect(140, 20, { radius: 8 }),
		pos((w / 100 * 21), h / 100 * 37.5),
		color(107, 201, 108),
		anchor("left"),
		{
			max: PLAYER_HEALTH,
			set(hp) {
				this.width = 140 * hp / this.max
				this.flash = true
			},
		},
	])

	NumeroVidaP = add([
		text(PLAYER_HEALTH + "/" + MxP, { size: 16 }),
		pos(w / 100 * 25.6, h / 100 * 37.5),
		anchor("center"),
		color(0, 0, 0),
	])

	onUpdate(() => {
		if (healthbarP.flash) {
			healthbarP.color = rgb(255, 255, 255)
			healthbarP.flash = false
		} else {
			healthbarP.color = rgb(127, 255, 127)
		}
	})

	Player.onHoverUpdate(() => {
		pHover = true
		if (curDraggin) {
			if (sCard) { setCursor("crosshair") } else { setCursor("no-drop") }
		}
	})

	Player.onHoverEnd(() => {
		pHover = false
		if (curDraggin) { setCursor("grabbing") }
	})

	Player.onHurt(() => {
		healthbarP.set(Player.hp())
		NumeroVidaP.onUpdate(() => { NumeroVidaP.text = Player.hp() + "/" + PLAYER_HEALTH })
	})

}

function addHand() { // Adiciona grande parte dos elementos a cena

	const hand = add([
		pos(w / 100 * 50, h / 100 * 85),
		rect((w / 100 * 70), h / 100 * 27, { radius: 8 }),
		anchor("center"),
		outline(4),
		color(10, 10, 10),
	])

	iconMana = add([ // Sprite da mana kk
		sprite("Mana"),
		pos(w/100*19, h/100*66),
		scale(2.5),
		anchor("center"),
		"mana",
	])

	const manaTxt = add([
		text(Mana, {
			size: 30
		}),
		pos(iconMana.pos),
		anchor(vec2(0.1, -0.18)),
		color(240, 248, 255),
	])

	manaTxt.onUpdate(() => {
		if(Mana < 0) { manaTxt.text = "0" } else { manaTxt.text = `${Mana}` }
	})

} // ADDGeral

function InitHand() {

	Hit = addCardShuffle("CartaHit")
	graveCard(Hit)
	Heal = addCardShuffle("CartaHeal")
	graveCard(Heal)
	Burn = addCardShuffle("CartaBurn")
	graveCard(Burn)
	Buff = addCardShuffle("CartaBuff")
	graveCard(Buff)
	Fira = addCardShuffle("CartaFira")
	graveCard(Fira)
	Water = addCardShuffle("CartaWater")
	graveCard(Water)
	Fire = addCardShuffle("CartaFire")
	graveCard(Fire)
	Claw = addCardShuffle("CartaClaw")
	graveCard(Claw)

	for (let i = grave.length -1; i >= 0; i--){
		shuffleCard()
	}

	for (let i = 0; i < 4; i++) {
		wait(0.2, () => {  })
	}
	// Esses delays pq o controle de fluxo do Draw() barra as compras se for as 4 de uma vez, fazendo ir só uma mesma a funcção executando 4 vezez;
	for (let i = 0; i < 5; i++){
			wait(0.2, () => { 
				splitCards(deck)
				wait(0.1, () => { drawCard() })
			})
	}
} // InitHand

function DecknGrave() {
	//Deck
	let deckMenu = add([ // > Deck
		rect((w / 100 * 50), h / 100 * 80, { radius: 8 }),
		pos(w / 2, h / 2),
		area(),
		anchor("center"),
		outline(4),
		color(255, 255, 255),
	])
	deckMenu.hidden = true

	deckMenu.onHoverUpdate(() => {
		dHover = true
	})
	deckMenu.onHoverEnd(() => {
		dHover = false
	})

	wait(0.1, () => {
		onClick(() => {
			if (deckOn) {
				if (!dHover){
					deckMenu.hidden = true
					deckOn = false	
					hideD()
				}
			}
		})
	})

	let DeckButton = addButton("D", vec2(w / 100 * 7, h / 100 * 82), () => { // btn pra acessar o deck
		if (deckMenu.hidden) {
			readd(deckMenu)
			deckMenu.hidden = false	
			wait(0.1, () => {
				deckOn = true	
			})
			showD()
		} else {
			deckMenu.hidden = true
			deckOn = false
			hideD()
		}
	})
	//Grave
	let graveMenu = add([ // > Grave
		rect((w / 100 * 50), h / 100 * 80, { radius: 8 }),
		pos(w / 2, h / 2),
		area(),
		anchor("center"),
		outline(4),
		color(255, 255, 10),
	])
	graveMenu.hidden = true

	graveMenu.onHoverUpdate(() => {
		gHover = true
	})
	graveMenu.onHoverEnd(() => {
		gHover = false
	})

	wait(0.1, () => {
		onClick(() => {
			if (graveOn) {
				if (!gHover){
					graveMenu.hidden = true
					graveOn = false
					hideG()
				}
			}
		})
	})	

	let GrvyButton = addButton("G", vec2(w / 100 * 93, h / 100 * 82), () => { // btn pra acessar o grave
		// >> hide and show grave menu
		if (graveMenu.hidden) {
			readd(graveMenu)
			graveMenu.hidden = false	
			wait(0.1, () => {
				graveOn = true	
			})
			showG() // >> Show hidden grave cards
		} else {
			graveMenu.hidden = true
			graveOn = false
			hideG()
		}
	})

} // DecknGrave

function showD() {
	for(let i = 0; i < deck.length; i++){
		curDraw = deck[i]
		curDraw.show()
	}
} // showD
function hideD() {
	for(let i = 0; i < deck.length; i++){
		curDraw = deck[i]
		curDraw.hide()
	}
	splitCards(deck)
} // hideD
function showG() {
	for(let i = 0; i < grave.length; i++){
		curShuffle = grave[i]
		curShuffle.show()
	}
} // showG
function hideG() {
	for(let i = 0; i < grave.length; i++){
		curShuffle = grave[i]
		curShuffle.hide()
	}
	splitCards(grave)
} // hideG

//--------------------Cenas----------------------------
scene("Lv1", () => { // Cena 1 ou Lv1

	setCursor("default")

	const Lv1Background = add([
		sprite("Lv1", { width: width(), height: height() }),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

	DebugButton()

	/*
	const battleCard1 = add([
		rect((w / 100 * 20), h / 100 * 27, { radius: 8 }),
		pos(w / 100 * 25, h / 100 * 10),
		anchor("center"),
		outline(4),
		color(10, 10, 10),
	])
	const battleCard2 = add([
		rect((w / 100 * 20), h / 100 * 27, { radius: 8 }),
		pos(w / 100 * 50, h / 100 * 10),
		anchor("center"),
		outline(4),
		color(10, 10, 10),
	])
	const battleCard3 = add([
		rect((w / 100 * 20), h / 100 * 27, { radius: 8 }),
		pos(w / 100 * 75, h / 100 * 10),
		anchor("center"),
		outline(4),
		color(10, 10, 10),
	])
	*/
	/* // > Kk em manutensão pq quebra o código
	addButton("Draw", vec2(w / 100 * 90, h / 100 * 25), () => {
		drawCard()
	});
	*/

	addButton("Pass", vec2(w / 100 * 7, h / 100 * 30), () => {
		PassTurn()
	});

	addHand()
	InitHand()
	addEnemy("Rato", 0);
	//addEnemy2("Rato", 1);
	addPlayer("Hero", 0);
	// > Tests de Heal

	Eny1.onUpdate(() => {
		if (Eny1.hp() <= 0) {
			let tCards = grave.length + deck.length
			destroy(Eny1);

			wait(0.3, () => {
				for (let i = 0; i < hand.length; i++) {
					if(hand[i] !== undefined){
						wait(0.2, () => { 
							curDraggin = hand[i]
							createShuffleCard(curDraggin); 
							if(i == hand.length - 1){
								curDraggin = null
							}
						})
					}
				}
			})
			Mana = 4;
			Turno = 1;
			sCard = false
			onUpdate(() => {
				if(grave.length + deck.length == tCards) { go("Itens"); }
			})

		}
	})

	Combat()
	DecknGrave()
})// Lv1

scene("Lv2", () => { // Cena 2 ou Lv2

	Mana = 4
	Turno = 1  
	sCard = false

	setCursor("default")

	const Lv2Paredes = add([
		sprite("Lv2A", { width: width(), height: height() }),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

	const Lv2Fundo = add([
		sprite("Lv2B"),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

	DebugButton()

	addButton("Pass", vec2(w / 100 * 7, h / 100 * 30), () => {
		PassTurn()
	});

	addHand()
	hand.splice(0, hand.length - 1)

	for (let i = 0; i < 5 ; i++) {
		wait(0.2, () => { drawCard() })	
	}

	addEnemy("phantomKnight", 0);
	addPlayer("Hero", 0);
	// > Tests de Heal
	Player.hurt(100);
	Eny1.hurt(190);
	Combat()
	DecknGrave()
}) // Lv2

scene("Lv3", () => {
	Mana = 4
	Turno = 1  
	sCard = false

	setCursor("default")
})

scene("menu", () => { // Cena Menu

	const BackMenu = add([
		sprite("MainMenu", { width: width() + 75, height: height() }),
		scale(1),
		pos((w / 2) + 28, h / 2),
		anchor("center"),
	])

	const Grail = add([
		sprite("Grail"),
		scale(3),
		pos(w / 2, h / 100 * 15),
		anchor("center"),

	])

	DebugButton()

	addButtonSprite("Start", vec2(w / 2, h / 100 * 65), () => go("Lv1"));
	addButtonSprite("Settings", vec2(w / 2, h / 100 * 76), () => debug.log(
		"Configurações em breve..."
	));
	addButtonSprite("About", vec2(w / 2, h / 100 * 87), () => debug.log(
		"Criado pela Equipe RockSolid. Fabio -> Art Director, Programmer, Game Design; Diego -> Programmer; Davi -> Programmer"
	));

}) // menu

scene("Itens", () => { // cena AreaItens

	const AreaItens = add([
		sprite("areaItens", {
			width: width(), height: height()
		}),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

	curDraggin = null;
	hSlotA = false
	hSlotB = false
	hSlotC = false
	hSlotD = false
	hSlotE = false
	hSlotF = false

	onKeyRelease("f", () => { // Debug Output no canto superior da tela com f
		onUpdate(() => { // Checar as cartas AAAAAAAAAAAAAAAAAAA!
			docs.innerHTML = // >> Debug Output
				"<p id='ver-test'>" 
				+ "d.len:" + `${deck.length}` 
				+ " || h.len:" +`${hand.length}` 
				+ " || g.len:" +`${grave.length}` 
				+ " || Mana:" +`${Mana}` 
				+ " || Turno:" +`${Turno}` 
				+ " || SlotA:" +`${hSlotA}`
				+ " || SlotB:" +`${hSlotB}`
				+ " || SlotC:" +`${hSlotC}`
				+ " || SlotD:" +`${hSlotD}`
				+ " || SlotE:" +`${hSlotE}`
				+ " || SlotF:" +`${hSlotF}`
				+ "</p>" 
		})
	})

	onKeyRelease("space" ,() => {
		go("Lv2")
	})

}) // AreaItens

//*
//------------------Sprites----------------------------

//-----Title-----
loadSprite("Grail", "https://i.imgur.com/WpdThJv.png")

//-----Buttons-----
loadSprite("Start", "https://i.imgur.com/nMlYCRx.png")

loadSprite("About", "https://i.imgur.com/Z1G1M4J.png")

loadSprite("Settings", "https://i.imgur.com/uAAQN4m.png")

//-----Characters-----
loadSprite("Hero", "https://i.imgur.com/wc6Qh8X.png")

loadSprite("Gato", "https://i.imgur.com/tZBOtvw.png")

loadSprite("Rato", "https://i.imgur.com/EU8kLUD.png")

loadSprite("slime", "https://i.imgur.com/RN0SSGe.png")

loadSprite("phantomKnight", "https://i.imgur.com/tpeY5Fr.png")

//-----Cards-----
loadSprite("CartaSlot", "https://i.imgur.com/NwPuzi3.png")

loadSprite("CartaClaw", "https://i.imgur.com/4V203y7.png")

loadSprite("CartaHit", "https://i.imgur.com/XilTrBU.png")

loadSprite("CartaBurn", "https://i.imgur.com/0Iv1gXv.png")

loadSprite("CartaHeal", "https://i.imgur.com/Jb1E79B.png")

loadSprite("CartaFire", "https://i.imgur.com/d4KrmZF.png")

loadSprite("CartaWater", "https://i.imgur.com/7edUgsm.png")

loadSprite("CartaBuff", "https://i.imgur.com/FZcUAWn.png")

loadSprite("CartaFira", "https://i.imgur.com/2qSbZWC.png")

//-----Hits Effects-----
loadSprite("PlayerHit", "https://i.imgur.com/rLDgcfX.png", {
	sliceX: 5,
	anims: {
		"idle": {
			from: 0,
			to: 4,
			speed: 10,
			loop: true,
		}
	}
})

loadSprite("MouseHit", "https://i.imgur.com/d8PW6Eb.png", {
	sliceX: 6,
	anims: {
		"idle": {
			from: 0,
			to: 5,
			speed: 10,
			loop: true,
		}
	}
})

loadSprite("GenericHit", "https://i.imgur.com/3fFtvor.png", {
	sliceX: 8,
	anims: {
		"idle": {
			from: 0,
			to: 7,
			speed: 5,
			loop: true,
		}
	}
})

loadSprite("waterSpell", "https://i.imgur.com/3fFtvor.png", {
	sliceX: 8,
	anims: {
		"idle": {
			from: 0,
			to: 7,
			speed: 5,
			loop: true,
		}
	}
})

//-----Icons------
loadSprite("espera", "https://i.imgur.com/UjKsVFe.png")

loadSprite("cura", "https://i.imgur.com/VzbdjwK.png", {
	sliceX: 7,
	anims: {
		"idle": {
			from: 0,
			to: 6,
			speed: 6,
			loop: true,
		}
	}
})

loadSprite("efeito", "https://i.imgur.com/2q7ZGPs.png")

loadSprite("Atk", "https://i.imgur.com/HFeq8Nn.png")

loadSprite("Mana", "https://i.imgur.com/TWMmSfE.png")

loadSprite("Mana0", "https://i.imgur.com/i8I5rfl.png")

//-----Backgrounds-----
loadSprite("MainMenu", "https://i.imgur.com/CmzvHa5.png")

loadSprite("areaItens", "https://i.imgur.com/4o78xRb.png")

loadSprite("Lv1", "https://cdn.discordapp.com/attachments/1137793513719865444/1147255657565798430/stage1v2XXL.png")

loadSprite("Lv2A", "https://i.imgur.com/37iH5oG.png")
loadSprite("Lv2B", "https://i.imgur.com/iL6aCsZ.png")

//-----Fonts---------
loadFont("joystix", "fonts/joystixMonospace.otf")

start()