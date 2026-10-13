// src/components/FloatyMessage.tsx
import { createSignal } from "solid-js";

import AngryMiniLight from "../assets/mini-annoyed-dark.png";
import AngryMiniDark from "../assets/mini-annoyed-light.png";

import MiniLight from "../assets/mini-me-dark.png";
import MiniDark from "../assets/mini-me-light.png";


interface Props {
  alt: string;
  messages: string[];
}

export default function FloatyMessage(props: Props) {
  const [currentMessageIndex, setCurrentMessageIndex] = createSignal(0);
  
  const [jumping, setJumping] = createSignal(false);

  const nextMessage = () => {
    setJumping(true);
    setCurrentMessageIndex((i) =>  Math.min(i + 1, props.messages.length - 1));
  };


  const isHello = () => currentMessageIndex() === 0;
  const isAngry = () => currentMessageIndex() > props.messages.length - 6;

  const imgClass = "absolute inset-0 h-full w-full object-contain pointer-events-none select-none";



  return (
    <div class="flex flex-col items-start gap-4 pb-8 ">
      {/* fixed-size bubble: only the text inside changes */}
      <p
        class="flex h-20 w-fit self-center items-center rounded-r-2xl rounded-tl-2xl border border-gray-400 px-4 text-[13px] bg-[#f7f3ea]"
        aria-live="polite"
      >
        {props.messages[currentMessageIndex()]}
      </p>

      {/* fixed-size box: all four images stacked inside it */}
      <div class="motion-safe:animate-floaty relative h-36 w-36 -inset-x-4">
        <div class="absolute inset-0" 
        classList={{ "motion-safe:animate-jump": jumping() && !isAngry(),
            "motion-safe:active:animate-vibrate": isAngry(),
        }}
        onAnimationEnd={() => setJumping(false)}>
                    

        <button
          type="button"
          onClick={nextMessage}
          aria-label="Say hello!"
          title={isHello() ? "Say hello!" : isAngry() ? "Don't you dare!" : undefined}
          class="absolute inset-[20%] z-10 cursor-pointer rounded-full"
        />
        


        <img src={MiniLight.src} alt={props.alt} class={imgClass}
          classList={{ hidden: isAngry(), "dark:hidden": true }} />
        <img src={MiniDark.src} alt="" class={imgClass}
          classList={{ hidden: true, "dark:block": !isAngry() }} />
        <img src={AngryMiniLight.src} alt="" class={imgClass}
          classList={{ hidden: !isAngry(), "dark:hidden": true }} />
        <img src={AngryMiniDark.src} alt="" class={imgClass}
          classList={{ hidden: true, "dark:block": isAngry() }} />
      </div>
    </div>


    </div>
  );
}