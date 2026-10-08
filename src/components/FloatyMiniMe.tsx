// src/components/FloatyMessage.tsx
import { createSignal } from "solid-js";
import MiniLight from '../assets/mini-me-dark.png';
import MiniDark from '../assets/mini-me-light.png';
import AngryMiniLight from '../assets/mini-annoyed-dark.png';
import AngryMiniDark from '../assets/mini-annoyed-light.png';

interface Props {
  image: string;
  alt: string;
  messages: string[];
}


