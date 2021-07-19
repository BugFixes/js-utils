module.exports = function () {
  // Set a different timezone so we can test the difference between local time and UTC
  process.env.TZ = 'Europe/Amsterdam'
}
