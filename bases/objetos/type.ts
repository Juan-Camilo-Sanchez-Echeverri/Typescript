(() => {

  type Hero = {
    name: string,
    age: number,
    powers: string[],
    getNombre?: () => string
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superMan: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super fuerza'],
    getNombre(): string {
      return this.name
    },
  }



})()
