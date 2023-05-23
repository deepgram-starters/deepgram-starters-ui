import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppDemo extends LitElement {
  static properties = {
    // models: {},
    // files: {},
    // availableFeatures: {},
    // featureMap: {},
    // error: {},
    // utterances: {},
    // summaries: {},
    // topics: {},
    // language: {},
    // transcript: {},
    // done: {},
    // working: {},
    selectedModel: {},
    // features: {},
    file: {},
    fileUrl: {},
    // apiOrigin: {},
    selectedFeatures: [],
  };

  static styles = css`
    .app-demo {
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
  `;

  constructor() {
    super();
    this.selectedModel = "";
    this.file = {};
    this.fileUrl = "";
    this.selectedFeatures = [];
  }

  submitRequest() {
    const apiKey = "YOUR_API_KEY";
    const apiOrigin = "http://localhost:8000/api";
    const formData = new FormData();
    //  formData.append("features", JSON.stringify(features));
    //  formData.append("file", file);
    //  formData.append("url", url);
    //  formData.append("model", selectedModel.model);
    console.log("submit request");
    console.log(this.selectedModel);
    console.log(this.file);
    console.log(this.fileUrl);
    console.log(this.selectedFeatures);
  }

  render() {
    return html`
      <div
        @fileselect=${this._fileSelectListener}
        @modelselect=${this._modelSelectListener}
        @exampleselect=${this._exampleSelectListener}
        @featureselect=${this._featureSelectListener}
        class="app-demo"
      >
        <slot></slot>
      </div>
      <button @click="${this.submitRequest}">Transcribe</button>
      <p>Model: ${this.selectedModel}</p>
      <p>File: ${this.file.name}</p>
      <p>Example: ${this.fileUrl}</p>
      <p>Selected Features: ${this.selectedFeatures}</p>
    `;
  }

  _modelSelectListener(e) {
    this.selectedModel = e.detail;
  }

  _fileSelectListener(e) {
    this.file = e.detail;
    this.requestUpdate();
  }
  _exampleSelectListener(e) {
    this.fileUrl = e.detail;
    this.requestUpdate();
  }
  _featureSelectListener(e) {
    this.selectedFeatures = e.detail;
    this.requestUpdate();
  }
}

customElements.define("app-demo", AppDemo);
