import Reveal from "reveal.js";
import "reveal.js/reveal.css";

const deck = new Reveal({
  controls: false,
  progress: false,
  slideNumber: false,
  history: false,
  navigationMode: 'linear',
  hash: false,
  center: true,
  transition: 'slide',
});

deck.initialize();