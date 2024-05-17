const express = require('express')
const app = express()

// Endpoint /oi -> Olá, mundo!
app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})
  
const lista = ['Java', 'Kotlin', 'Android']

// Endpoint Read All [GET] /personagem
app.get('/personagem', function (req, res) {
  res.send(lista)
})

app.listen(3000)