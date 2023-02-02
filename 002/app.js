console.log('hello');

window.addEventListener("load", (event) => {
    const r = document.querySelector('h1');
    console.log(r);
  });
  
  // && ||

  const A = 5;
  const B = 7;


  console.log('A && B', A && B);
  console.log('A || B', A || B);

  /*
  T && T => T
  T && F => F
  
  shortcut
  F && T => F
  F && F => F
  */
  
  /*
  F || T => T
  F || F => F
  
  shortcut
  T || T => T
  T || F => T
  */


  const D = 0;

  const SD = '' + D;

  console.log(typeof D, '>>', typeof SD);


  const S = '88';
  const DS = +D;
  console.log(typeof S, '>>', typeof DS);

  const L1 = !!D;
  const L2 = !!S;
  console.log(L1, L2);

  console.log('-----------');
  //funkcijos deklaravimas
  const sayHello = function() {
    console.log('labas');
    return 'va kaip viskas buvo'
  };


  const fun = function() {
    console.log('ONE');
    return function() {
        console.log('TWO');
        return function() {
            console.log('THREE');
        }
    }
  }

  const tooFun = () => () => () => 'THREEE'
  console.log(tooFun()());
  //funkcijos kvietimas
  sayHello();

  console.log(sayHello());

  const vaRun = sayHello();
  const vaNotRun = sayHello;

  console.log(vaRun, vaNotRun());

  const makeFun = fun()();

  makeFun();

  // visos funkcijos daro tapati
  const Hi1 = function() {
  return 'va kaip viskas bv';
  }

  const Hi2 = () => {
    return 'va kaip viskas buvo aroow';
  }

  const Hi3 = () => 'va kajp viskas buwo';

  const Hi4 = _ => 'vak aip wiskas buvo';
  //parametrai
  const funFun = (a, b) => {
    console.log(a * b);
  }

  const _15 = 15;
  //argumentai
  funFun(8, _15);

 console.log('------------');
  const animals = [
    'racoon',
    'beaver',
    'moose'
  ];

  const colors = [
    'pink',
    'crimson',
    'skyblue'
  ];

  const addStars = word => console.log('* ' + word + ' *');
  const addPluses = word => console.log('+ ' + word + ' +');

//iterator
  const iterator = (what, fun) => {
    for (let i = 0; i < what.length; i++) {
        fun(what[i]);
  }
  }

  iterator(animals, addStars);
  iterator(colors, addStars);

  animals.forEach(word => console.log('+ ' + word + ' +'));
  colors.forEach(addPluses);



  //paprasta funkcija
  for (let i = 0; i < animals.length; i++) {
        addStars(animals[i]);
  }

  for (let i = 0; i < colors.length; i++) {
    addStars(colors[i]);
}


console.log('------');
animals.push('bird');
animals.unshift('mouse', 'fox');
animals.unshift(...colors); //spreadas ... ideda i masyva
// animals.pop(); //paskutini nuima
// animals.shift(); //pirma nuima
console.table(animals);
console.log(animals[1]);