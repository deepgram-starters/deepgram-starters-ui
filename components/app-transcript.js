import { html, LitElement } from "//cdn.skypack.dev/lit";

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
  render() {
    return html` <section><slot /></section> `;
  }
}

customElements.define("app-transcript", AppTranscript);
