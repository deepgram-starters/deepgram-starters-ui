import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppModelSelect extends LitElement {
  static properties = {
    models: {},
    selectedModel: "",
  };
  static styles = css`
    .app-model-select {
      margin-top: 5rem;
      width: 80rem;
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-columns: 35% 20% 10%;
      column-gap: 1rem;
      padding-inline-start: 0px;
    }

    .select-container {
      display: flex;
      flex-direction: column;
      grid-column: 2;
    }

    select {
      // appearance: none;
      // font-size: 14px;
      // width: 100%;
      // margin-bottom: 5rem;
      // border-radius: 0.0625rem;
      // height: 51px;
      // background: #2e3c4d;
      // padding: 0 16px;
      // border: solid #3d4f66 1px;
      // color: white;
      // box-shadow: 0 20px 25px -5px black, 0 8px 10px -6px black;

      padding: 0 16px;
      width: 100%;
      font-size: 14px;
      box-shadow: 0 20px 25px -5px black, 0 8px 10px -6px black;
      color: white;
      height: 51px;
      margin-bottom: 5rem;
      border-radius: 0.0625rem;
      background: #2e3c4d;
      border: solid #3d4f66 1px;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.65em auto, 100%;
    }

    label {
      margin-bottom: 0.75rem;
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
      <div class="select-container">
        <label>Model:</label>
        <div class="styled-select">
          <select @change=${this._dispatchSelectModel}>
            ${this.models.map(
              (model) =>
                html`<option data-model="${model}">${model.name}</option>`
            )}
          </select>
        </div>
      </div>
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
