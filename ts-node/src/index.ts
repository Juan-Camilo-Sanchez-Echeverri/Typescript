import { Pokemon } from "./decorators/Pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonToDB(23);

charmander.publicApi = 'https://google.com';
console.log(charmander);