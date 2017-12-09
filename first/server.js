let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events')


// let server = http.createServer()

// server.on('request', (request, response) => {

//     response.writeHead(200)

//     let query = url.parse(request.url, true).query
//     let name = query.name === undefined ? "anonyme" : query.name

//     fs.readFile('index.html', 'utf-8', (err, data) => {
//         if (err)  {
//             response.writeHead(404)
//             response.end("Ce fichier n'existe pas")        
//         } else {
//             response.writeHead(200, {
//                 'Content-type': 'text/html; charset=utf-8'
//             })
//             data = data.replace('{{ name }}', name)
//         }
//         response.end(data)
//     })
// })
// server.listen(8080)



// Creer un events 
// const EventEmitter = require('events')

// let myListener = new EventEmitter()

// myListener.on('erreur', (a, b) => {
//     console.log('Erreur sur' + a + ' et ' + b)
// })

// // Execute une seule fois
// // myListener.once('erreur', (a, b) => {
// //     console.log('Erreur sur' + a + ' et ' + b)
// // })

// myListener.emit('erreur', 10, 15)


// Copier un fichier grace au stream

// let fs = require('fs')
// let file = 'demo.mp4'

// fs.stat(file, (err, stat) => {
//     let total = stat.size
//     let progress = 0 
//     let read = fs.createReadStream(file)
//     let write = fs.createWriteStream('copy.mp4')
//     // let write2 = fs.createWriteStream('copy2.mp4')
//     read.on('data', (chunk) => {
//         progress += chunk.length
//         console.log("J'ai lu " + Math.round(100 * progress / total) + "%")
//     })    
//     read.pipe(write)
//     // read.pipe(write2)
//     write.on('finish', () => {
//         console.log('Le fichier a bien été copié')
//     })
// })


