import seedrandom from 'seedrandom'
import Planet from './planet'

class System {
  constructor(galaxy) {
    this.galaxy = galaxy
    //
    this.name = ''
    //
    this.age = 4.568 // billion years
    this.location = '' // ?
    this.planets = []
    this.stars = []
  }

  randomize(rng=new seedrandom()) {
    this.rng = rng
    //
    let planetCount = this.rng.int32() % 8
    for (let p = 0; p < planetCount; p++) {
      this.planets.push(new Planet(this))
      this.planets[p].randomize(rng)
    }
  }
  finalize() {
    for (let planet in this.planets) {
      planet.finalize()
    }
  }
}

export default System