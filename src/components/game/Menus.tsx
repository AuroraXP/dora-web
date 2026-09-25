import type { JSX } from "solid-js";

const btn =
	"px-[3vw] py-[1vw] border border-[#cccccc] text-white text-[23px] hover:scale-110 hover:text-[#efd0b4]";

function Overlay(props: { title: string; children: JSX.Element }) {
	return (
		<div class="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/70 text-white">
			<h1 class="text-4xl">{props.title}</h1>
			{props.children}
		</div>
	);
}

export function MainMenu(props: { onStart: () => void }) {
	return (
		<Overlay title="The Application Game">
			<button type="button" class={btn} onClick={props.onStart}>
				Start
			</button>
		</Overlay>
	);
}

export function PauseMenu(props: { onResume: () => void; onQuit: () => void }) {
	return (
		<Overlay title="Paused">
			<button type="button" class={btn} onClick={props.onResume}>
				Resume
			</button>
			<button type="button" class={btn} onClick={props.onQuit}>
				Quit
			</button>
		</Overlay>
	);
}
