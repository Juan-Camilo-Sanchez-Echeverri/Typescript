(() => {
	class Avenger {
		name;
		power;

		constructor(name, power) {
			this.name = name;
			this.power = power;
		}
	}

	class FlyingAvenger extends Avenger {
		flying;

		constructor(name, power, flying) {
			super(name, power);
			this.flying = flying;
		}
	}

	const hulk = new Avenger('Hulk', 9001);
	const falcon = new FlyingAvenger('Falcon', 50, true);

	console.log(falcon);
	console.log(hulk);
})();
