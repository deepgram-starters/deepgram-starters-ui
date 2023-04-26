import { html, LitElement } from "//cdn.skypack.dev/lit";

class AppBody extends LitElement {
  render() {
    return html`<article class="body">article</article>`;
  }
}

customElements.define("app-body", AppBody);
