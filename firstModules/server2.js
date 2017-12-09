// let workArray = require('lodash')

// let app = require('./app').start(8080)

// console.log(workArray.map([1, 2, 3], (n) => { return n * 3 }))


// // app.on('root', function (response) {
// //     response.write('je suis a la racine')
// // })

// PREMIERE AVEC EXPRESS.JS
// let express = require('express')
// let app = express() 

// Ou 

let app = require('express')() // Execution directe de la fonction express

app.get('/', (request, response) => {
    response.send('Salut tu es bien à la racine')
})

app.get('/demo', (request, response) => {
    response.send('La tu est sur la page de demo')
})

app.listen(8080)