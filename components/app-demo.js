import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppDemo extends LitElement {
  static properties = {
    models: {},
    files: {},
    availableFeatures: {},
    featureMap: {},
    error: {},
    utterances: {},
    summaries: {},
    topics: {},
    language: {},
    transcript: {},
    done: {},
    working: {},
    selectedModel: {},
    features: {},
    file: {},
    fileUrl: {},
    apiOrigin: {},
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
  }

  render() {
    return html`
      <div
        @fileselect=${this._fileSelectListener}
        @modelselect=${this._modelSelectListener}
        @exampleselect=${this._exampleSelectListener}
        class="app-demo"
      >
        <h2 class="demo-instructions ">Choose an audio file</h2>
        <slot></slot>
      </div>
      <p>Model: ${this.selectedModel}</p>
      <p>File: ${this.file.name}</p>
      <p>Example: ${this.fileUrl}</p>
    `;
  }

  _modelSelectListener(e) {
    this.selectedModel = e.detail.selectedModel;
  }

  _fileSelectListener(e) {
    this.file = e.detail.selectedFile;
  }
  _exampleSelectListener(e) {
    this.fileUrl = e.detail.selectedExample;
  }
}

customElements.define("app-demo", AppDemo);
