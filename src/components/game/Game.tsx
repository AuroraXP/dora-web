import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { createEngine, type GameEngine } from "../../game/engine";
import { MainMenu, PauseMenu } from "./Menus";

type Screen = "menu" | "playing" | "paused";

export default function Game() {
	const [screen, setScreen] = createSignal<Screen>("menu");
	let container!: HTMLDivElement;
	let engine: GameEngine | undefined;
	let destroyed = false;

	onMount(async () => {
		const e = await createEngine(container);
		if (destroyed) return e.destroy();
		engine = e;
	});
	onCleanup(() => {
		destroyed = true;
		engine?.destroy();
	});

	const start = () => {
		engine?.start();
		setScreen("playing");
	};
	const pause = () => {
		engine?.pause();
		setScreen("paused");
	};
	const resume = () => {
		engine?.resume();
		setScreen("playing");
	};
	const quit = () => {
		engine?.pause();
		setScreen("menu");
	};

	const onKey = (e: KeyboardEvent) => {
		if (e.key !== "Escape") return;
		if (screen() === "playing") pause();
		else if (screen() === "paused") resume();
	};
	window.addEventListener("keydown", onKey);
	onCleanup(() => window.removeEventListener("keydown", onKey));

	return (
		<div class="relative w-[90vw] h-[80vh]">
			<div ref={container} class="absolute inset-0" />
			<Show when={screen() === "menu"}>
				<MainMenu onStart={start} />
			</Show>
			<Show when={screen() === "paused"}>
				<PauseMenu onResume={resume} onQuit={quit} />
			</Show>
		</div>
	);
}
