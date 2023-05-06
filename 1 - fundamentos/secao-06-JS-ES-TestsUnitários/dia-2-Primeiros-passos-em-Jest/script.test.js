// const sum = require('./script');
// const multi = require('./script');
// const media = require('./script')

// test('soma dos valores', () => {
//     expect(sum(1, 2)).toBe(3);
// });


// test('multiplicação dos valores', () => {
//     expect(multi(215, 354)).toBe(76110);
// });

// test('media dos valore', () => {
//     expect(media(3, 5, 10)).toBe(6)
// });

/////////////////////////////////////////////////////////////////

// loginValidation.test.js
// const {
//     greetingMessage,
//     loginErrorMessage,
//     verifyCredentials,
//   } = require('./script.js');
//   describe('a função verifyCredentials()', () => {
//     // veja que testamos o objeto `user` agora com outros dados
//     const user = {
//       userName: 'Joana',
//       password: 123456,
//     };
    
//     it('verifyCredentials() calls the correct function depending on the user and password input', () => {
//       expect(verifyCredentials(user)).toBe(
//         'Hello, Joana! Que bom ter você de volta'
//       );
//     });
//     it('greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`', () => {
//       expect(greetingMessage('Lucas')).toBe(
//         'Hello, Lucas! Que bom ter você de volta'
//       );
//     });
//     it('loginErrorMessage() returns a message in the format: `Pessoa usuária ${user} não encontrada, tente novamente!`', () => {
//       expect(loginErrorMessage('Bob')).toBe(
//         'Pessoa usuária Bob não encontrada, tente novamente!'
//       );
//     });
//   });

///////////////////////////////////////////////////////////////////

// const myRemove = require('./script');

// describe('a função myRemove', () => {
//     it('retorna array removendo item correto', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
//         expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//         expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//     });
// });

// const myFizzBuzz = require('./script');

// describe('a função fizzbuzz', () => {
//     test('retorna o numero esperado', () => {
//         expect(myFizzBuzz(15)).toBe('fizzbuzz')
//         expect(myFizzBuzz(9)).toBe('fizz')
//         expect(myFizzBuzz(5)).toBe('buzz')
//         expect(myFizzBuzz(13)).toBe(13)
//         expect(myFizzBuzz('10')).toBe(false)
//     });
// });


// const { encode, decode } = require('./script.js');

// describe('testa funções encode e decode', () => {
    
//     test('função decode é definida', () => {
//         expect(decode).toBeDefined()
//     });

//     test('função decode é uma função', () => {
//         expect(typeof decode).toEqual('function')
//     });

//     test('testa se 1 é convertido em a', () => {
//         expect(decode('1')).toEqual('a')
//     });

//     test('testa se 2 é convertido em e', () => {
//         expect(decode('2')).toEqual('e')
//     });

//     test('testa se 3 é convertido em i', () => {
//         expect(decode('3')).toEqual('i')
//     });

//     test('testa se 4 é convertido em o', () => {
//         expect(decode('4')).toEqual('o')
//     });

//     test('testa se 5 é convertido em u', () => {
//         expect(decode('5')).toEqual('u')
//     });

//     test('função encode é definida', () => {
//         expect(encode).toBeDefined()
//     });

//     test('função encode é uma função', () => {
//         expect(typeof encode).toEqual('function')
//     });

//     test('testa se a é convertido em 1', () => {
//         expect(encode('a')).toEqual('1')
//     });

//     test('testa se e é convertido em 2', () => {
//         expect(encode('e')).toEqual('2')
//     });

//     test('testa se i é convertido em 1', () => {
//         expect(encode('i')).toEqual('3')
//     });

//     test('testa se o é convertido em 4', () => {
//         expect(encode('o')).toEqual('4')
//     });

//     test('testa se u é convertido em 5', () => {
//         expect(encode('u')).toEqual('5')
//     });
// });


// const techList = require('./script.js');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });


const hydrate = require('./script.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

