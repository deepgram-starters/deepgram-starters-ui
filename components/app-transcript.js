import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppTranscript extends LitElement {
  // static properties = {
  //   resSummaries: {},
  //   resTopics: {},
  //   resLanguage: {},
  //   resTranscript: {},
  //   resParagraphs: {},
  // };
  // constructor() {
  //   super();
  //   this.summaries = [];
  //   this.topics = [];
  //   this.language = [];
  //   this.transcript = [];
  // }

  static styles = css`
    ::slotted(div) {
      background: #2e3c4d;
      padding: 1.25rem;
      border-radius: 0.0625rem;
      border-left: none;
      height: fit-content;
      width: fit-content;
      border: solid #3d4f66 1px;
    }

    section {
    }
  `;
  render() {
    return html` <section><slot /></section> `;
  }
}

customElements.define("app-transcript", AppTranscript);
