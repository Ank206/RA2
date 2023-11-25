import { configure } from "@testing-library/react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import { LazyResult } from "postcss";
import { data } from "autoprefixer";

import style from "./main.module.css";

function App() {
  return (
    <div id="save">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

let start = new Date().getTime();

const origin = { x: 0, y: 0 };

const last = {
  startingTime: start,
  startingPosition: origin,
  mousePosition: origin,
};

const base = {
  starAnimationDuration: 1500,
  minimumDistanceBetweenStars: 20,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall"],
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const selectRandom = (items) => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
  px = (value) => withUnit(value, "px"),
  ms = (value) => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const timeElapsed = (start, end) => end - start;

const appendElement = (element) =>
    document.getElementById("root").appendChild(element),
  removeElement = (element, delay) =>
    setTimeout(
      () => document.getElementById("root").removeChild(element),
      delay
    );

const createStar = (position) => {
  const star = document.createElement("span");
  const color = selectRandom(base.colors);

  star.className = "bi bi-star-fill";

  star.style.opacity = 0;
  star.style.position = "fixed";
  // star.style.zIndex = 1000;
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(base.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = base.animations;
  star.style.animationDuration = ms(base.starAnimationDuration);

  appendElement(star);

  removeElement(star, 1500);
};

const UpdateLastStar = (position) => {
  last.startingTime = new Date().getTime();

  last.startingPosition = position;
};

const UpdateLastMousePosition = (position) => (last.mousePosition = position);

const adjustLastMousePosition = (position) => {
  if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

document.addEventListener("mousemove", (e) => {
  // createStar(e);
  // console.log(e);

  const mousePosition = { x: e.clientX, y: e.clientY };

  adjustLastMousePosition(mousePosition);

  const now = new Date().getTime(),
    hasMovedFarEnough =
      calcDistance(last.startingPosition, mousePosition) >=
      base.minimumDistanceBetweenStars;

  console.log(hasMovedFarEnough);

  if (hasMovedFarEnough) {
    createStar(mousePosition);

    UpdateLastStar(mousePosition);
  }

  UpdateLastMousePosition(mousePosition);
});

export default App;
