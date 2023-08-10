(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge(): string {
      return Avenger.avgAge + ' years';
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) { }

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  /*   const atnman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(atnman);
  
    console.log(Avenger.getAvgAge()); */

})();
