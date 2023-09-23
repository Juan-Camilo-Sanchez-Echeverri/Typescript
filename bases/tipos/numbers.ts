(() => {

  let avengers: number = 10;
  const villains: number = 20;

  if (avengers < villains) {
    console.log('Estamos en problemas');
  } else {
    console.log('Nos salvamos');
  }
  
  avengers=123;
  console.log({avengers});

})()