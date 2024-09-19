import kaboom from "kaboom";
import "kaboom/global";

kaboom({
  global: true,
  background: [3, 198, 252],
});

let w = window.innerWidth;
let h = window.innerHeight;
let level, level2, level3, level4, level5, levelS, level6, level7, level8, level9, level10;
let turn = 0, InimigoSpeed = 80, Timer, CheckPoint = 0;
let Music = play("Musica")
let Player, Inimigo, Inimigo2, Inimigo3, Inimigo4, Escada, Vida = 3;
let Item = 0, mover = 1, score = 0;
let Troca = "floorDia", floor = "floorNoite";
let isJumping = true, ColisionDia = false, ColisionNoite = true;

// sets
setGravity(2200);
let curEffect = 0;
const FALL_DEATH = 2000
onUpdate(() => setCursor("default"))

function addButton(txt, p, f) {

  // add a parent background object
  const btn = add([
    rect(240, 80, { radius: 8 }),
    pos(p),
    area(),
    scale(1),
    anchor("center"),
    outline(4),
  ])

  // add a child object that displays the text
  btn.add([
    text(txt),
    anchor("center"),
    color(0, 0, 0),
  ])

  // onHoverUpdate() comes from area() component
  // it runs every frame when the object is being hovered
  btn.onHoverUpdate(() => {
    const t = time() * 10
    btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
    btn.scale = vec2(1.2)
    setCursor("pointer")
  })

  // onHoverEnd() comes from area() component
  // it runs once when the object stopped being hovered
  btn.onHoverEnd(() => {
    btn.scale = vec2(1)
    btn.color = rgb()
  })

  // onClick() comes from area() component
  // it runs once when the object is clicked
  btn.onClick(f)

  return btn

}

function CheckPoint1() {

  if (CheckPoint == 0) {
    go("Mundo 1")
  } else if (CheckPoint == 1) {
    go("Mundo 6")
  }
}

function Musicas(){

}

function Objetos() {

  Player.onCollide('Item', (ITEM) => {
    destroy(ITEM);
    score++;
    play("score")
  })

  Player.onCollide('CheckPoint', (c) => {

    CheckPoint = CheckPoint + 1;
    destroy(c);

  })

  loop(1, () => {

    Timer = Timer - 1

  })

  let Time = add([
    text(Timer),
    pos(12, 12),
    fixed(),
  ])

  Time.onUpdate(() => {

    Time.text = Timer;

    if (Timer == 0) {
      go("Lose")
      destroy(Time)
    }
  })

}

function InimigoF() {

  onUpdate("Perigo", (s) => {
    s.move(s.dir * InimigoSpeed, 0);
    s.timer -= dt();
    if (s.timer <= 0) {
      s.dir = -s.dir;
      s.timer = rand(5);
    }
  })

  onCollide("Perigo", "BotaoN", (s) => {
    s.dir = s.dir
  })

  onCollide("Perigo", "Item", (s) => {
    s.dir = -s.dir
  })

  onCollide("Perigo", "Parede", (s) => {
    s.dir = -s.dir
  })

  onCollide("Perigo", "Perigo", (s) => {
    s.dir = -s.dir
  })

  onCollide("Perigo", "EspinhoN", (s) => {
    s.dir = -s.dir
  })

}

