(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) { }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`
    }
  }

  class Xmen extends Avenger {

    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`
    }


    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe ser mayor a 3 caracteres');
      }
      this.name = name;
    }


    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }

  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);

  /*   wolverine.fullName = 'Camilo';
    console.log(wolverine.fullName); */

})()