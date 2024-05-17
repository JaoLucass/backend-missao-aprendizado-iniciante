const express = require('express')
const app = express()

// Endpoint /oi -> Olá, mundo!
app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
})
  
app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000")
})