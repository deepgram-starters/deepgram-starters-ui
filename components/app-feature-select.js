import { html, css, LitElement } from "//cdn.skypack.dev/lit";

class AppFeatureSelect extends LitElement {
  static properties = {
    features: [],
    displayedFeatures: [],
    selectedFeatures: [],
  };

  constructor() {
    super();
    this.displayedFeatures = [];
    this.selectedFeatures = [];
    this.categories = [
      "Formatting",
      "Replacement",
      "Identification",
      "Inference",
    ];
    this.features = [
      {
        category: "formatting",
        name: "Smart Format",
        description:
          "Smart Format improves readability by applying additional formatting. When enabled, the following features will be automatically applied: Punctuation, Numerals, Paragraphs, Dates, Times, and Alphanumerics.",
        param: "smart_format=true",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Punctuation",
        description:
          "Indicates whether to add punctuation and capitalization to the transcript.",
        param: "punctuate=true",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Paragraphs",
        description:
          "Indicates whether Deepgram will split audio into paragraphs to improve transcript readability. When paragraphs is set to true, punctuate will also be set to true.",
        param: "paragraphs=true",
        dataType: "boolean",
      },
      {
        category: "formatting",
        name: "Utterances",
        description:
          "Segments speech into meaningful semantic units. By default, when utterances is enabled, it starts a new utterance after 0.8 s of silence. You can customize the length of time used to determine where to split utterances by submitting the utt_split parameter.",
        param: "utterances=true",
        dataType: "boolean",
      },
      {
        category: "replacement",
        name: "Numerals",
        description:
          "Indicates whether to convert numbers from written format (e.g. one) to numerical format (e.g. 1).",
        param: "numerals=true",
        dataType: "boolean",
      },
      {
        category: "replacement",
        name: "Profanity Filter",
        description:
          "Indicates whether to remove profanity from the transcript.",
        param: "profanity_filter=true",
        dataType: "boolean",
      },
      {
        category: "replacement",
        name: "Redaction",
        description:
          "Indicates whether to redact sensitive information, replacing redacted content with asterisks (*).",
        param: "redact=",
        dataType: "string",
      },
      {
        category: "replacement",
        name: "Find and Replace",
        description:
          "Terms or phrases to search for in the submitted audio and replace.",
        selected: "replace=",
        dataType: "string",
      },
      {
        category: "identification",
        name: "Search",
        description:
          "Terms or phrases to search for in the submitted audio. Deepgram searches for acoustic patterns in audio rather than text patterns in transcripts because we have noticed that acoustic pattern matching is more performant.",
        param: "search=",
        dataType: "string",
      },
      {
        category: "identification",
        name: "Keywords",
        description:
          "Keywords to which the model should pay particular attention to boosting or suppressing to help it understand context. Intensifier indicates how much you want to boost it. The default Intensifier is one (1). An Intensifier of two (2) equates to two boosts multiplied in a row, whereas zero (0) is equivalent to not specifying a keywords parameter at all.",
        param: "keywords=",
        dataType: "string",
      },
      {
        category: "identification",
        name: "Diarization",
        description: "Indicates whether to recognize speaker changes.",
        param: "diarize=true",
        dataType: "boolean",
      },
      {
        category: "inference",
        name: "Summarization",
        description:
          "Indicates whether Deepgram will provide summaries for sections of content. When Summarization is enabled, Punctuation will also be enabled by default.",
        param: "summarize=true",
        dataType: "boolean",
      },
      {
        category: "inference",
        name: "Topic Detection",
        description:
          "Indicates whether Deepgram will identify and extract key topics for sections of content.",
        param: "detect_topics=true",
        dataType: "boolean",
      },
      {
        category: "inference",
        name: "Entity Detection (beta)",
        description:
          "Indicates whether Deepgram will identify and extract key entities for sections of content.",
        param: "detect_entities=",
        dataType: "boolean",
      },
    ];
  }

  static styles = css`
    h1 {
      color: #333;
      font-family: arial, sans-serif;
      margin: 1em auto;
      width: 80%;
    }

    .tabordion {
      color: #333;
      display: block;
      font-family: arial, sans-serif;
      margin: auto;
      position: relative;
      width: 80%;
    }

    .tabordion input[name="sections"] {
      left: -9999px;
      position: absolute;
      top: -9999px;
    }

    .tabordion section {
      display: block;
    }

    .tabordion section .tab-label {
      background: #ccc;
      border: 1px solid #fff;
      cursor: pointer;
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      padding: 15px 20px;
      position: relative;
      width: 180px;
      z-index: 100;
    }

    .tabordion section article {
      display: none;
      left: 230px;
      min-width: 300px;
      padding: 0 0 0 21px;
      position: absolute;
      top: 0;
    }

    .tabordion input[name="sections"]:checked + label {
      background: #eee;
      color: #bbb;
    }

    .tabordion input[name="sections"]:checked ~ article {
      display: block;
    }

    @media (max-width: 533px) {
      h1 {
        width: 100%;
      }

      .tabordion {
        width: 100%;
      }

      .tabordion section label {
        font-size: 1em;
        width: 160px;
      }

      .tabordion section article {
        left: 200px;
        min-width: 270px;
      }

      .tabordion section article:after {
        background-color: #ccc;
        bottom: 0;
        content: "";
        display: block;
        left: -199px;
        position: absolute;
        top: 0;
        width: 200px;
      }
    }

    @media (max-width: 768px) {
      h1 {
        width: 96%;
      }

      .tabordion {
        width: 96%;
      }
    }

    @media (min-width: 1366px) {
      h1 {
        width: 70%;
      }

      .tabordion {
        width: 70%;
      }
    }
  `;
  render() {
    return html`<div class="tabordion">
      ${this.categories.map(
        (item, index) =>
          html`<section id="section${index}">
            <input type="radio" name="sections" id="option${index}" />
            <label class="tab-label" for="option${index}">${item}</label>
            <article @load=${this.filterFeatures(item)}>
              ${this.displayedFeatures.map(
                (feature) =>
                  html`
                  <input type="checkbox" id="${feature.name}" name="${feature.name}" @change="${this.selectFeature}"><label for="${feature.name}">${feature.name}</label><p>${feature.description}</p></div>`
              )}
            </article>
          </section>`
      )}
    </div>`;
  }

  firstUpdated() {
    this.renderRoot.getElementById("option0").setAttribute("checked", "");
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
    if (this.selectedFeatures.indexOf(e.target.name) === -1) {
      this.selectedFeatures.push(e.target.name);
    } else {
      this.selectedFeatures.splice(
        this.selectedFeatures.indexOf(e.target.name),
        1
      );
    }
    console.log(this.selectedFeatures);
    const options = {
      detail: this.selectedFeatures,
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("featureselect", options));
  }
}

customElements.define("app-feature-select", AppFeatureSelect);