function PlayerF() {

  onKeyDown("a", () => {
    Player.move(-140, 0);
  });

  onKeyDown("d", () => {
    Player.move(140, 0);
  });

  onKeyDown("left", () => {
    Player.move(-140, 0);
  });

  onKeyDown("right", () => {
    Player.move(140, 0);
  });

  onKeyPress("a", () => {
    Player.play("move")
  })

  onKeyPress("d", () => {
    Player.play("move")
  })

  onKeyRelease("a", () => {
    Player.play("idle")
  })

  onKeyRelease("d", () => {
    Player.play("idle")
  })

  Player.onUpdate(() => {
    //camPos(Player.worldPos())
    //camScale(vec2(1.4, 1.4))
    if (Player.pos.y >= FALL_DEATH) {
      go("Lose")
    }

  })

  Player.onPhysicsResolve(() => {
    // Set the viewport center to player.pos
    //camPos(Player.worldPos())
    //camScale(vec2(1.4, 1.4))
  })

  Player.onCollide('Perigo', () => {
    destroy(Player);
    go('Lose');
  })

  Player.onCollide('EspinhoN', () => {
    destroy(Player);
    go('Lose');
  })

  Player.onCollide('floorDeath', () => {
    destroy(Player);
    go('Lose');
  })

  Player.onCollide('BotaoN', (BotaoN) => {
    destroy(BotaoN)
    add([
      sprite("ABotaoN"),
      pos(BotaoN.pos.x, BotaoN.pos.y),
      area({ shape: new Rect(vec2(5), 20, 30) }),
      body({ isStatic: true }),
      "ABotaoN",
    ]);
    destroy(Escada)
    add([
      sprite("EscadaNoite"),
      pos(Escada.pos.x, Escada.pos.y),
      area(),
      body({ isStatic: true }),
      "EscadaNoite",
    ])
  })


  onUpdate(() => {
    if (Player.isGrounded()) {
      isJumping = false;;
    }
  })

  onKeyPress("space", () => {
    if (Player.isGrounded()) {
      Player.jump();
      isJumping = true;
      if (turn === 1) {
        ColisionNoite = true
        setBackground(3, 198, 252);
        turn = 0;
        ColisionDia = false
        debug.log(turn)
      } else if (turn === 0) { // Corrigido: Usar "===" em vez de "=" para comparação.
        setBackground(0, 0, 0);
        turn = 1;
        debug.log(turn);
        ColisionDia = true
        ColisionNoite = false
      }
    }

    if (Troca == "floorNoite") {
      Troca = "floorDia"
    } else {
      Troca = "floorNoite"
    }

    onUpdate("floorDia", (obj) => {
      destroy(obj)
      add([
        sprite("floorNoite"),
        pos(obj.pos.x, obj.pos.y),
        area(),
        body({ isStatic: true }),
        "floorNoite"
      ]);
    });
  });

  onKeyPress(() => {

    Player.onCollideUpdate('SumiNoite', () => {
      if (ColisionNoite == true) {
        Player.onCollideUpdate('SumiNoite', () => {
          Vida = Vida - 1;
          if (Vida <= 0) {
            destroy(Player)
            go("Lose")
          }
        })
      } else if (ColisionNoite == false) {
        Player.onCollideUpdate('SumiNoite', () => {
          Vida = Vida - 0;
        })
      }
    })

    Player.onCollideUpdate('SumiDia', () => {
      if (ColisionDia == true) {
        Player.onCollideUpdate('SumiDia', () => {
          Vida = Vida - 1;
          if (Vida <= 0) {
            destroy(Player)
            go("Lose")
          }
        })
      } else if (ColisionDia == false) {
        Player.onCollideUpdate('SumiDia', () => {
          Vida = Vida - 0;
        })
      }
    })
  })

}

//--------------------------Scenes--------------------------

scene("Menu", () => {

  const MenuBackground = add([
    sprite("MainMenu", { width: width(), height: height() }),
    pos(w / 2, h / 2),
    scale(1),
    anchor("center"),
  ])

  addButton("Start", vec2(w / 2, h / 100 * 55), () => go("Trancisao1"))
  addButton("Quit", vec2(w / 2, h / 100 * 68), () => debug.log("bye"))
})

scene("Lose", () => {

  Music.paused = true

  add([
    text("You Lose"),
    pos(w / 2, h / 100 * 45),
    anchor("center"),
  ])

  addButton("Recomeçar", vec2(w / 2, h / 100 * 55), () => CheckPoint1())
  addButton("Quit", vec2(w / 2, h / 100 * 68), () => debug.log("bye"))
})

scene("Win", () => {

  Music.paused = true
  CheckPoint = 0

  add([
    text("You Win"),
    pos(w / 2, h / 100 * 45),
    anchor("center"),
  ])

  add([
    text(`Parabens voce pegou ${score} Sangues!!!`, {
      width: width(),
    }),
    pos(12),
  ])


  addButton("Menu", vec2(w / 2, h / 100 * 55), () => go("Menu"))
  addButton("Quit", vec2(w / 2, h / 100 * 68), () => debug.log("bye"))
})

