import seedrandom from 'seedrandom'
import Satellite from './satellite'

class Planet {
  constructor(system) {
    this.system = system
    //
    this.name = ''
    //
    this.governance = ''
    this.federated = false
    this.population = 0
    this.wealth = 0
    //
    this.satellites = []
    this.landMass = 29 // 29%
    this.surfaceArea = 510000000 // square km
    this.averageOrbitalSpeed = 29.78 // km/s
    this.standardGravity = 9.80665
    this.meridionalCircumference = 40008 // km
    this.atmosphere = {
      "N2": 78.084,
      "O2": 20.946,
      "Ar": 0.9340,
      "Other": 0.04338,
    }
    this.averageTemperature = 14.6 // C
  }

  randomize(rng=new seedrandom()) {
    this.rng = rng
    //
    let satelliteCount = this.rng.int32() % 8
    for (let s = 0; s < satelliteCount; s++) {
      this.satellites.push(new Satellite(this))
      this.satellites[s].randomize()
    }
  }
  finalize() {
    for (let satellite in this.satellites) {
      satellite.finalize()
    }
  }
}

export default Planet