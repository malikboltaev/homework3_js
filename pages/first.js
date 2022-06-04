let array = []
for (let i = 1; i <= 10; i++) {
    let user = prompt(`Введите имя и возраст человека с id ${i}:`).split(" ")
    let person = {
        name: user[0], 
        age: user[1]
    }
    array.push(person)
}


for (let i = 1; i <= 10; i++) {
    let person = array[i - 1]
    console.log(`Пользователь ${i}
    Имя ${person.name}
    Возраст ${person.age}
    
    `)
}