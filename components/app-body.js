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
      <app-demo>
        <app-model-select></app-model-select>
        <app-audio-select></app-audio-select>
      </app-demo>
    </article>`;
  }
}

customElements.define("app-body", AppBody);
