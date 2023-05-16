import { html, css, LitElement } from "//cdn.skypack.dev/lit";
import "./app-button-link.js";

class AppHero extends LitElement {
  static properties = {
    title: {},
    logo: {},
    url: {},
    size: {},
  };
  static styles = css`
    .hero-margin {
      /* mx-auto */
      margin-left: auto;
      margin-right: auto;

      /* max-w-7xl */
      max-width: 80rem;

      /* py-24 */

      /* sm:px-6 */

      /* sm:py-32 */
      padding-top: 8rem;
      padding-bottom: 8rem;

      /* lg:px-8 */
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .hero-logo {
      /* mt-10 */
      margin-top: 2.5rem;
      /* mb-5 */
      margin-bottom: 1.25rem;
      /* flex */
      display: flex;
      /* justify-center */
      justify-content: center;
    }

    .hero-logo-image {
      /* h-16 */
      height: 4rem;
      /* mb-3 */
      margin-bottom: 0.75rem;
    }

    .hero-title {
      /* relative */
      /* isolate */
      /* overflow-hidden */
      /* bg-gray-900 */
      /* px-6 */
      /* py-24 */
      /* text-center */
      text-align: center;
      /* shadow-2xl */
      /* sm:rounded-3xl */
      /* sm:px-16 */
    }

    h2 {
      /* mx-auto */
      margin-left: auto;
      margin-right: auto;
      /* max-w-2xl */
      /* text-3xl */
      font-size: 1.875rem;
      line-height: 2.25rem;
      /* font-bold */
      /* tracking-tight */
      /* text-white */
      /* sm:text-4xl */
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    .hero-paragraph {
      /* mx-auto */
      margin-left: auto;
      margin-right: auto;
      /* mt-6 */
      /* max-w-xl */
      max-width: 36rem;
      /* text-lg */
      font-size: 1.125rem;
      line-height: 1.75rem;
      /* leading-8 */
      /* text-gray-900 */
      color: rgb(75 85 99 / 0.9);
    }

    .hero-button-container {
      /* mt-10 */
      margin-top: 2.5rem;
      /* flex */
      display: flex;
      /* items-center */
      align-items: center;
      /* justify-center */
      justify-content: center;
    }
  `;
  render() {
    return html`<div class="hero">
      <div class="hero-margin">
        <div class="hero-logo">
          <img src="${this.logo}" class="hero-logo-image" />
        </div>
        <div class="hero-title">
          <h2 class="">${this.title}</h2>
          <p class="hero-paragraph"><slot /></p>
          <div class="hero-button-container">
            <app-button-link url="${this.url}" class="">
              <svg
                role="img"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <span style="margin-left:10px;">View the code on Github</span>
            </app-button-link>
          </div>
        </div>
      </div>
    </div> `;
  }
}

customElements.define("app-hero", AppHero);
