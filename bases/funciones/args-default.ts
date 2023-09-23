(() => {

  const funName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || 'no lastname'}`;
    }
  }

  const name = funName('Juan', 'Camilo', true)

  console.log(name);

})();
