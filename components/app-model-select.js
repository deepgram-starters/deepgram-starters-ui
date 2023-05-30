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
        model: "general",
        name: "Deepgram Nova",
        tier: "nova",
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

  firstUpdated() {
    this.renderRoot.querySelector("select").selectedIndex = 0;
    this._dispatchSelectModel();
  }

  render() {
    return html`<div class="app-model-select">
      <label>Select a transcription model:</label
      ><select @change=${this._dispatchSelectModel}>
        ${this.models.map(
          (model) => html`<option data-model="${model}">${model.name}</option>`
        )}
      </select>
    </div>`;
  }

  _dispatchSelectModel() {
    this.selectedModel = this._select.value;

    const model = this.models.filter((model) => {
      return model.name === this.selectedModel;
    });

    if (this.selectedModel) {
      const options = {
        detail: model,
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("modelselect", options));
    }
  }
}

customElements.define("app-model-select", AppModelSelect);