scene("Trancisao1", () => {

  setBackground(0, 0, 0);

  add([
    text("Mundo 1"),
    pos(w / 2, h / 2),
    anchor("center"),
    scale(2),
    lifespan(1.5, { fade: 0.5 }),
  ])

  wait(1.5, () => {
    go("Mundo 1")
  })

})

scene("Mundo 1", () => {

  level = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "= 111     777777&&&&&&&    111 -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                (             -",
    "=               ]]]            -",
    "= @          [[[   [[[         -",
    "=          ]]         ]]       -",
    "=        [[   2222222   [[     -",
    "+++++++++++++++++++++++++++++o++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'x': () => [sprite('floorDeath'), area({ shape: new Rect(vec2(1), 25, 30) }), body({ isStatic: true }), "floorDeath", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope'), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })
  Timer = 21

  Music = play("Musica", {
    volume: 0.8,
    loop: true
  })

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level.get("player")[0]
  Escada = level.get("Escada")[0]

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Mundo 2');
  })

  add([
    text("1- Dia e Noite"),
    pos(w / 100 * 10, h / 100 * 20),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

})

scene("Mundo 2", () => {

  level2 = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "= 1111         7&        1111  -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=@          ]]                 -",
    "=       [[         ]]          -",
    "=]]]]]        [[[      |       -",
    "=xxxxxxxxxxxxx | xxxxx[[[      -",
    "=                           (  -",
    "=                          ]]]]-",
    "=  |   222222222222222         -",
    "+++++++++++++++++++++++++++++o++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'x': () => [sprite('floorDeath'), area({ shape: new Rect(vec2(1), 25, 30) }), body({ isStatic: true }), "floorDeath", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope'), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })
  Timer = 21

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level2.get("player")[0]
  Escada = level2.get("Escada")[0]

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Mundo 3');
  })

  add([
    text("2- Tudo pode dar ruim"),
    pos(w / 100 * 15, h / 100 * 10),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

})

scene("Mundo 3", () => {

  //const Lv1Background = add([
  // sprite("MainMenu", { width: width(), height: height() }),
  //pos(w / 2, h / 2),
  // scale(1.5),
  // anchor("center"),
  //])

  level3 = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "= 11   777777777&&&&&&&&&   11 -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                        0     -",
    "=                   |          -",
    "=                  ]]]]        -",
    "=               [[             -",
    "=           ]]                 -",
    "= @      [                   0 -",
    "=       [[[  22  22 (    |     -",
    "++++++++++++++++++++-++++++++o++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope', {
        animSpeed: 0.5,
        frame: 0
      }), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })

  Timer = 21

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level3.get("player")[0]
  Inimigo = level3.get("Perigo")[0]
  Inimigo2 = level3.get("Perigo")[1]
  Escada = level3.get("Escada")[0]

  Inimigo.play("move")
  Inimigo2.play("move")

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Mundo 4');
  })

  add([
    text("3- Inimigos e Itens"),
    pos(w / 100 * 15, h / 100 * 15),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

});

scene("Mundo 4", () => {

  level4 = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "= 7777       111111       &&&& -",
    "=                              -",
    "=                              -",
    "=                              -",
    "= @  |              (    0 -   -",
    "=    ]]            +-++++++ |  -",
    "=       [[  222            ++  -",
    "=         +++++++              -",
    "=                ] ] [[        -",
    "=                        ]]]   -",
    "=          0         0       0 -",
    "++++++o+++++++++++++++++++++++++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope', {
        animSpeed: 0.5,
        frame: 0
      }), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })
  Timer = 40

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level4.get("player")[0]
  Inimigo = level4.get("Perigo")[0]
  Inimigo2 = level4.get("Perigo")[1]
  Inimigo3 = level4.get("Perigo")[2]
  Inimigo4 = level4.get("Perigo")[3]
  Escada = level4.get("Escada")[0]

  Inimigo.play("move")
  Inimigo2.play("move")
  Inimigo3.play("move")
  Inimigo4.play("move")

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Mundo 5');
  })

  add([
    text("4- Mais de Tudo"),
    pos(w / 100 * 15, h / 100 * 15),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

})

