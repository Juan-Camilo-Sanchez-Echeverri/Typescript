(() => {

  const funName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'no lastname'}`;
  }

  const name = funName('Juan',)

  console.log(name);

})();
