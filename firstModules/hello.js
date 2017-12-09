let helloYou = (name) => {
    console.log(hi + " " + name)
}

let hi = 'Bonjour'

// Exporte comme Objet
module.exports = {
    helloYou: helloYou
}

// Exporte hello comme methodes
// module.exports = hello