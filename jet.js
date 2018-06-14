class Jet {
  constructor(color, size){
    this.color = color;
    this.size = size;
  }

  fly () {
    console.log('whoosh!');

  }takeOff () {
    console.log('lift off!');

  }
}

module.exports = Jet;