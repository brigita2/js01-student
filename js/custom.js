//KINTAMIEJI    

let num = 6 + 4;
let vsc = 'Labas';
let relationship = (vsc == num);

console.log(num + ', ' + vsc + ', ' + typeof(vsc) + ', ' + relationship);
console.log(`${num}, ${vsc}, ${typeof(vsc)}, ${relationship}`);

// let firstName = 'Jonas';
// let lastName = 'Jonaitis';
// let data = `${firstName} ${lastName}`;

// console.log(data);

//Savybės-pateikia tam tikra informacija apie kintamoo duomenis;
//Metodai-funkcijos, kurios manipuliuoja duomenimis esančiais kintamuosiuose;

let tekstas = 'Pirmas'
console.log(tekstas.length)  //length yra SAVYBĖ(property)
console.log(tekstas.toUpperCase()) //metodas 
console.log(tekstas.toLowerCase())
console.log(tekstas.charAt(4))
console.log(tekstas[4])
console.log(tekstas.indexOf('m')); //kai reikia suzinoti kuris index'as
tekstas = 'Čia gali būti Jūsų reklama.'
console.log(tekstas.replace('gali būti', 'yra')) //pakeicia reikšmę, 1parametras-ką keičiame, 2parametras-į ką keičiame
console.log(tekstas.substring(4, 14)) // nuo 4index iki 14index rašo
console.log(tekstas.substring(14)) // nuo 14index rašo iki galo
console.log(tekstas.substr(4, 9)) 

let x = 6.34
console.log(Math.round(x)) //iprastas apvalinimas
console.log(Math.ceil(x)) //i lubas apvalina
console.log(Math.floor(x)) // i zemesne puse apvalina

let y = 5.8
let z = 9

console.log(Math.max(x,y,z))  //parašo didžiausią skaičių
console.log(Math.min(x,y,z))

let i = Math.round(Math.random() * 100) // generuoja atsitiktinius skaicius   random sugeneruoja nuo 0 iki 1, su daug po kablelio.

// Math.floor(Math.random() * (max - min + 1) + min)    //formule norint gauti skaiciu pasirinktinai nuo 10 iki 50 pavyzdziui
i = Math.floor(Math.random() * (50 - 10 + 1) + 10)
console.log(i)

//while ciklas
// 1 reikalingas kintamasis
let numeris = 1
// skliausteliuose salyga, kada turi sustoti ciklas
while (numeris <= 10) {
    console.log(numeris)
    numeris++
}

// for ciklas 
for (let nr = 1; nr <= 10; nr++) {
    console.log(nr);
}

let suma = 0
for (let i = 0; i <= 5; i++) {
    suma = suma + 1;
}
console.log(suma);

// alert('Virusas');
// confirm('Ar tikrai norite uždaryti šį puslapi?');
// prompt('Koks tavo vardas?');

// let turimVarda = false;

// while (turimVarda == false) {
//     let userVardas = prompt("Koks tavo vardas?");

//     if (userVardas) {
//         if (confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
//             alert(`Labas, ${userVardas}!`);
//             turimVarda = true;
//         } else {
//             alert('Bandyk dar kart.');
//         }
//     } else {
//         alert('Bandyk dar kart');
//     }
// }
let studentai = ['Lumas', 'Kestutis', 'Silvija', 'Ursule', 'Laurynas']
console.log(studentai)
console.log(studentai[4])
studentai[4] = 'Tomas';
console.log(studentai[4])

for(let i = 0; i < studentai.length; i++) {
    console.log(studentai[i])
}

//pop panaikina reiksme
studentai.pop()

//push prideda reiksme
studentai.push('Arturas')
console.log(studentai)