scene("Mundo 5", () => {

  level5 = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "================               -",
    "================               -",
    "=                              -",
    "=  |                           -",
    "=                  ]x[x]x[x]xx -",
    "= @      (         [           -",
    "= []]   [[[      [[            -",
    "=    ]]                        -",
    "=             ]]            [[[-",
    "=                  x  xx]]]x   -",
    "=xxxxxxxxxxxxxxxxxxx           -",
    "=                   [[[        -",
    "=                      [[[     -",
    "=                              -",
    "=                            | -",
    "=                            ] -",
    "=o]xx[xx]xx[x]x[x]x[x]x[    [  -",
    "=                       ][ ]   -",
    "=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      'x': () => [sprite('floorDeath'), area({ shape: new Rect(vec2(1), 25, 30) }), body({ isStatic: true }), "floorDeath", "Bloco"],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope'), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })
  Timer = 50

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level5.get("player")[0]
  Inimigo = level5.get("Perigo")[0]
  Escada = level5.get("Escada")[0]

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Save');
  })

  add([
    text("5- Meu Deus"),
    pos(w / 100 * 15, h / 100 * 15),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

})

scene("Save", () => {

  levelS = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "= 1111111111 777&&& 1111111111 -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "= @          c                 -",
    "=                              -",
    "=      22222    22222 (   |    -",
    "+++++++++++++++++++++++++++++o++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player'],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      'c': () => [sprite('BlocoC'), area(), body({ isStatic: true }), "CheckPoint", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
    },
  })
  Timer = 60

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = levelS.get("player")[0]
  Inimigo = levelS.get("Perigo")[0]
  Escada = levelS.get("Escada")[0]

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Trancisao2');
  })

  add([
    text("Colida Com o Bloco pra salvar o checkPoint"),
    pos(w / 100 * 30, h / 100 * 35),
    anchor("center"),
    scale(0.8),
  ])

})

scene("Trancisao2", () => {

  setBackground(0, 0, 0);

  add([
    text("Mundo 2"),
    pos(w / 2, h / 2),
    anchor("center"),
    scale(2),
    lifespan(1.5, { fade: 0.5 }),
  ])

  wait(1.5, () => {
    go("Mundo 6")
  })

})

