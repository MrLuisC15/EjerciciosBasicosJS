'use strict'

let frase = prompt('Canta por esa boquita...')

// document.write(frase+"<br />")

for(let i=0;i<frase.length();i++) {
    if(frase.charAt(i).toLowerCase=='a' || frase.charAt(i).toLowerCase=='e' || frase.charAt(i).toLowerCase=='i' || frase.charAt(i).toLowerCase=='o' || frase.charAt(i).toLowerCase=='u')
        document.write(frase.charAt(i))
}