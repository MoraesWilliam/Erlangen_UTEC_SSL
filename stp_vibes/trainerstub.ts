import * as World from "base/world";

import { Play } from "stp_vibes/plays/playstub"
import { Demo } from "stp_vibes/plays/demo";
import { Halt } from  "stp_vibes/plays/halt";

let currentPlay : Play | undefined = undefined;
let currentElse = new Halt();

function redecide_play(): boolean {
	// Decide if you want to change your current play
	return true
}

export function main() {
	if (currentPlay === undefined) {
		currentPlay = new Demo()
		
	}
	if (redecide_play()) {
		switch (World.RefereeState) {
			// Decide on play based on referee and world state
		}
	}

	currentPlay.run();
	currentElse.run();
}
