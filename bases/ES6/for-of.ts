(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };

  const ironman: Avengers = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  };

  const thor: Avengers = {
    name: 'Thor',
    weapon: 'Mjolnir'
  };

  const captainAmerica: Avengers = {
    name: 'Captain America',
    weapon: 'Shield'
  };

  const avengers: Avengers[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);

  }
  

})();
