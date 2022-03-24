function getTodo(id) {
    const p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            const o = { id, title: `Todo id : ${id}` };
            resolve(o);

        }, 1000);


    });

    return p;
}

// const todoPromise = getTodo(1);
// todoPromise
//     .then(function (todo) {
//         console.log(todo)
//         return getTodo(todo.id + 1);
//     })
//     .then(function (todo) {
//         console.log(todo)
//         return getTodo(todo.id + 1);
//     })

// const todoPromise1 = getTodo(1);
// const todoPromise2 = getTodo(2);
// const todoPromise3 = getTodo(3);

Promise.all([todoPromise1,todoPromise2,todoPromise3]).then(f);


function f(v) {
    console.log(toto)
}



async function main(){
    const todo1 = await getTodo(1);
    console.log(todo1)
    const todo2 = await getTodo(2);
    console.log(todo2)
    const todo3 = await getTodo(3);
    console.log(todo3)

}

main()



// function sayHello(){
//     console.log("Hello")
// }

const sayHello = () => console.log("Hello")

sayHello()


const add = (a,b) =>a+b


add(5,2)




