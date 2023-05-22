import { css, html, LitElement } from "//cdn.skypack.dev/lit";
import "./app-button-link.js";
class AppHeader extends LitElement {
  static properties = {
    url: {},
  };
  static styles = css`
    h1 {
      font-size: inherit;
      font-weight: inherit;
      margin: 0;
    }

    nav {
      background: rgba(10, 18, 27, 1);
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
      align-items: center;

      /* content-stretch */
      align-content: stretch;

      padding-left: 2rem;
      padding-right: 2rem;
    }

    .nav-logo {
      display: inline;
      height: 2rem;
      margin-bottom: -5px;
      margin-right: 1rem;
    }

    .nav-heading {
      display: inline;
    }

    .nav-brand {
      color: white;
      align-items: center;
      display: flex;
      height: 4rem;
    }

    .nav-links {
    }
  `;

  constructor() {
    super();
    this.url = "https://console.deepgram.com/signup?jump=keys";
  }

  render() {
    return html`<nav>
      <div class="nav-margin">
        <div class="nav-brand">
          <img src="assets/dg.svg" class="nav-logo" />
          <div>Starter Apps</div>
        </div>

        <app-button-link url="${this.url}" class="secondary">
          <span style="margin-right:10px;">Free API Key</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            height="18"
            width="18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </app-button-link>
      </div>
    </nav>`;
  }
}

customElements.define("app-header", AppHeader);
