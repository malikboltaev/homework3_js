let food = receipt()
let array = []
let dostavka = 9000
let sum = dostavka
for(let key in food){
    array.push(`${key} ${food[key].info}`)
    sum += food[key].price
}
console.log(`Вы заказали ${array} | Общая стоимость ${sum} сумм с доставкой (${dostavka})`);