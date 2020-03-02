const express = require('express')
const { getWeather } = require('./index.js')

const app = express()

app.get('/', async (req, res) => {
  const getData = await getWeather()
  res.send('<h1>' + `Current Temperature in ${getData.name} is ${getData.main.temp}°C` + '</h1>')
  console.log(getData.name)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
