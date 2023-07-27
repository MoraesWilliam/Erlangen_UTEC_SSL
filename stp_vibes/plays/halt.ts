import * as World from "base/world";

export class Halt {
	private dummyAttribute: number;

	constructor() {
		this.dummyAttribute = 0;
	}

	run() {
		for (let robot of World.FriendlyRobots) {
			if (World.RefereeState == 'Halt'){

				robot.halt(); 
			}
			
			
		}
	}
}