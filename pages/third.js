let array = []
for(let i = 0; i < Infinity; i++){
    let a = prompt(`Введите команду add | del | stop
    Например add, Иван`)
    let b = a.split(`, `)
    if(b[0] == `add`){
        array.push(b[1])
    }
    else if(b[0] == `del`){
        for(let key in array){
            if(array[key] == b[1]){
                array.splice(key,1)
            }
        }
    }
    else if(b[0] == `stop`){
        console.log(array);
        break
    }
    console.log(array);
}

