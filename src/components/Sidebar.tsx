// src/components/Sidebar.tsx
import { createSignal, For } from "solid-js";
import FloatyMessage from "./FloatyMessage";





const DESKTOP_QUERY = "(min-width: 768px)";


const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/explore-reasoning", label: "Reasoning" },
];

interface Props { currentPath: string }

export default function Sidebar(props:Props) {


  const [open, setOpen] = createSignal<boolean>(true);

  const isOpen = () =>
    open() ?? (typeof window !== "undefined" && matchMedia(DESKTOP_QUERY).matches);

  const positionClass = () => {
    if (open() === null) return "-translate-x-full md:translate-x-0";
    return open() ? "translate-x-0" : "-translate-x-full";
  };

    const clean = (p: string) => p.replace(/\/+$/, "") || "/";

    const isActive = (href: string) => {
      const path = clean(props.currentPath ?? "/");
      return href === "/" ? path === "/" : path.startsWith(href);
    };

  return (
    <aside
    id="sidebar"
    class={`fixed overflow-y-auto top-0 left-0 z-40 h-full w-64 bg-[#f1eae3] dark:bg-black dark:text-white border-r border-gray-400 p-6  transition-transform duration-300 ${positionClass()}`}
    >
    <header class="mb-6">
      <h1 class="font-serif text-[30px]">Teodora Piel</h1>
      <h2 class="font-sans text-[13px] uppercase text-gray-700">Software Developer & Chemist</h2>
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


<nav class="flex flex-col gap-1 pt-5 border-t border-gray-400">
        <For each={links}>
          {(link, i) => (
            <a
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              class="flex items-center gap-5 rounded-xl px-4 py-3 transition-colors"
              classList={{
                "bg-gray-900 text-white dark:bg-white dark:text-black": isActive(link.href),
                "hover:bg-black/5 dark:hover:bg-white/10": !isActive(link.href),
              }}
            >
              <span
                class="text-sm tabular-nums"
                classList={{
                  "text-gray-400 dark:text-gray-500": isActive(link.href),
                  "text-gray-500": !isActive(link.href),
                }}
              >
                {String(i() + 1).padStart(2, "0")}
              </span>

              <span class="text-base font-medium">{link.label}</span>

              <span
                class="ml-auto"
                classList={{
                  "text-gray-300 dark:text-gray-600": isActive(link.href),
                  "text-gray-500": !isActive(link.href),
                }}
                aria-hidden="true"
              >
                →
              </span>
            </a>
          )}
        </For>
      </nav>

        
      <div class="gap-4 pt-20 text-blue-900 flex flex-wrap">

        <a href="mailto:quackium@proton.me" class="text-sm">Email</a>
        <a href="TeodoraPielCV" class="text-sm">CV</a>
        <a href="https://www.linkedin.com/in/teodora-piel-199a18428"class="text-sm">LinkedIn</a>
        <a href="https://www.github.com/in/teodora-piel-199a18428"class="text-sm">GitHub</a>

      </div>





    </aside>





  );
}