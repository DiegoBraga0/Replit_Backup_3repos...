//-----Time----- 
// Replit Daiehgo -> 05/09 -> Aula Taveira
//

import kaboom from "kaboom"
import "kaboom/global"

kaboom(/*{
  background : [144, 144, 144] // The RGB code
}*/)

//-------------------DebugButton------------------------
function DebugButton() {
	let dbug = false;  
	addButton("Debug", vec2((w / 100 * 90), (h / 100 * 10)), () => {  				
		if(debug.inspect){
			debug.inspect = false; 
		} else { 
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
let Turno = 3
let PlayerHurt = false;
let Eny1Hurt = false;
let Player, Eny1, healthbar, healthbarP, NumeroVidaE, NumeroVidaP, Dano, DanoP, MxP, MxE, NumEnemy, NumCards;
//-----Cartas-----
let CartaHit, CartaBurn, CartaHeal;
//-----Cards Cooldown-----
let cooldownHeal = 0, cooldownBurn = 0

//-----Chracters Vars-----
let PLAYER_DANO = 6
let PLAYER_HEALTH = 30
let ENY1_HEALTH = 20
let ENY1_DANO = 3
//-----ConstsPos-----
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

//-------------------Funcoes----------------------------

function move(x, a) { // > função para retornar pós drag
  x.moveTo(a);
}

function start() { // > Inicializa o game
  Turno = 3,
    go("menu")
}

// > Add button genérico
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
    btn.color = rgb()
  })

  btn.onClick(f)

  return btn

}

// > Add button com sprite
function addButtonSprite(SpriteName, pos, f){
  const SpriteButton = add([
    sprite(SpriteName),
    pos(pos),
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
  })
  
  SpriteButton.onClick(f)

  return SpriteButton
  
}

function drag() { // > Dragr das cartas.

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
      })
    },

    update() {
      if (!isDrag) return
      if (curDraggin === this) {
        setCursor("move")
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
      /*
      if (curDraggin == CartaHit) {
        CartaHit.onCollideEnd("Eny1", (e) => {
          e.hurt(PLAYER_DANO),
            Dano = ENY1_HEALTH - PLAYER_DANO
          ENY1_HEALTH = Dano
          Turno--;
        })*/ //> Erro 
      if (curDraggin === this) {
        move(this, y);
      }
        /*
        if () { // > colisor for drag
          
        }*/
      }
      /*
      dragCooldown() {
        if(){
          
        }
      }*/

    }
  }

  const acoes = [
    "Atk", "espera", "cura", "efeito"
  ]
  const acao = choose(acoes)

