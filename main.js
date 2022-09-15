//  Objetos

// const user = {
//     name: 'Héricles',
//     idade: 23,
//     address: {
//         street: 'Achada Sao Filipe',
//         number: 66
//     },
// }


// Desestruturacao ****************************

// const address = user.address;
// document.body.innerText = JSON.stringify(address)
// const { address, name, talento = 'Futebol'} = user
// document.body.innerText = JSON.stringify({address, name, talento})

// function mostraIdade(user) {
//     return user.idade
// }

// document.body.innerText = mostraIdade(user)

// function mostraIdade({ idade }) {
//     return idade
// }

// document.body.innerText = mostraIdade(user)


// Rest Operator ************************************

// const array = [1,2,3,4,5,6,7,8,9];

// const [first, , third, ...rest] = array;

// document.body.innerText = JSON.stringify({first, third, rest})


// Short Syntax **************************

// const name = 'Diego'
// const age = 27

// const usuario = {
//     name,
//     age,
// }

// document.body.innerText = JSON.stringify(usuario)



// Optional Chaining *********************************

// const user = {
//     name: 'Forlan',
//     age: 37,
//     address: {
//         street: 'Uruguaia',
//         number: 2000,
//         zip: {
//             code: '9000000',
//             city: 'Praia',
//         },

//         showFullAddress() {
//             return 'OK'
//         }
//     },
// };

// document.body.innerText = user.address?.showFullAddress?.()



// *******************Metodos de array**************************
// os mais importantes: map, filter, every, some, find, findIndex, reduce


// const array = [1, 2, 3, 4, 5];

// FOR

// for (const i of array) {
//     document.body.innerText += i;
// }


// FOREACH
// array.forEach(item => {
//     document.body.innerText += item;
// })

// *******************  Metodo MAP() ****************************
// Retorna valores do array e com o mesmo tamanho da original
// uso map() para transformar um array em outro mais com mesmo taman

// const array = [1, 2, 3, 4, 5];

// const novoArray = array.map(item => {
//    return item * 2;
// })

// document.body.innerText = JSON.stringify(novoArray)


// const array2 = [6, 7, 8, 9, 10];

// const novoArray2 = array2.map(item => {
//     if(item % 2 === 0) {
//         return item * 10;
//     }

//     return item;
// })

// document.body.innerText = JSON.stringify(novoArray2)


// **************** Metodo FILTER()  **********************************
// ou seja, ele pega um pedaço de um array, corta, filtra

// const array = [1, 2, 3, 4, 5, 6];

// const novoArray = array.filter(item => item % 2 === 0)
// document.body.innerText = JSON.stringify(novoArray)



// ************* Metodo EVERY() ****************
// Retorna um booleano, ou seja, um true or false

// const array = [9, 0, 2, 7, 1];

// const todosItensSaoNumeros = array.every(item => {
//     return typeof item === 'number'
//  })
// document.body.innerText = JSON.stringify(todosItensSaoNumeros)




// ********** Metodo SOME() **************
// Booleano
// Verifica se pelo menos 1 item satisfaz a condicao

// const array = [1, 3, 5, 4];

// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item !== 'number';
// })

// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)



// ****************Metodo FIND()***********************
// Serve para encontrar pelo menos 1 item do array
// retorna o primeiro item solicitado no array

// const array = [1, 2, 3, 4, 5];
// const par = array.find(item => {
//     return item % 2 === 0;
// })

// document.body.innerText = JSON.stringify(par)


// ********** Metodo FINDINDEX() ******************

// semelhante ao FIND()
// Retorna o index do item solicitado do array

// const array = [1, 2, 3, 4, 5];

// const novoArray = array.findIndex(item => {
//     return item % 2 === 0;
// })

// document.body.innerText = JSON.stringify(novoArray)


// **************** Metodo REDUCE() ***************
// Pega um array e cria uma nova estrutura de dados apartir dela
// Ou seja, reduzir o meu array a algo ....

// const array = [1, 2, 3, 4, 5];

// const novoArray = array.reduce((acc, item) => {
//     return acc + item;
// }, 0)

// document.body.innerText = JSON.stringify(novoArray);



// se quiser criar um obj apartir do meu array:
// const objecto = array.reduce(() => {

// }, {})



// Propiedades do objecto **************************************

// document.body.innerText = ('name' in user)
// document.body.innerText = Object.keys(user)
// document.body.innerText = Object.values(user)
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user))




//  ************* Template Literals ***********************

// const name = 'Diego';
// const message = `Bem-Vindo, ${name ?? 'Visitante'}`;

// document.body.innerText = JSON.stringify(message)





//  ******************* PROMISES ****************************
// Sao tipos promessas que vao acontecer
// futuro

// const somaDoisNumeros = (a, b) => {
//     return new promise((resolve, rejet) => {
//         setTimeout(() => {
//             rejet(a + b);
//         }, 2000)
//     });
// }

// somaDoisNumeros(1, 3).then(soma => {
//     document.body.innerText = soma
// }
// ).catch(err => {
//     console.log(err)
// })

// Fecth serve para disparar uma requisicao http

// fetch('https://api.github.com/users/hacles100')
// .then(response => {
//     return response.json();
// })
// .then(body => {
//     console.log(body);
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('Já Deu');
// })



async function buscaDadosNoGithub() {
    try{
        const response = await fetch('https://api.github.com/users/hacles100')
        const body = await response.json();
        console.log(body);

    }catch (err) {
        console.log(err);
    }finally {
        console('Deu');
    }
}

buscaDadosNoGithub()