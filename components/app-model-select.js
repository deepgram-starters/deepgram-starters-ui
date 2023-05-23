import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppModelSelect extends LitElement {
  static properties = {
    models: {},
    selectedModel: "",
  };
  static styles = css`
    .app-model-select {
      margin-top: 3rem;
      /* pt-5 */
      padding-top: 1.25rem;
      /* flex */
      display: flex;
      /* flex-col */

      /* md:flex-row */
      flex-direction: row;
      /* justify-end */
      justify-content: center;
      /* items-center */
      align-items: center;
      /* gap-y-3 */
      row-gap: 0.75rem;
      /* md:gap-x-3 */
      column-gap: 0.75rem;
    }
  `;

  constructor() {
    super();
    this.selectedModel = "";
    this.models = [
      {
        model: "nova",
        name: "Deepgram Nova",
        tier: "general",
      },
      {
        model: "whisper",
        version: "medium",
        name: "Whisper Cloud",
      },
    ];
  }

  get _select() {
    return (this.___select ??=
      this.renderRoot?.querySelector("select") ?? null);
  }

  render() {
    return html`<div class="app-model-select">
      <label>Select a transcription model:</label
      ><select @change=${this._dispatchSelectModel}>
        ${this.models.map((model) => html`<option>${model.name}</option>`)}
      </select>
    </div>`;
  }

  _dispatchSelectModel() {
    this.selectedModel = this._select.value;
    if (this.selectedModel) {
      const options = {
        detail: this.selectedModel,
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("modelselect", options));
    }
  }
}

customElements.define("app-model-select", AppModelSelect);
