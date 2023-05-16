import { html, css, LitElement } from "//cdn.skypack.dev/lit";
import "./app-hero.js";
import "./app-demo.js";
import "./app-audio-select.js";
import "./app-model-select.js";

class AppBody extends LitElement {
  static properties = {
    // hero properties
    title: {},
    logo: {},
    // button in hero property
    url: {},
    // demo properties
    models: {},
    files: {},
    availableFeatures: {},
    featureMap: {},
    error: {},
    utterances: {},
    summaries: {},
    topics: {},
    language: {},
    transcript: {},
    done: {},
    working: {},
    selectedModel: {},
    features: {},
    file: {},
    fileUrl: {},
    apiOrigin: {},
  };

  static styles = css`
    .body {
      flex-grow: 1;
    }
  `;

  render() {
    return html`<article class="body">
      <app-hero
        title="Node.js Starter App"
        logo="assets/dg-black.svg"
        url="https://github.com/deepgram-starters/deepgram-javascript-starters/tree/main/Starter-01"
        >This is a starter application that demonstrates integrating
        <a href="https://deepgram.com/">Deepgram</a>. This version has a
        <a>Node Express server</a>, with a Lit Web Components client.</app-hero
      >
      <app-demo>
        <app-audio-select></app-audio-select>
        <app-model-select></app-model-select>
      </app-demo>
    </article>`;
  }
}

customElements.define("app-body", AppBody);
