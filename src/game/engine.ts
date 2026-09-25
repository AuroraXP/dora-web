import { Application } from "pixi.js";

export interface GameEngine {
	start(): void;
	pause(): void;
	resume(): void;
	destroy(): void;
}

// Game mechanics live here, with no Solid imports. The UI drives it through the returned handle.
export async function createEngine(
	container: HTMLElement,
): Promise<GameEngine> {
	const app = new Application();
	await app.init({
		resizeTo: container,
		background: "#fff4e6",
		antialias: true,
	});
	container.appendChild(app.canvas);

	// TODO: create entities, input handling and the ticker loop here.
	app.ticker.stop();

	return {
		start: () => app.ticker.start(),
		pause: () => app.ticker.stop(),
		resume: () => app.ticker.start(),
		destroy: () => app.destroy(true, { children: true }),
	};
}
