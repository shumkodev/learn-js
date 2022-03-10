// Ф-ции 
// Function declaration 
function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Eugen')

//Function Expression 
const sayHello2 = function (name) {
    console.log('Hello ' + name);
}
sayHello2('Eugen')

// Аноноимные ф-ции
// let counter = 0
// setInterval(function(){
//     console.log(counter)
//     counter++
// }
// , 1000)

// Стрелочные ф-ции
const arrowSayHello = (name) => {
    console.log('Hello ' + name)
}

arrowSayHello('Twitch')

// Параметры по умолчанию 
const summ = (a,b = 0) => a + b
console.log(summ(2))

function summAll (...all) {
    console.log(all)
}

summAll(1,2,3,4,5,6,7)

const summAll2 = (...all) => console.log(all)
summAll2(1,2,3,4,5)

// Замыкание 
function sayBy (name) {
    return function (lastname) {
        console.log(name + lastname);    
    }
}

const by = sayBy('Eugen')
console.log(by(' Shumko'));