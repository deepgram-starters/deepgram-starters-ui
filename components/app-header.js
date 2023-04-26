import { css, html, LitElement } from "//cdn.skypack.dev/lit";

class AppHeader extends LitElement {
  static styles = css`
    h1 {
      font-size: inherit;
      font-weight: inherit;
      margin: 0;
    }

    nav {
      background: rgba(3.92%, 7.06%, 10.59%, 1);
      color: white;
    }

    .nav-margin {
      /* max-w-screen-2xl */
      max-width: 1536px;

      /* mx-auto */
      margin-left: auto;
      margin-right: auto;

      /* flex */
      display: flex;

      /* flex-row */
      flex-direction: row;

      /* flex-nowrap */
      flex-wrap: nowrap;

      /* justify-between */
      justify-content: space-between;

      /* items-stretch */
      align-items: stretch;

      /* content-stretch */
      align-content: stretch;
    }

    .nav-logo {
      display: inline;
      height: 20px;
      margin-bottom: -5px;
    }

    .nav-heading {
      display: inline;
    }

    .nav-links {
    }
  `;

  render() {
    return html`<nav>
      <div class="nav-margin">
        <div class="nav-brand">
          <img src="assets/dg.svg" class="nav-logo" />
          <h1 class="nav-heading">Node.js Starter App</h1>
        </div>

        <ul class="nav-links">
          <li>GitHub</li>
          <li>Docs</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </nav>`;
  }
}

customElements.define("app-header", AppHeader);
