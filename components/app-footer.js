import { html, LitElement } from "//cdn.skypack.dev/lit";

class AppFooter extends LitElement {
  render() {
    return html` <footer>footer</footer> `;
  }
}

customElements.define("app-footer", AppFooter);
