(() => {


  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAdress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Camilo',
    age: 19,
    address: {
      zip: 'K2S U23',
      id: 1,
      city: 'Toronto'
    },
    getFullAdress(id: string): string {
      return this.address.city;
    },
  }

  const client2: Client = {
    name: 'Melissa',
    address: {
      id: 2,
      zip: 'KY2 SUD',
      city: 'London'
    },
    getFullAdress(id: string): string {
      return this.address.city;
    }
  }


})()