'use strict'

let frase = prompt('Canta por esa boquita...')

document.write(frase)

for(let i=0;i<frase.length();i++) {
    document.write(frase.charAt(i))
}