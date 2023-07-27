import { Vector } from "base/vector";
import * as World from "base/world";

import { MoveTo } from "stp_vibes/skills/moveto";

export class Demo {
	private dummyAttribute: number;

	constructor() {
		this.dummyAttribute = 0;
	}

	run() {
		let moveto = new MoveTo(World.FriendlyRobots[0]);
		let moveto1 = new MoveTo(World.FriendlyRobots[1]);
		let moveto2 = new MoveTo(World.FriendlyRobots[2]);
		let moveto3 = new MoveTo(World.FriendlyRobots[3]);
		let moveto4 = new MoveTo(World.FriendlyRobots[4]);
		let moveto5 = new MoveTo(World.FriendlyRobots[5]);

		moveto5.run(new Vector(World.Ball.pos.x, World.Ball.pos.y), 0);
		moveto4.run(new Vector(2.54, -3.05), 0);
		moveto3.run(new Vector(2.04, -4), 0);
		moveto2.run(new Vector(0, -4), 0);
		moveto1.run(new Vector(-2.04, -4), 0);
		moveto.run(new Vector(-2.54, -3.05), 0);

		for (let robot of World.FriendlyRobots) {
			
			// TODO HERE: Make calls to tactics or skills
		}
	}
}