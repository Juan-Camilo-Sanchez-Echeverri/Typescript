(() => {
  type Hero = {
    name: string,
    age: number,
    powers: string[],
    getNombre?: () => string
  }

  let miCustomVariable: string | number | Hero = 'Camilo';
  console.log(miCustomVariable);

  miCustomVariable = 10;
  console.log(miCustomVariable);

  miCustomVariable = {
    name: 'Camilo',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }
  console.log(miCustomVariable);

})()