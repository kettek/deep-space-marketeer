import seedrandom from 'seedrandom'

class Satellite {
  constructor(planet) {
    this.planet = planet
    //
    this.name = ''
    //
    this.surfaceArea = 0 // square km
    this.averageOrbitalSpeed = 0 // km/s
    this.standardGravity = 0
    this.meridionalCircumference = 0 // km
    this.averageTemperature = 0 // C
  }

  randomize(rng=new seedrandom()) {
    this.rng = rng
    //
  }
  finalize() {
  }
}

export default Satellite