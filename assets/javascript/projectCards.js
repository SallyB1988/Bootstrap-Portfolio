class Project {
  constructor(name, image, audio) {
    this.name = name;
    this.image = image;
    this.health = 0;
    this.attackIncrease = 0;
    this.attackPower = 0;
    this.sound = () => audio.play()
  }
}

const players = [
  new Player('Mario', './assets/images/mario.png', mario),
  new Player('Koopa', './assets/images/koopa.png', koopa),
  new Player('Daisy', './assets/images/daisy.png', daisy),
  new Player('Bowser', './assets/images/bowser.png', bowser),
  new Player('Wario', './assets/images/wario.png', wario),
  // new Player('Waluigi', './assets/images/waluigi1.png', waluigi),
  new Player('Yoshi', './assets/images/yoshi.png', yoshi),
]



