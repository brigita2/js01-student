/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
// let firstName = 'Brigita'
// let lastName = 'Gaubiene'
// let birthYear = 1993
// let currentYear = 2023

// let age = currentYear - birthYear
// console.log(`Aš esu ${firstName} ${lastName}. Man yra ${age} metų.`)


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let num1 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
// let num2 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
// console.log(num1);
// console.log(num2);

// let result;

// if (num1 > num2) {
//     result = (num1 / num2).toFixed(2);
// } else if (num1 < num2) {
//     result = (num2 / num1).toFixed(2);
// } else {
//     result = 'Dalyba iš nulio negalima';
// }

// console.log(result);



/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let num1 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
let num2 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
let num3 = Math.floor(Math.random() * (25 - 0 + 1) + 0);
console.log(num1 + ' num1');
console.log(num2 + ' num2');
console.log(num3 + ' num3');

let middleNumber;

if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    middleNumber = `Vidutinis skaičius yra num1, jo reikšmė yra ${num1}, o kitų ${num2} ir ${num3}`;
} else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
    middleNumber = `Vidutinis skaičius yra num2, jo reikšmė yra ${num2}, o kitų ${num1} ir ${num3}`;
} else if (num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2) {
    middleNumber = `Vidutinis skaičius yra num3, jo reikšmė yra ${num3}, o kitų ${num1} ir ${num2}`;
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    middleNumber = `Iškrito du vienodos reikšmės skaičiai`; 
}

console.log(middleNumber)



/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr3= Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(kr1);
console.log(kr2);
console.log(kr3);

// kr1 = 1;
// kr2 = 1;
// kr3 = 1;

let answer;

if (kr1 === kr2 && kr1 === kr3 && kr2 === kr3) {
    answer = `Visos kraštinės lygios, todėl išeina lygiašonis trikampis`;
} else {
    answer = `Try again`;
}

console.log(answer);
/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let random1 = Math.floor(Math.random() * (2 - 0 + 1) + 0);
let random2 = Math.floor(Math.random() * (2 - 0 + 1) + 0);
let random3 = Math.floor(Math.random() * (2 - 0 + 1) + 0);
let random4 = Math.floor(Math.random() * (2 - 0 + 1) + 0);
console.log(`${random1}, ${random2}, ${random3}, ${random4}`)


let count0 = 0;
let count1 = 0;
let count2 = 0;

if (random1 === 0) {
    count0++
}
if (random2 === 0) {
    count0++
}
if (random3 === 0) {
    count0++
}
if (random4 === 0) {
    count0++
}

if (random1 === 1) {
    count1++
}
if (random2 === 1) {
    count1++
}
if (random3 === 1) {
    count1++
}
if (random4 === 1) {
    count1++
}


console.log(`${count0}, ${count1}, ${count2}`)




/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let startNum = -10;

while (startNum <= 10) {
    if (startNum < 0) {
        console.log(`[${startNum}]`);
    } else if (startNum === 0) {
        console.log(`(${startNum})`);
    } else {
        console.log(`{${startNum}}`);
    }
    startNum++;
}


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let candles = Math.floor(Math.random() * (3000 - 5 + 1) + 5);
console.log(candles)

function countPrice(number, price) {
    if (number > 1000 && number < 2000) {
        let countDiscount = number * 0.03;
        console.log(countDiscount);

        let countPrice = number * price - countDiscount;
        console.log(countPrice);

        return answer = `Pirko ${number} žvakes, mokėtina suma: ${countPrice}`;
    } else if (number >= 2000) {
        let countDiscount = number * 0.04;
        // console.log(countDiscount);

        let countPrice = number * price - countDiscount;
        // console.log(countPrice);

        return answer = `Pirko ${number} žvakes, mokėtina suma: ${countPrice}`;
    } else {
        let countPrice = number * price;
        // console.log(countPrice);

        return answer = `Pirko ${number} žvakes, mokėtina suma: ${countPrice}`;
    }
}
let result = countPrice(candles, 1);
// console.log(result);


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let one = Math.floor(Math.random() * (100 - 0 + 1) + 0);
let two = Math.floor(Math.random() * (100 - 0 + 1) + 0);
let three = Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log(one, two, three);

function countAverage(num1, num2, num3) {
    let calculation = Math.round((num1 + num2 + num3) / 3);
    let calculation2 = 0;
    let units = 0;

    if (num1 >= 10 && num1 <= 90) {
        calculation2 += num1;
        units++;
    }
    if (num2 >= 10 && num2 <= 90) {
        calculation2 += num2;
        units++;
    }
    if (num3 >= 10 && num3 <= 90) {
        calculation2 += num3;
        units++;
    }

    if (calculation2 !== 0 && units > 0) {
        if (units === 3) {
            calculation2 = Math.round(calculation2 / 3);
        } else if (units === 2) {
            calculation2 = Math.round(calculation2 / 2);
        } else {
            calculation2 = `Gautas tik vienas skaičius.`
        }
    }
    
    console.log(units);
    console.log(calculation2);

    return `Bendras vidurkis ${calculation}. Vidurkis skaičių nuo 10 iki 90: ${calculation2}`;
}
let average = countAverage(one, two, three);
console.log(average);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let kint1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
console.log(kint1, kint2, kint3, kint4, kint5, kint6);

function sortNumbers (k1, k2, k3) {
    let list = '';

    if (k1 >= k2 && k1 >= k3) {
        list += ` ${k1} k1`;
        if (k2 >= k3) {
            list += ` ${k2} k2`;
            list += ` ${k3} k3`;
        } else {
            list += ` ${k3} k3`;
            list += ` ${k2} k2`;
        }
    } else if (k2 >= k1 && k2 >= k3) {
        list += ` ${k2} k2`;
        if (k1 >= k3) {
            list += ` ${k1} k1`;
            list += ` ${k3} k3`;
        } else {
            list += ` ${k3} k3`;
            list += ` ${k1} k1`;
        }
    }

    console.log(list)
}
let task10 = sortNumbers(kint1, kint2, kint3);
// console.log(task10);