function InimigoPreTurn() {

    switch (acao) {

      case "espera":
        add([
          sprite("espera"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1),
          area()
        ])
        break;

      case "cura":
        add([
          sprite("cura"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(2),
          area(),
          anchor("center")
        ])
        break;

      case "efeito":
        add([
          sprite("efeito"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1),
          area()
        ])
        break;

      case "Atk":
        add([
          sprite("Atk"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1),
          area()
        ])
        break;
    }
  }
function InimigoTurn() {

    //------------------Em Desenvolvimeto-------------------------------------

    //funcao que vai gerar o turno do inimigo e sua interacao com o personagem.

    //Primeiro vamos declarar a variavel e depois escolher qual delas vai ser a que o inimigo irá reálizar.

    /* // > Colocar ação em combat() e quando vinher pra cá so executar a ação escolhida
    const acoes = [
      "Atk","espera", "cura", "efeito"
    ]
    const acao = choose(acoes)
    */
    //Agora vamos fazer um swicht case para dizer o que fazer em cada acao escolhida.

    switch (acao) {
      case "espera":
        add([
          sprite("espera"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1),
          destroyAll("espera"),
          CartaHit.setDragOff()
        ])
        break;
      case "cura":
        add([
          sprite("cura"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(2)
        ])
        Eny1.heal(15),
          destroyAll("cura"),
          CartaHit.setDragOff()
        break;
      case "efeito":
        add([
          sprite("efeito"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1)
        ])
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
        destroyAll("efeito"),
          cartas.setDragOff()
        break;
      case "Atk":
        add([
          sprite("Atk"),
          pos(w / 100 * 76, h / 100 * 52),
          scale(1)
        ])
        Player.hurt(ENY1_DANO)
        DanoP = PLAYER_HEALTH - ENY1_DANO
        PLAYER_HEALTH = DanoP
        destroyAll("Atk"),
          CartaHit.setDragOff()
        break;
    }
  }

function combat() {

    setTimeout(InimigoPreTurn, 1) // > Dá um tempó até a ação do inimigo aparecer, no caso 3s -> 3000ms
    //Funcao que vai gerar a colisao entre as cartas e gerar o efeito respectivo.

    //primeiro vamos dizer o que vai acontecer quando a carta acertar o inimigo.

    Cartas()

    //---Pensar---
    // Como fazer o colide ser quando solta a carta e não quando encosta no inimigo
    // Ideias --> Colocar um mouseHover no inimigo com um booleano e se onMouseRalease o hoverInimigo == true, rodar os danos e tudo mais; caso hoverInimigo == false não acontece nada de colisão e a carta volta pro canto dela -> Fazer proxima vez
    // Soluções --> A area() aparentemente tem um componente chamado isHovering() que é um booleano que checa o hover -> Isso deve funcionar 
    /*
    onMouseRelease(() => {
      if(isDrag) {
        CartaHit.onCollideEnd("Eny1", (e) => {
          e.hurt(PLAYER_DANO),
          Dano = ENY1_HEALTH-PLAYER_DANO
          ENY1_HEALTH = Dano
          Turno--;
          
          //Agora vamos ver se ele morreu ou continua vivo, se ele continuar vivo vai pro turno dele.
          
          if (Turno > 0) {
      
          } else {
            CartaHit.setDragOn()
            Turno = 3
            InimigoTurn()
          }
          
          on("death", "Eny1", (e) => {
            destroy(e)
            Turno = 4
            go("AreaItens")
          })
        })
      }
    })*/
    //> Foi pro drag Drag
  CartaHit.onCollideEnd("Eny1", (e) => {
    debug.log("Damaged");
    e.hurt(PLAYER_DANO),
    Dano = ENY1_HEALTH-PLAYER_DANO
    ENY1_HEALTH = Dano
    Turno--;
  })

  CartaBurn.onCollideEnd("Eny1", (e) => {
    debug.log("Burning");
    e.hurt(3),
    Dano = ENY1_HEALTH-3
    ENY1_HEALTH = Dano
    Turno--;
        
    if (Turno > 0) {
    
    } else {
      cartas.getDrago()
      Turno = 3
      Inimigo()
    }
        
    on("death", "Eny1", (e) => {
      destroy(e)
      Turno = 4
      go("AreaItens")
    })
  })
  
  if (cooldownHeal === 1 || cooldownHeal === 2){
    CartaHeal.getDrago()
    cooldownHeal--;
  }
  else {
    CartaHeal.onCollideEnd("Player1", (e) => {
      cooldownHeal = 2
      if (MxP == PLAYER_HEALTH){
        debug.log("healedo");
      } else{
        Player.heal(3),
        DanoP = PLAYER_HEALTH+3
        PLAYER_HEALTH = DanoP
        Turno--;
      }
    //Agora vamos ver se ele morreu ou continua vivo, se ele continuar vivo vai pro turno dele.
    })
  }
  if(Turno > 0) {

  } 
  else {
    CartaHit.setDragOn()
    Turno = 3
    InimigoTurn()
  }

  on("death", "Eny1", (e) => {
    destroy(e)
    Turno = 4
    go("AreaItens")
  })
}

function ADDGeral(NumEnemy) {

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
  ])
    ??
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
    } else {
      healthbar.color = rgb(127, 255, 127)
    }

    NumeroVidaE = add([
      text(ENY1_HEALTH + "/" + MxE, { size: 16 }),
      pos(w / 100 * 76.3, h / 100 * 41.5),
      anchor("center"),
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

    /*healthbarE2.*/onUpdate(() => {
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
  onKeyPress("r", () => {
    Carta.setDragOff()
  })
  onKeyPress("p", () => {
    Carta.setDragOn()
  })
}

function Cartas(NumCards) {
  // > NumCards é pra alocar as positions de acordo com o número de cartas na mão(deck);
  // Mas por hora não tá sendo usado

  // Esta funcao vai abrigar todas as cartas do jogo, sempre adicionar ela colocando o seu nome ex: CartaDano e seu respectivo sprite(CartaDano);

  const deck = [

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
      "CartaBurn",
    ]),
  ]

  onUpdate(() => setCursor("default"))

}

//--------------------Cenas----------------------------
scene("Lv1", () => {

  //-------------------------So falta o background----------------

  onMouseRelease(() => {
    if (curDraggin) {
      if (curDraggin == CartaHit) {
        curDraggin.dragEnd(CardsPositions[0].pos)
      }
      if (curDraggin == CartaHeal) {
        curDraggin.dragEnd(CardsPositions[1].pos)
      }
      if (curDraggin == CartaBurn) {
        curDraggin.dragEnd(CardsPositions[2].pos)
      }
      curDraggin = null
    }
  })

  const Lv1Background = add([
    sprite("Lv1", { width: width(), height: height() }),
    pos(w / 2, h / 2),
    scale(1),
    anchor("center"),
  ])

  ADDGeral(1)

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

  Eny1.onHurt(() => {
    Eny1Hurt = true;
    healthbar.set(Eny1.hp())
    NumeroVidaE.onUpdate(() => {
      NumeroVidaE.text = ENY1_HEALTH + "/" + MxE
    })
  })

  Player.onHurt(() => {
    PlayerHurt = true;
    healthbarP.set(Player.hp())
    NumeroVidaP.onUpdate(() => {
      NumeroVidaP.text = PLAYER_HEALTH + "/" + MxP
    })
  })
  combat()
})

scene("Lv2", () => {

  //--------------------------Em desenvolvimeto---------------------------

  ENY1_HEALTH = 15

  onMouseRelease(() => {
    if (curDraggin) {
      curDraggin.trigger("dragEnd")
      curDraggin = null
      Carta.moveTo(w / 100 * 7, h / 100 * 82)
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
  combat()
})

scene("menu", () => {

  const BackMenu = add([
    sprite("MainMenu", { width: width() + 75, height: height() }),
    scale(1),
    pos((w / 2) + 28, h / 2),
    anchor("center"),
  ])

  const Grail = add([
    sprite("Grail"),
    scale(3),
    pos(w/2, h /100 * 15),
    anchor("center"),
    
  ])

  DebugButton()

  addButtonSprite("Start", vec2(w/2, h/100*65), () => go("Lv1"));
  addButtonSprite("Settings", vec2(w/2, h/100*76), () => debug.log(
    "Configurações em breve..."
  ));
  addButtonSprite("About", vec2(w/2, h/100*87), () => debug.log(
    "Criado pela Equipe RockSolid. Fabio -> Art Director, Programmer, Game Design; Diego -> Programmer; Davi -> Programmer"
  ));
  /*
  const StartButton = add([
    sprite("Start"),
    scale(1.6),
    pos(w/2, h /100 * 75),
    anchor("center"),
    area(),
  ])

  StartButton.onHoverUpdate(() => {
    const t = time() * 10
    StartButton.scale = vec2(2)
    setCursor("pointer")
  })

  StartButton.onHoverEnd(() => {
    StartButton.scale = vec2(1.6)
  })

  StartButton.onClick(() => go("Lv1"))

  const About = add([
    sprite("About"),
    scale(1.6),
    pos(w/2, h /100 * 88),
    anchor("center"),
    area(),
  ])

  About.onHoverUpdate(() => {
    const t = time() * 10
    About.scale = vec2(2)
    setCursor("pointer")
  })

  About.onHoverEnd(() => {
    About.scale = vec2(1.6)
  })

  About.onClick(() => debug.log(
    "Criado pela Equipe RockSolid. Fabio -> Art Director, Programmer, Game Design; Diego -> Programmer; Davi -> Programmer"
  ))*/

  
  
  //addButton("Start", vec2(w / 100 * 50, h / 100 * 75), () => go("Lv1"))
  //addButton("Infos", vec2(w / 100 * 50, h / 100 * 88), () => debug.log("Hello!!!"))
})

scene("AreaItens", () => {

  const AreaItens = add([
    sprite("areaItens", { 
      width: width(), height: height()
    }),
    pos(w / 2, h / 2),
    scale(1),
    anchor("center"),
  ])

})

//------------------Sprites----------------------------

//-----Title-----
loadSprite("Grail", "https://i.imgur.com/WpdThJv.png")

//-----Buttons-----
loadSprite("Start","https://i.imgur.com/nMlYCRx.png")

loadSprite("About","https://i.imgur.com/Z1G1M4J.png")

loadSprite("Settings","https://i.imgur.com/uAAQN4m.png")
//-----Chracters-----
loadSprite("Hero", "https://i.imgur.com/wc6Qh8X.png")

loadSprite("Gato", "https://i.imgur.com/tZBOtvw.png")

loadSprite("Rato", "https://i.imgur.com/EU8kLUD.png")

loadSprite("slime", "https://i.imgur.com/RN0SSGe.png")

//-----Cards-----
loadSprite("CartaHit", "https://i.imgur.com/IurYaYh.png")

loadSprite("CartaBurn", "https://i.imgur.com/0Iv1gXv.png")

loadSprite("CartaHeal", "https://i.imgur.com/HSdVPGi.png")

//-----Icons------
loadSprite("espera", "https://i.imgur.com/UjKsVFe.png")

loadSprite("cura", "https://i.imgur.com/CAYfbKC.png")

loadSprite("efeito", "https://i.imgur.com/2q7ZGPs.png")

loadSprite("Atk", "https://i.imgur.com/LueLLwg.png")

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

start()