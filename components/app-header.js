import { html, LitElement } from "//cdn.skypack.dev/lit";

class AppHeader extends LitElement {
  render() {
    return html`<header>header</header>`;
  }
}

customElements.define("app-header", AppHeader);
