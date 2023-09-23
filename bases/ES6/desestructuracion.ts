(() => {
  type Avengers = {
    nick: string,
    ironman: string,
    vision: string,
    activo: boolean,
    poder: number
  }
  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  /*   const { ironman } = avengers;
  
    console.log(ironman); */

  const printAvenger = ({ vision }: Avengers) => {
    console.log(vision);

  }

  /* printAvenger(avengers); */

  const avengersArr: string[] = ['Capitán América', 'Ironman', 'Thor'];

  const [, , thor] = avengersArr;


})()