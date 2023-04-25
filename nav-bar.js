import { html, render } from "//unpkg.com/lit-html@2.7.2";

const name = "world";
const sayHi = html`<h1 class="text-4xl">Hello ${name}</h1>`;
render(sayHi, document.body);
