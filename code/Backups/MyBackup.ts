
// Replit Daiehgo - main.ts -> 02/10 -> 8:30 Lmc1 Monday
// 
// Fazer -> Sistema do deck alem de ajeitar a mana

import kaboom from "kaboom"
import "kaboom/global"

kaboom()

//-------------------DebugButton------------------------
function DebugButton() {
	addButton("Debug", vec2((w / 100 * 90), (h / 100 * 10)), () => {
		onUpdate(() => {
			if (enyHover) {
				debug.log("Hovering Enemy")
			} else if (pHover) {
				debug.log("Hovering Player")
			} else {
				debug.log("Not Hovering")
			}
		})
		if (debug.inspect) {
			debug.inspect = false;
		}
		else {
			debug.inspect = true;
		}
	})
}

//-------------------Variaveis--------------------------

//-----Resolution-----
let w = window.innerWidth;
let h = window.innerHeight;
//-----Drag Vars-----
let isDrag = true
let curDraggin = null
//-----Game vars-----
let Turno
let PlayerHurt = false;
let Eny1Hurt = false;
let enyHover = false;
let enyAtk = false;
let pHover = false;
let pAtk = false;
let sCard = false;
let Player, Eny1, healthbar, healthbarP, NumeroVidaE, NumeroVidaP, Dano, DanoP, MxP, MxE, NumEnemy, NumCards;
let sWait, sEffect, sHeal, sAtk
let iconAtk, iconWait, iconEffect, iconHeal 
//-----Cartas-----
let CartaHit, CartaBurn, CartaHeal;
let Hit, Burn, Heal
let deck = [], hand = [], cemit = []
//-----Cards Cooldown-----
let cooldownHeal = 0, cooldownBurn = 0

//-----Chracters Vars-----
let PLAYER_DANO = 6
let PLAYER_HEALTH = 300
let ENY1_HEALTH = 200
let ENY1_DANO = 5
//-----ConstsPos-----
let C1, C2, C3, C4
const CardsPositions = [
	C1 = make([
		pos(w / 100 * 7, h / 100 * 82),
		"C1"
	]),
	C2 = make([
		pos(w / 100 * 14, h / 100 * 82),
		"C2"
	]),
	C3 = make([
		pos(w / 100 * 21, h / 100 * 82),
		"C3"
	]),
	C3 = make([
		pos(w / 100 * 28, h / 100 * 82),
		"C4"
	]),
]

