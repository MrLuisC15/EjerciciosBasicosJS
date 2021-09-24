'use strict'

let frase = prompt('Canta por esa boquita...')

// document.write(frase+"<br />")

for(let i=0;i<frase.length();i++) {
    if(frase(i).toLowerCase=='a' || frase(i).toLowerCase=='e' || frase(i).toLowerCase=='i' || frase(i).toLowerCase=='o' || frase(i).toLowerCase=='u')
        document.write(frase.charAt(i))
}