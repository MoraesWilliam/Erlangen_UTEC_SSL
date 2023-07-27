import "base/base";
import "base/entrypoints";
import * as debug from "base/debug";
import * as vis from "base/vis";
import * as plot from "base/plot";
import { MoveTo } from "stp_vibes/skills/moveto";
import { Vector } from "base/vector";
import * as trainer from "stp_vibes/trainerstub";

import * as World from "base/world";
import * as EntryPoints from "base/entrypoints";
import { angleBound } from "base/geom";

function main(): boolean {
	trainer.main();
	amun.log(World.RefereeState)

	return true;
}

EntryPoints.add("Demo", main);

function wrapper(func: () => boolean): () => void {
	function f() {
		World.update();

		func();

		// Call this function to pass robot commands set during the strategy run back to amun
		World.setRobotCommands();
		// Clear the debug tree. Otherwise old output would pile up
		debug.resetStack();
		plot._plotAggregated();
	}
	return f;
}

export let scriptInfo = { name: "Demo Strategy", entrypoints: EntryPoints.get(wrapper) }
