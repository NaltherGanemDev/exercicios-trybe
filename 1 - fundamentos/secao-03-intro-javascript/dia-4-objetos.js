/* //OBJETOS

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata.');


//FOR-IN

let pizzas = {
    sabor: 'palmito',
    preco: '39,90',
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }


  //FOR-OF

  let comidas = ['pizza', 'sushi', 'hamburgue'];
  for(let key of comidas) {
    console.log(key);
  }

  //EXERCICIOS

  let names = {
    person1: 'Joao',
    person2: 'Maria',
    person3: 'Jorge'
  };
  for (let key in names) {
    console.log('Olá, ' + names[key]);
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
    console.log(key + ': ' + car[key]);
  } */



/*   let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
  };


  for (let key in info) {
    console.log(info[key] + ' e ' + info2[key]);
  }
 */


/*   console.log('Bem-vinda, ' + info.personagem);
 */

/* info.recorrente= 'Sim';
console.log(info); */

/* for (let key in info) {
    console.log(key);
} */

/* for(let key in info) {
    console.log(info[key]);
} */



let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

 /*  for (let key in leitor) {
    console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');
  }
 */

    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

