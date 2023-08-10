(() => {

  const funName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  }


  const name = funName('Juan', 'Sanchez')

  console.log(name);

})();
