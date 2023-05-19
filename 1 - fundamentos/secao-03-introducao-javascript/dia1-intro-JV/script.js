// let myName = 'Nalther';
// let birthCity = 'Salvador';
// let birthYear = 2001;


// console.log('Meu nome é ' + myName + '. Nasci em ' + birthCity + ', no ano de ' +birthYear + '.');



// let sal = 2550;

// console.log(sal + sal);
// console.log(sal - sal);
// console.log(sal * sal);
// console.log(sal / sal);
// console.log(sal ** sal);

// '++' ou '--' ou '+=' ou '-=' incrementa ou decrementa uma unidade ao valor da variavel 

// sal++;
// sal--;

// sal -= 1;

// console.log(sal);



// let patientId = 50;  //number
// let isEnrolled = true; //boleano
// let patientInfo = { //objeto
//   firstName: 'Ana', //string
//   lastName: 'Santos', //string
// };
// let patientEmail = 'ana@email.com'; //string

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);



// let base = 5;
// let height = 8;
// let area = (base * height);
// let perimeter = ((base * 2) + (height * 2))

// console.log(area);
// console.log(perimeter);



// let trybe = 18.30;

// if (trybe >= 14 && trybe < 14.40) {
//     console.log('Momento Inicial');
// } 
// else if (trybe >= 16.20 && trybe < 18) {
//     console.log('Aula Ao Vivo');
// } 
// else if (trybe >= 19.30 && trybe < 20) {
//     console.log('Fechamento');
// } 
// else {
//     console.log('VÁ ESTUDAR');
// };


// let nota = 50;

// if(nota >= 80) {
//     console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
// }
// else if(nota < 80 && nota >= 60) {
//     console.log('Você está na lista de espera.');
// }
// else {
//     console.log('Infelizmente, você reprovou.');
// }

// '||' OR
// '&&' AND
// '!' NOT

// let comida = 'pão na chapa';
// let bebida = 'café';

// if (bebida === 'café' && comida === 'pão na chapa') {
//   console.log('Muito obrigado(a) pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// };


// let currentHour = 14.22;
// let message = ' ';

// if(currentHour >= 22) {
//     message = 'Não deveríamos comer nada, é hora de dormir'
//     console.log(message);
// }
// else if(currentHour >= 18 && currentHour < 22) {
//     message = 'Rango da noite, vamos jantar :D'
//     console.log(message);
// }
// else if(currentHour >= 14 && currentHour < 18) {
//     message = 'Vamos fazer um bolo pro café da tarde?'
//     console.log(message);
// }
// else if(currentHour >= 11 && currentHour < 14) {
//     message = 'Hora do almoço!!!'
//     console.log(message);
// }
// else if(currentHour >= 4 && currentHour <= 11) {
//     message = 'Hmmm, cheiro de café recém-passado'
//     console.log(message);
// }

// let bebida1 = 'suco';
// let bebida2 = 'cafe';

// if(bebida1 === 'espumante' || bebida2 === 'ice') {
//     console.log('Obrigado, tenha um bom dia');
// }
// else {
//     console.log('Eu não pedi isso.');
// };


// let weekDay = 'sabado';
// if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//     console.log('Mais de um dia de Estudo na TRYBE!');
// } else {
//     console.log('FINALMENTE!!!');
// }

// let sts = 'null';

// switch(sts) {
//     case 'aprovada':
//         console.log('Parabéns, você está no grupo de pessoas aprovadas!');
//         break;

//     case 'lista':
//         console.log('Você está na nossa lista de espera');
//         break;
    
//     case 'reprovada':
//         console.log('Infelizmente, você reprovou.');
//         break;
        
//     default:
//         console.log('informação incorreta');
// }

// exercicios do dia

// exe 1

let a = 5;
let b = 10;

let soma = a + b;
console.log(soma);

let sub = a - b;
console.log(sub);

let mult = a * b;
console.log(mult);

let div = a / b;
console.log(div);

let mod = a % b;
console.log(mod);



// exe 2

let a = 12;
let b = 13;

if(a > b) {
    console.log(a);
} else {
    console.log(b);
}



// exe 3

let a = 10;
let b = 90;
let c = 805;

if(a > b && a > c) {
    console.log(a);
} else if(b > a && b > c) {
    console.log(b);
}else {
    console.log(c);
}



// exe 4

let a = 0;

if(a > 0) {
    console.log('positivo');
} else if(a < 0) {
    console.log('negativo');
} else {
    console.log('zero');
}



// exe 5

let a = 60;
let b = 60;
let c = 60;

if(a < 0 || b < 0 || c < 0) {
    console.log('Erro: Numero inválido');
} else if(a + b + c === 180) {
    console.log('true');
} else if(a + b + c != 180) {
    console.log('false');
}
