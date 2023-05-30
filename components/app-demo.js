import { html, css, LitElement } from "//cdn.skypack.dev/lit";
import "./app-transcript.js";

class AppDemo extends LitElement {
  static properties = {
    error: {},
    done: {},
    working: {},
    selectedModel: {},
    file: {},
    fileUrl: {},
    selectedFeatures: {},
    resSummaries: {},
    resTopics: {},
    resLanguage: {},
    resTranscript: {},
    resParagraphs: {},
  };

  static styles = css`
    .app-demo {
      display: flex;
      flex-direction: column;
      /* mx-auto */
      margin-left: auto;
      margin-right: auto;
      /* max-w-7xl */
      max-width: 80rem;
      /* p-6 */
      /* lg:p-8 */
      padding: 2rem;
    }
    .demo-instructions {
      /* text-2xl */
      /* sm:text-4xl */
      font-size: 1.5rem;
      line-height: 2rem;
      /* font-semibold */
      font-weight: 600;
      /* mb-4 */
      margin-bottom: 1rem;
    }

    .submit-button {
      margin-top: 3rem;
      padding-top: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;

  constructor() {
    super();
    this.selectedModel = "";
    this.file = {};
    this.fileUrl = "";
    this.selectedFeatures = {};
    this.error = "";
    this.done = true;
    this.working = false;
    this.resSummaries = [];
    this.resTopics = [];
    this.resLanguage = [];
    this.resTranscript = [];
    this.resParagraphs = [];
  }

  async submitRequest() {
    this.done = false;
    this.working = true;
    const apiOrigin = "http://localhost:3001";
    const formData = new FormData();
    formData.append("file", this.file);
    formData.append("url", this.fileUrl);
    formData.append("model", this.selectedModel.model);
    formData.append("tier", this.selectedModel.tier);
    formData.append("features", JSON.stringify(this.selectedFeatures));
    console.log("submit request");

    try {
      const response = await fetch(`${apiOrigin}/api`, {
        method: "POST",
        body: formData,
      });

      const { err, transcription } = await response.json();
      if (err) throw Error(err);
      const { results } = transcription;
      this.resTranscript = results.channels[0].alternatives[0].transcript;
      this.resSummaries = results.channels[0].alternatives[0].summaries[0];
      this.resTopics = results.channels[0].alternatives[0].topics[0].topics;
      this.resLanguage = results.channels[0].detected_language;
      this.resParagraphs = results.channels[0].alternatives[0].paragraphs;
      // console.log(this.resTranscript);
      // console.log(this.resSummaries);
      // console.log(this.resTopics);
      // console.log(this.resLanguage);
      // console.log(this.resParagraphs);
      this.requestUpdate();
      this.done = true;
      this.working = false;
    } catch (error) {
      this.error = error;
      this.working = false;
    }
  }

  render() {
    return html`
      <div
        @fileselect=${this._fileSelectListener}
        @modelselect=${this._modelSelectListener}
        @fileURLselect=${this._fileURLSelectListener}
        @featureselect=${this._featureSelectListener}
        class="app-demo"
      >
        <slot></slot>
      </div>
      <div class="submit-button">
        <button @click="${this.submitRequest}">Transcribe</button>
        <p>${this.error}</p>
      </div>
      <p>Model: ${this.selectedModel.name}</p>
      <p>File: ${this.file.name}</p>
      <p>Example: ${this.fileUrl}</p>
      <p>Selected Features: ${this.selectedFeatures}</p>
      <div>
        <app-transcript>
          ${this.resSummaries} ${this.resTopics} ${this.resLanguage}
          ${this.resTranscript}${this.resParagraphs}
        </app-transcript>
      </div>
    `;
  }

  _modelSelectListener(e) {
    this.selectedModel = e.detail[0];
  }

  _fileSelectListener(e) {
    this.file = e.detail;
    this.fileUrl = "";
    this.requestUpdate();
  }
  _fileURLSelectListener(e) {
    this.fileUrl = e.detail;
    this.file = {};
    this.requestUpdate();
  }
  _featureSelectListener(e) {
    this.selectedFeatures = e.detail;
    this.requestUpdate();
  }
}

customElements.define("app-demo", AppDemo);
