import { createSignal, createEffect } from "solid-js";

export function ThemeSwitch() {
  const [theme, setTheme] = createSignal("light");
  const switchy = () => setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");

    createEffect(() => {
        document.documentElement.classList.replace(theme() === "dark" ? "light" : "dark", theme());
        console.log(theme())
    })

  return (
    <button class="flex gap-4 group border rounded-3xl p-2 m-4 mx-auto" data-theme={theme()} type="button" onClick={switchy}>
      <span class="relative dark:before:border-none dark:text-black rounded-3xl before:absolute before:-inset-1.5 before:rounded-3xl before:-z-10 before:border before:bg-black text-white">light</span>
      <span class="relative dark:before:absolute dark:before:-inset-1.5 dark:before:rounded-3xl dark:before:-z-10 dark:before:border dark:before:bg-black dark:text-white ">dark</span>
    </button>
  );
}