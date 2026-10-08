// src/components/Sidebar.tsx
import { createSignal } from "solid-js";

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
    class={`fixed top-0 left-0 z-40 h-full w-64 bg-[#efe5d9] dark:bg-black text-black dark:text-white border-r p-6 pt-16 transition-transform duration-300 ${positionClass()}`}
    >
    <header class="mb-6">
      <h1 class="font-cursive text-[23px]">Teodora Piel</h1>
      <h2 class="text-gray-500">Software Developer & Computational Chemist</h2>

    </header>
    <nav class="flex flex-col gap-4">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/explore-reasoning">Reasoning</a>
    </nav>
    </aside>
  );
}