scene("Mundo 6", () => {

  level6 = addLevel([
    // Design the level layout with symbols
    "================----------------",
    "=  77 111 777 111 &&& 111 &&   -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "=                              -",
    "= @                            -",
    "=                              -",
    "=      ^  6  ^  6  ^   (   |   -",
    "+++++++++++++++++++++++++++++o++",
  ], {
    // The size of each grid
    tileWidth: 32,
    tileHeight: 32,
    tiles: {
      '@': () => [sprite('morcego', {
        animSpeed: 0.5,
        frame: 0
      }), area({ shape: new Rect(vec2(5), 25, 30) }), pos(60, 0), body(), 'player', { speed: 120 }],
      '=': () => [sprite('ParedeD'), area(), body({ isStatic: true }), "Parede"],
      '-': () => [sprite('ParedeN'), area(), body({ isStatic: true }), "Parede"],
      '1': () => [sprite('Morceginho'), area(), body({ isStatic: true }), "Parede"],
      '7': () => [sprite('EspinhoDD'), area(), body({ isStatic: true }), "Parede"],
      '&': () => [sprite('EspinhoDN'), area(), body({ isStatic: true }), "Parede"],
      '2': () => [sprite('Plantinha'), "Parede"],
      '+': () => [sprite('floorDia'), area(), body({ isStatic: true }), "floor", "floorDia", { floor: "floorDia" }],
      '_': () => [sprite('floorNoite'), area(), body({ isStatic: true }), "floor", "floorNoite", { floor: "floorDia" }],
      '[': () => [sprite('SumiNoite'), area(), body({ isStatic: true }), "SumiNoite", "Bloco"],
      ']': () => [sprite('SumiDia'), area(), body({ isStatic: true }), "SumiDia", "Bloco"],
      '(': () => [sprite('BotaoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "BotaoN", "Bloco"],
      ')': () => [sprite('ABotaoN'), area(), body({ isStatic: true }), "ABotaoN", "Bloco"],
      '^': () => [sprite('EspinhoN'), area({ shape: new Rect(vec2(5), 15, 30) }), body({ isStatic: true }), "EspinhoN", "Bloco"],
      'o': () => [sprite('BlocoE'), area(), body({ isStatic: true }), "Escada", "Bloco"],
      '0': () => [sprite('InimigoCiclope', {
        animSpeed: 0.5,
        frame: 0
      }), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '6': () => [sprite('InimigoTartaruga', {
        animSpeed: 0.5,
        frame: 0
      }), scale(1), area({ shape: new Rect(vec2(10), 15, 20) }), pos(10, 0), body(), 'Perigo', { dir: -1, time: 0 }],
      '|': () => [sprite('Item'), scale(1), area({ shape: new Rect(vec2(5), 20, 30) }), pos(15, 0), 'Item'],
    },
  })
  Timer = 21

  Item = 0
  Vida = 3
  turn = 0
  ColisionNoite = true
  ColisionDia = false
  setBackground(3, 198, 252);

  Player = level6.get("player")[0]
  Inimigo = level6.get("Perigo")[0]
  Inimigo2 = level6.get("Perigo")[1]
  Escada = level6.get("Escada")[0]

  Inimigo.play("move")
  Inimigo2.play("move")

  PlayerF()
  InimigoF()
  Objetos()

  Player.onCollide('EscadaNoite', () => {
    go('Win');
  })

  add([
    text("1- Espinhos e Inimigos"),
    pos(w / 100 * 15, h / 100 * 15),
    anchor("center"),
    scale(0.8),
    lifespan(2, { fade: 0.5 }),
  ])

})

go("Menu");

//--------------------LOADS-------------------------------------

loadSprite("morcego", "https://i.imgur.com/vkECyF5.png", {
  sliceX: 5,
  anims: {
    idle: {
      from: 0,
      to: 0,
      loop: true,
    },
    jump: {
      from: 1,
      to: 1,
    },
    move: {
      from: 2,
      to: 4,
      loop: true,
    }
  }
});
loadSprite("ParedeD", "https://i.imgur.com/iZ4XhfH.png");
loadSprite("ParedeN", "https://i.imgur.com/GggxOPl.png");
loadSprite("floorDia", "https://i.imgur.com/RjX5AGw.png");
loadSprite("floorDeath", "https://i.imgur.com/4n2CNxl.png");
loadSprite("floorNoite", "https://i.imgur.com/ILoRrvm.png");
loadSprite("SumiNoite", "https://i.imgur.com/PMdMHqF.png");
loadSprite("SumiDia", "https://i.imgur.com/KeTY9Zr.png");
loadSprite("BotaoN", "https://i.imgur.com/QTQJk05.png");
loadSprite("ABotaoN", "https://i.imgur.com/QJmmO0A.png");
loadSprite("InimigoMorcego", "https://i.imgur.com/zcvQXuJ.png");
loadSprite("InimigoTartaruga", "https://i.imgur.com/eeTmDPV.png", {
  sliceX: 7,
  anims: {
    idle: {
      from: 0,
      to: 0,
      loop: true,
    },
    move: {
      from: 1,
      to: 6,
      loop: true,
    }
  }
})
loadSprite("InimigoCiclope", "https://i.imgur.com/G0X5wzC.png", {
  sliceX: 6,
  anims: {
    idle: {
      from: 0,
      to: 0,
      loop: true,
    },
    move: {
      from: 1,
      to: 5,
      loop: true,
    }
  }
});
loadSprite("Item", "https://i.imgur.com/MaK6mRo.png");
loadSprite("MainMenu", "https://i.imgur.com/qkd0aID.jpg");
loadSprite("EscadaNoite", "https://i.imgur.com/VdVxc0z.png");
loadSprite("BlocoE", "https://i.imgur.com/mEVWFj4.png");
loadSprite("BlocoC", "https://i.imgur.com/ze1A3xx.png");
loadSprite("EspinhoN", "https://i.imgur.com/6syrByH.png");
loadSprite("Plantinha", "https://i.imgur.com/6IahpJV.png");
loadSprite("EspinhoDN", "https://i.imgur.com/2DQJKpb.png");
loadSprite("EspinhoDD", "https://i.imgur.com/SMnc2mh.png");
loadSprite("Morceginho", "https://i.imgur.com/8LqgqSc.png");
loadSound("score", "/sounds/score.mp3")
loadSound("Musica", "/sounds/Musica Jogo ah.wav")

//debug.inspect = true