'use strict'

let frase = prompt('Canta por esa boquita...')

document.write(frase+"<br />")

for(let i=0;i<frase.length();i++) {
    if(frase.toLowerCase=='a' || frase.toLowerCase=='e' || frase.toLowerCase=='i' || frase.toLowerCase=='o' || frase.toLowerCase=='u')
        document.write(frase.charAt(i))
}