let palyerPos, eny1Pos, eny2Pos
const CharPositions = [
	playerPos = make([
		pos(w / 100 * 26, h / 100 * 48),
		"playerPos",
	]),
	eny1Pos = make([
		pos(w / 100 * 76, h / 100 * 52),
		"eny1Pos",
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
		pos(CardsPositions[0].pos),
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
		pos(CardsPositions[1].pos),
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
		pos(CardsPositions[2].pos),
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

function moveC(x, a) { // > função para retornar pós drag
	x.moveTo(a);
} // moveC

function start() { // > Inicializa o game
	Turno = 1
	go("menu")
} // start

function addButton(txt, p, f) { // > Cria botões das telas.
	const btn = add([
		rect(240, 80, { radius: 8 }),
		pos(p),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	])

	btn.add([
		text(txt),
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

// > Add button com sprite
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

function drag() { // > Drag das cartas.

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
			if (!isDrag) return // > Se o drag estiver desativado sai da struct
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
		dragEnd(y) {
			if (curDraggin === this) {
				moveC(this, y);
				sCard = false
				setCursor("default")
			}
		},
		CardUse(){
			if (curDraggin == this) {
				
			}
		},

	}
} // drag

/*
function InimigoPreTurn() {

		switch (acao) {

			case "espera":
				add([
					sprite("espera"),
					pos(w / 100 * 76, h / 100 * 38),
					scale(1),
					anchor("center"),
					area()
				])
				break;

			case "cura":
				add([
					sprite("cura"),
					pos(w / 100 * 76, h / 100 * 38),
					scale(2),
					area(),
					anchor("center")
				])
				break;

			case "efeito":
				add([
					sprite("efeito"),
					pos(w / 100 * 76, h / 100 * 38),
					anchor("center"),
					scale(1),
					area()
				])
				break;

			case "Atk":
				add([
					sprite("Atk"),
					pos(w / 100 * 76, h / 100 * 38),
					anchor("center"),
					scale(1),
					area()
				])
				break;
		}
	}*/

// > numero random pras ações do inimigo

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

function EnyActions() { // Ações do inimigo
	onUpdate(() => {
		if (Turno == 4 && sWait) {
			destroy(iconWait)
			Turno = 1; // > resetando o turno 
			setTimeout(InimigoTurn, 100)
			sWait = false
		}
		if (Turno == 4 && sHeal) {
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
			Turno = 1;
			sHeal = false
			setTimeout(InimigoTurn, 100)
		}
		if (Turno == 4 && sAtk) { // > Se é o turno do inimigo(vc tem 3 turnos) && se a ação é atk
			//---Acão---
			Player.hurt(ENY1_DANO)
			enyAtk = true
			NumLog(ENY1_DANO)
			enyAtk = false
			destroy(iconAtk)
			//---Resetando o Turno---
			Turno = 1;
			sAtk = false
			setTimeout(InimigoTurn, 100)
		}
		if (Turno == 4 && sEffect) {
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
			Turno = 1;
			sEffect = false
			setTimeout(InimigoTurn, 100)
	}
	})
} // EnyActions

function NumLog(Number) { // Registro de Ações
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
	} else if(!pAtk && !enyAtk) { // Player Heal
		let LogHeal = add([
			text("+" + TxtN),
			pos(w / 100 * 26, h / 100 * 32),
			area(),
			anchor("center"),
			scale(0.5),
			color(0, 255, 0),
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
	debug.log("B")

} // NumLog

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

function Combat() { // Sistema principal de combate

	InimigoTurn() //

	CartasInit()
	//CartasD() // > Gerar as cartas
	//CartasH()
	//CreateCardTo(Hit,"CartaHit", 0, deck)

	onClick(() => {
		if (curDraggin){
			if(curDraggin == Heal){
				sCard = true
			}
		}
	}) // onClick
	
	onMouseRelease(() => { // >> Só acontece quando solta o mouse

		if (curDraggin) { // > Se tem algo no draggin

			if (curDraggin == Hit) {
				pAtk = true // > Vat pra checar o NumLog > Log do dano/heal
				if (enyHover) { //> Card Action
					debug.log("Damaged");
					Eny1.hurt(PLAYER_DANO);
					NumLog(PLAYER_DANO);
					Turno++;
					enyHover = false
				}
				curDraggin.dragEnd(CardsPositions[0].pos)
			} // curDraggin == Hit

			if (curDraggin == Heal) {
				if (pHover) {
					if (Player.hp() == PLAYER_HEALTH) {
						debug.log("Vida Cheia");
					}
					else {
						pAtk = false
						let MaxHeal = PLAYER_HEALTH - Player.hp() // > Checar a vida perdida
						onUpdate(() => {
							debug.log(MaxHeal)
						})
						if (MaxHeal <= 9) { // > Se a vida perdida é menor que 10 só vai ser healado ate a vida maxima
							Player.heal(MaxHeal)
							NumLog(MaxHeal)
						}
						else {
							Player.heal(10)
							NumLog(10)
						}
						Turno++;
					} // else
				} // pHover
				curDraggin.dragEnd(CardsPositions[1].pos)
			} // curDraggin == Heal

			if (curDraggin == Burn) {
				pAtk = true
				if (enyHover) {
					debug.log("Burning");
					Eny1.hurt(3)
					NumLog(3)
					Turno++;
				} // enyHover
				curDraggin.dragEnd(CardsPositions[2].pos)
			} // curDraggin == Burn

			curDraggin = null // > Soltar a carta após usar
		} // curDraggin
	}) // onMouseRelease


	/* // >> Log antig ode collide
	CartaHit.onCollideEnd("Eny1", (e) => {
		debug.log("Damaged");
		e.hurt(PLAYER_DANO),
		Dano = ENY1_HEALTH-PLAYER_DANO
		ENY1_HEALTH = Dano
		Turno--;
	}
	*/

	// > Turn end things
	/*
	if(Turno > 0) {
		return
	} 
	else {
		CartaHit.setDragOn()
		Turno = 3
		InimigoTurn()
	}
	*/

} // Combat

function ADDGeral(NumEnemy) { // Adiciona grande parte dos elementos a cena

	//Esta funcao vai abrigar os sprites, variaveis que aparecerao em todo o combate.

	MxP = PLAYER_HEALTH, MxE = ENY1_HEALTH

	const hand = add([
		pos(w / 100 * 50, h / 100 * 85),
		rect((w / 100 * 94), h / 100 * 27, { radius: 8 }),
		anchor("center"),
		outline(4),
		color(10, 10, 10),
	])

	Player = add([
		sprite("Hero"),
		health(PLAYER_HEALTH),
		pos(w / 100 * 26, h / 100 * 48),
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

	//---For Enermies---
	if (NumEnemy == 1) { // > n = 1 caso tenha 1 inimigo 

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
		}
		else {
			healthbar.color = rgb(127, 255, 127)
		}

		NumeroVidaE = add([
			text(ENY1_HEALTH + "/" + MxE, { size: 16 }),
			pos(w / 100 * 76.3, h / 100 * 41.5),
			anchor("center"),
			color(0, 0, 0),
		])

		// > n = 2 caso tenha dois inimigos 
	}
	else if (NumEnemy == 2) {

		let healthbarE2 = add([
			rect(140, 20),
			pos((w / 100 * 72) + 1, h / 100 * 45),
			color(107, 201, 108),
			{
				max: ENY1_HEALTH,
				set(hp) {
					this.width = 140 * hp / this.max
					this.flash = true
				},
			},
		])

		onUpdate(() => {
			if (healthbarE2.flash) {
				healthbarE2.color = rgb(255, 255, 255)
				healthbarE2.flash = false
			} else {
				healthbarE2.color = rgb(127, 255, 127)
			}
			if (healthbar.flash) {
				healthbar.color = rgb(255, 255, 255)
				healthbar.flash = false
			} else {
				healthbar.color = rgb(127, 255, 127)
			}
		})
	}

	add([
		text("espace para voltar"),
		pos(12, 20),
		color(0, 0, 0)
	])
	onKeyDown("space", () => {
		start()
	})
} // ADDGeral

function addCard(S, p) { // Cria e retorna cards com >> S: sprite e p: pos 

	let Card = add([
		sprite(S),
		pos(CardsPositions[p].pos),
		area({
			cursor: "grab",
			shape: new Rect(vec2(0), 41.5, 53)
		}),
		scale(3),
		anchor(vec2(0.093, -0.2)),
		drag(),
	])

	Card.onHover(() => {
		setCursor("grab")
	})

	Card.onHoverEnd(() => {
		setCursor("default")
	})

	return Card
} // addCard

function CicleCard() {
	let check 
} // CicleCard

function CartasInit() {
	Hit = addCard("CartaHit", 0)
	hand.push(Hit)

	Heal = addCard("CartaHeal", 1)
	hand.push(Heal)

	Burn = addCard("CartaBurn", 2)
	hand.push(Burn)
} // CardInit

function Cartas() { // Desenvolvimeto
	// > NumCards é pra alocar as positions de acordo com o número de cartas na mão(deck);
	// Mas por hora não tá sendo usado

	// Esta funcao vai abrigar todas as cartas do jogo, sempre adicionar ela colocando o seu nome ex: CartaDano e seu respectivo sprite(CartaDano);

	const m = []

	Hit = addCard("CartaHit", 0)
	m.push(Hit)

	Heal = addCard("CartaHeal", 1)
	m.push(Heal)

	const deck = []

} // Cartas

//--------------------Cenas----------------------------
scene("Lv1", () => { // Cena 1 ou Lv1

	const Lv1Background = add([
		sprite("Lv1", { width: width(), height: height() }),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

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

	addButton("Draw", vec2(w / 100 * 90, h / 100 * 25), () => CreateCardTo(Hit, "CartaHit", 0, hand));

	ADDGeral(1)

	Player.onHover(() => {
		pHover = true
		if (curDraggin) {
			if (sCard) {
				setCursor("crosshair")
				debug.log("AAAAAAAAAAAAAAAAAAAAA")
			}
			else if(!sCard) {
				setCursor("no-drop")
				debug.log("BBBBBBBBBBBBBBBBBBBBB")
			}
		}
	})

	Player.onHoverEnd(() => {
		pHover = false
		if (curDraggin) {
			setCursor("grabbing")
		}
	})

	Player.onHurt(() => {
		PlayerHurt = true;
		healthbarP.set(Player.hp())
		NumeroVidaP.onUpdate(() => {
			NumeroVidaP.text = Player.hp() + "/" + PLAYER_HEALTH

			if (Player.hp() <= 0) {
				destroy(Player)
				go("menu")
			}
		})
	})

	DebugButton()

	Eny1 = add([
		sprite("Rato"),
		health(ENY1_HEALTH),
		pos(w / 100 * 76, h / 100 * 52),
		area({
			scale: 0.6,
		}),
		scale(3),
		anchor(vec2(0.01, -0.1)),
		"Eny1",
	])

	Eny1.onHover(() => {
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
			NumeroVidaE.text = Eny1.hp() + "/" + ENY1_HEALTH
			if (Eny1.hp() <= 0) {
				destroy(Eny1)
				go("AreaItens")
			}
		})
	})

	// > Tests de Heal
	Player.hurt(100);
	Eny1.hurt(50);
	
	Combat()

}) // Lv1

scene("Lv2", () => { // Cena 2 ou Lv2

	//--------------------------Em desenvolvimeto---------------------------

	ENY1_HEALTH = 15

	onMouseRelease(() => {
		if (curDraggin) {
			curDraggin.trigger("dragEnd")
			curDraggin = null
		}
	})

	const Lv2 = add([
		sprite("Lv2", { width: width(), height: height() }),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

	ADDGeral(2)

	DebugButton()

	Eny1 = add([
		sprite("slime"),
		health(ENY1_HEALTH),
		pos(580, 150),
		area({
			scale: 0.6,
		}),
		scale(2),
		"Eny1",
	])

	Eny1 = add([
		sprite("slime"),
		health(ENY1_HEALTH),
		pos(590, 400),
		area(),
		scale(2),
		"Eny1",
	])
	Combat()
}) // Lv2

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

scene("AreaItens", () => { // cena AreaItens

	const AreaItens = add([
		sprite("areaItens", {
			width: width(), height: height()
		}),
		pos(w / 2, h / 2),
		scale(1),
		anchor("center"),
	])

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

//-----Cards-----
loadSprite("CartaSlot", "https://i.imgur.com/NwPuzi3.png")

loadSprite("CartaHit", "https://i.imgur.com/IurYaYh.png")

loadSprite("CartaBurn", "https://i.imgur.com/0Iv1gXv.png")

loadSprite("CartaHeal", "https://i.imgur.com/HSdVPGi.png")

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

//-----Backgrounds-----
loadSprite("MainMenu", "https://i.imgur.com/CmzvHa5.png")

loadSprite("areaItens", "https://i.imgur.com/4o78xRb.png")

//lv1_Old
/*loadSprite("Lv1", "https://i.imgur.com/A7JA6X0.png")*/
//Lv1_New

loadSprite("Lv1", "https://cdn.discordapp.com/attachments/1137793513719865444/1147255657565798430/stage1v2XXL.png")

loadSprite("Lv2", "https://i.imgur.com/2KB4YiS.png")

	//-----Outros-----
	/*loadSprite("buttonPlay", "")
  
	loadSprite("buttonSettings", "")
  
	loadSprite("buttonAboutUs", "")
  
	loadSprite("buttonB", "")*/

	*//

	start()