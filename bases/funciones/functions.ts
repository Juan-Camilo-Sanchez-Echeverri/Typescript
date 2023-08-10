(()=>{

  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return 'Batisignal activated!';
  }

  console.log(typeof activateBatisignal);
  console.log(typeof returnName);
  
  const heroName = returnName();

  console.log(heroName);
  
})()