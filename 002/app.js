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