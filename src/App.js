import { configure } from "@testing-library/react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
function App() {
  return (
    <div className="">
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
  minimumDistanceBetweenStars: 10,
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

  star.style.opacity = 1;
  star.style.position = "absolute";
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

document.addEventListener("mousemove", (e) => {
  createStar(e);
  console.log(e);
});

export default App;
