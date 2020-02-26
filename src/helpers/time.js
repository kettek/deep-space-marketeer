// 897 years beyond SE (space era, so 2897 in CE)
const startTime = 2020
const baseTime = 897

//
Date.prototype.toSEString = function() {
  let year = this.getUTCFullYear() - startTime + baseTime
  let hour = (this.getUTCHours() / 24).toFixed(1)*10
  let minutes = Math.round(this.getUTCMinutes() / 60 * 100)
  return `${year}.${hour}${minutes}`
}