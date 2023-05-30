import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppFeatureSelect extends LitElement {
  static properties = {
    features: [],
    displayedFeatures: [],
    selectedFeatures: [],
    currentCategory: {},
  };

  constructor() {
    super();
    this.displayedFeatures = [];
    this.selectedFeatures = {};
    this.categories = [
      "Formatting",
      "Replacement",
      "Identification",
      "Inference",
    ];
    this.currentCategory = "";
    this.features = [
      {
        category: "formatting",
        name: "Smart Format",
        description:
          "Smart Format improves readability by applying additional formatting. When enabled, the following features will be automatically applied: Punctuation, Numerals, Paragraphs, Dates, Times, and Alphanumerics.",
        key: "smart_format",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Punctuation",
        description:
          "Indicates whether to add punctuation and capitalization to the transcript.",
        key: "punctuate",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Paragraphs",
        description:
          "Indicates whether Deepgram will split audio into paragraphs to improve transcript readability. When paragraphs is set to true, punctuate will also be set to true.",
        key: "paragraphs",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Utterances",
        description:
          "Segments speech into meaningful semantic units. By default, when utterances is enabled, it starts a new utterance after 0.8 s of silence. You can customize the length of time used to determine where to split utterances by submitting the utt_split keyeter.",
        key: "utterances",
        dataType: "boolean",
      },
      {
        category: "replacement",
        name: "Numerals",
        description:
          "Indicates whether to convert numbers from written format (e.g. one) to numerical format (e.g. 1).",
        key: "numerals",
        dataType: "boolean",
      },
      {
        category: "replacement",
        name: "Profanity Filter",
        description:
          "Indicates whether to remove profanity from the transcript.",
        key: "profanity_filter",
        dataType: "boolean",
      },
      // {
      //   category: "replacement",
      //   name: "Redaction",
      //   description:
      //     "Indicates whether to redact sensitive information, replacing redacted content with asterisks (*).",
      //   key: "redact",
      //   dataType: "string",
      // },
      // {
      //   category: "replacement",
      //   name: "Find and Replace",
      //   description:
      //     "Terms or phrases to search for in the submitted audio and replace.",
      //   key: "replace",
      //   dataType: "string",
      // },
      // {
      //   category: "identification",
      //   name: "Search",
      //   description:
      //     "Terms or phrases to search for in the submitted audio. Deepgram searches for acoustic patterns in audio rather than text patterns in transcripts because we have noticed that acoustic pattern matching is more performant.",
      //   key: "search",
      //   dataType: "string",
      // },
      // {
      //   category: "identification",
      //   name: "Keywords",
      //   description:
      //     "Keywords to which the model should pay particular attention to boosting or suppressing to help it understand context. Intensifier indicates how much you want to boost it. The default Intensifier is one (1). An Intensifier of two (2) equates to two boosts multiplied in a row, whereas zero (0) is equivalent to not specifying a keywords keyeter at all.",
      //   key: "keywords",
      //   dataType: "string",
      // },
      // {
      //   category: "identification",
      //   name: "Language Detection",
      //   description: "Indicates whether to identify which language is spoken.",
      //   key: "detect_language",
      //   dataType: "boolean",
      // },
      {
        category: "identification",
        name: "Diarization",
        description: "Indicates whether to recognize speaker changes.",
        key: "diarize",
        dataType: "boolean",
      },
      {
        category: "inference",
        name: "Summarization",
        description:
          "Indicates whether Deepgram will provide summaries for sections of content. When Summarization is enabled, Punctuation will also be enabled by default.",
        key: "summarize",
        dataType: "boolean",
      },
      {
        category: "inference",
        name: "Topic Detection",
        description:
          "Indicates whether Deepgram will identify and extract key topics for sections of content.",
        key: "detect_topics",
        dataType: "boolean",
      },
      // {
      //   category: "inference",
      //   name: "Entity Detection (beta)",
      //   description:
      //     "Indicates whether Deepgram will identify and extract key entities for sections of content.",
      //   key: "detect_entities",
      //   dataType: "boolean",
      // },
    ];
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }

    .tab {
      float: left;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      width: 30%;
      height: 300px;
    }

    .tab button {
      display: block;
      background-color: inherit;
      color: black;
      padding: 22px 16px;
      width: 100%;
      border: none;
      outline: none;
      text-align: left;
      cursor: pointer;
      transition: 0.3s;
    }

    .tab button:hover {
      background-color: #ddd;
    }

    .tab button.active {
      background-color: #ccc;
    }

    .tabcontent {
      float: left;
      padding: 0px 12px;
      border: 1px solid #ccc;
      width: 70%;
      border-left: none;
      height: 300px;
    }
  `;

  get _tablinks() {
    return (this.___tablinks ??=
      this.renderRoot?.querySelectorAll(".tablinks") ?? null);
  }

  get _tabcontent() {
    return (this.___tabcontent ??=
      this.renderRoot?.querySelectorAll(".tabcontent") ?? null);
  }

  get _button() {
    return (this.___button ??=
      this.renderRoot?.querySelectorAll("button") ?? null);
  }

  firstUpdated() {
    for (let i = 1; i < this._tabcontent.length; i++) {
      this._tabcontent[i].style.display = "none";
    }
  }

  openSection(e) {
    const tabcontent = this._tabcontent;
    const tablinks = this._tablinks;

    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      if (tabcontent[i].id === e.target.innerText) {
        tabcontent[i].style.display = "block";
        console.log(tabcontent[i]);
      }
    }

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    this._button.forEach((button) => {
      if (button.innerText == e.target.innerText) {
        button.className += " active";
        this.currentCategory = e.target.innerText;
        this.requestUpdate();
      }
    });
  }

  render() {
    return html`<div class="tab">
        <button class="tablinks active" @click="${this.openSection}">
          Formatting
        </button>
        <button class="tablinks" @click="${this.openSection}">
          Replacement
        </button>
        <button class="tablinks" @click="${this.openSection}">
          Identification
        </button>
        <button class="tablinks" @click="${this.openSection}">Inference</button>
      </div>

      <div id="Formatting" class="tabcontent">
        <article @load=${this.filterFeatures("Formatting")}>
          ${this.displayedFeatures.map(
            (feature) =>
              html`
                  <input type="checkbox" id="${feature.key}" name="${feature.key}" @change="${this.selectFeature}"><label for="${feature.key}">${feature.name}</label><p>${feature.description}</p></div>`
          )}
        </article>
      </div>

      <div id="Replacement" class="tabcontent">
        <article @load=${this.filterFeatures("Replacement")}>
          ${this.displayedFeatures.map(
            (feature) =>
              html`
                  <input type="checkbox" id="${feature.key}" name="${feature.key}" @change="${this.selectFeature}"><label for="${feature.key}">${feature.name}</label><p>${feature.description}</p></div>`
          )}
        </article>
      </div>

      <div id="Identification" class="tabcontent">
        <article @load=${this.filterFeatures("Identification")}>
          ${this.displayedFeatures.map(
            (feature) =>
              html`
                  <input type="checkbox" id="${feature.key}" name="${feature.key}" @change="${this.selectFeature}"><label for="${feature.key}">${feature.name}</label><p>${feature.description}</p></div>`
          )}
        </article>
      </div>

      <div id="Inference" class="tabcontent">
        <article @load=${this.filterFeatures("Inference")}>
          ${this.displayedFeatures.map(
            (feature) =>
              html`
                  <input type="checkbox" id="${feature.key}" name="${feature.key}" @change="${this.selectFeature}"><label for="${feature.key}">${feature.name}</label><p>${feature.description}</p></div>`
          )}
        </article>
      </div>`;
  }

  filterFeatures(item) {
    this.displayedFeatures = [];
    this.features.filter((i) => {
      if (i.category === item.toLowerCase()) {
        this.displayedFeatures.push(i);
      }
    });
  }

  selectFeature(e) {
    if (this.selectedFeatures.hasOwnProperty(e.target.name)) {
      const featureToDelete = e.target.name;
      delete this.selectedFeatures[featureToDelete];
    } else {
      this.selectedFeatures[e.target.name] = true;
    }
    const options = {
      detail: this.selectedFeatures,
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("featureselect", options));
  }
}

customElements.define("app-feature-select", AppFeatureSelect);
