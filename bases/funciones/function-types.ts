(() => {

  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = () => 'The world is saved!';

  let myFunction: () => string;

  // !!myFunction = 10;

  //!!console.log(myFunction);

  //* myFunction = addNumbers;

  //* console.log(myFunction(10, 20));

  //? myFunction = greet;

  //? console.log(myFunction('Camilo'));

  myFunction = saveTheWorld;
  console.log(myFunction());



})()