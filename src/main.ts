import { Pixel } from "./models/Pixel";
import "./style.css";
const pixels: Pixel[] = [];

const colorize = () => {
  const red: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const green: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const blue: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const pixel: Pixel = new Pixel(red, green, blue);
  pixels.push(pixel);
};

const generateHTML = (): string => {
  let str = "";
  for (const pixel of pixels) {
    str += `<div class="pixel" style="background-color: rgb(${pixel.red}, ${pixel.green}, ${pixel.blue})"></div>`;
  }
  return str;
};

colorize();
colorize();
colorize();
colorize();
colorize();
colorize();
colorize();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = generateHTML();
