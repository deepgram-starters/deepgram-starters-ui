import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppAudioSelect extends LitElement {
  static properties = {
    files: {},
    error: {},
    working: {},
    file: {},
    selectedExample: {},
    selectedFile: {},
  };

  static styles = css`
    .app-audio-select {
      /* grid */
      display: grid;
      /* grid-cols-1 */
      /* gap-5 */
      gap: 1.25rem;
      /* sm:grid-cols-2 */
      /* lg:grid-cols-4 */
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-columns: 40% 10% 40%;
      /* gap-x-4 */
      column-gap: 1rem;
      /* mx-auto */
      margin-left: auto;
      margin-right: auto;
    }

    .audio-own {
      /* relative */
      position: relative;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    .audio-own-label {
      /* peer-disabled:opacity-50 */
      /* min-h-full */

      /* flex */
      display: flex;
      /* flex-col */
      flex-direction: column;
      /* p-5 */

      /* rounded-lg */
      border-radius: 0.5rem;
      /* bg-white */
      /* px-4 */
      padding-left: 1rem;
      padding-right: 1rem;
      /* py-5 */
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      /* shadow-lg */

      /* sm:p-6 */
      /* cursor-pointer */

      /* focus:outline-none */
      /* hover:bg-gray-50 */
      /* peer-checked:bg-iris */
      /* peer-checked:text-white */
    }

    .label-text {
      /* text-center */
      /* lg:text-left */
    }

    .audio-file {
      /* relative */
      position: relative;
    }

    .audio-file-label {
      /* peer-disabled:opacity-50 */
      /* min-h-full  */
      min-height: 100%;
      /* flex  */
      display: flex;
      /* flex-col  */
      flex-direction: column;
      /* p-5  */
      /* rounded-lg */
      border-radius: 0.5rem;
      /* bg-white */
      /* px-4 */
      padding-left: 1rem;
      padding-right: 1rem;
      /* py-5 */
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      /* shadow-lg */
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      /* sm:p-6 */
      /* cursor-pointer */
      cursor: pointer;
      /* focus:outline-none */
      /* hover:bg-gray-50 */
      /* peer-checked:bg-iris */
      /* peer-checked:text-white */
    }
  `;

  constructor() {
    super();
    this.working = false;
    this.selectedExample = "";
    this.selectedFile = {};
    this.file = {};
    this.files = [
      {
        key: "podcast",
        name: "Podcast: Deep Learning’s Effect on Science",
        checked: true,
        value:
          "https://res.cloudinary.com/deepgram/video/upload/v1663090404/dg-audio/AI_Show_afpqeh.m4a",
      },
      {
        key: "phone",
        name: "Phone call: First all female NASA Spacewalk",
        checked: false,
        value:
          "https://res.cloudinary.com/deepgram/video/upload/v1663090406/dg-audio/NASA-EXP61_EVA_n5zazi.m4a",
      },
      {
        key: "callcenter",
        name: "Call Center: Upgrade Service",
        checked: false,
        value:
          "https://res.cloudinary.com/deepgram/video/upload/v1663090406/dg-audio/Upgrading-phone-plan_pmfsfm.m4a",
      },
    ];
  }

  get _fileInput() {
    return (this.___fileInput ??=
      this.renderRoot?.querySelector("#file") ?? null);
  }

  get _fileURL() {
    return (this.___fileURL ??=
      this.renderRoot?.querySelector(".audio-example") ?? null);
  }

  handleChange(e) {
    this.selectedFile = {};
    this.selectedExample = e.target.value;
    this._dispatchSelectCdnAudio();
  }

  handleClick() {
    if (this._fileInput) {
      this._fileInput.value = null;
    }

    if (this._fileURL) {
      this._dispatchSelectCdnAudio();
    }
  }

  render() {
    return html`<ul class="app-audio-select">
      <li class="audio-own">
        <input
          class="sr-only peer"
          type="radio"
          name="audio"
          ?disabled="${this.working}"
        />
        <label class="audio-own-label" htmlFor="file">
          <p class="label-text">Use your own audio</p>
        </label>
        <input
          class="sr-only"
          id="file"
          type="file"
          name="file"
          accept="audio/*,video/*"
          ?disabled="${this.working}"
          @change="${this._dispatchSelectUploadFile}"
          @click="${this.handleClick}"
        />
        <input type="button" @click="${this.chooseFile}" value="Choose file" />
      </li>
      <li style="display:flex; flex-direction:column; justify-content:center;">
        OR
      </li>
      <div>
        ${this.files.map(
          (item) =>
            html`<li key="${item.key}" class="audio-file">
              <label class="audio-file-label" htmlFor="${item.key}">
                <input
                  class="sr-only peer audio-example"
                  type="radio"
                  name="audio"
                  value="${item.value}"
                  defaultChecked="${item.checked}"
                  id="${item.key}"
                  ?disabled="${this.working}"
                  @change="${this.handleChange}"
                  @click="${this.handleClick}"
                />
                <p class="label-text">${item.name}</p>
              </label>
            </li>`
        )}
      </div>
    </ul>`;
  }

  chooseFile() {
    this._fileInput.click();
  }

  _dispatchSelectUploadFile() {
    this.selectedFile = this._fileInput.files[0];
    if (this.selectedFile) {
      const options = {
        detail: this.selectedFile,
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("fileselect", options));
    }
  }
  _dispatchSelectCdnAudio() {
    if (this.selectedExample) {
      const options = {
        detail: this.selectedExample,
        bubbles: true,
        composed: true,
      };
      this.dispatchEvent(new CustomEvent("fileURLselect", options));
    }
  }
}

customElements.define("app-audio-select", AppAudioSelect);
