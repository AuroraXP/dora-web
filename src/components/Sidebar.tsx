// src/components/Sidebar.tsx
import { createSignal } from "solid-js";
import FloatyMessage from "./FloatyMessage";




const DESKTOP_QUERY = "(min-width: 768px)";

export default function Sidebar() {

  const [open, setOpen] = createSignal<boolean>(true);

  const isOpen = () =>
    open() ?? (typeof window !== "undefined" && matchMedia(DESKTOP_QUERY).matches);

  const positionClass = () => {
    if (open() === null) return "-translate-x-full md:translate-x-0";
    return open() ? "translate-x-0" : "-translate-x-full";
  };

  return (
    <aside
    id="sidebar"
    class={`fixed top-0 left-0 z-40 h-full w-64 bg-[#f1eae3] dark:bg-black dark:text-white border-r border-gray-400 p-6  transition-transform duration-300 ${positionClass()}`}
    >
    <header class="mb-6">
      <h1 class="font-serif text-[30px]">Teodora Piel</h1>
      <h2 class="font-sans text-[13px] text-transform uppercase text-gray-500">Software Developer & Chemist</h2>
    </header>

    <FloatyMessage
      alt="Mini Me"
      messages={[
        "Hello, I'm Mini-Dora!",
        "Miniature version of a software developer and chemist!",
        "You can look at my projects below!",
        "Yes, I'm still here!",
        "Feel free to explore!",
        "Don't you think that's enough poking around?",
        "I think you should stop now.",
        "Seriously, stop it.",
        "I said STOP IT!",
        "Alright, I'll give you one more chance.",
        "...",
        "...",

      ]}
    />   



    <nav class="flex flex-col gap-4 pt-5 border-t border-gray-400">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/explore-reasoning">Reasoning</a>
    </nav>
    </aside>
  );
}