const EFFECT_KEYFRAME = [
  {
    filter: "blur(30px)",
    transform: "scale(0.8) translate(0, 120%)",
    transformOrigin: "center",
    opacity: 0,
  },
  {
    filter: "none",
    transform: "none",
    transformOrigin: "center",
    opacity: 1,
  },
];

const EFFECT_OPTIONS = {
  delay: 0,
  duration: 900,
  fill: "forwards",
  easing: "cubic-bezier(0,.99,.32,.99)",
  direction: "normal",
};

class TabsComponent {
  constructor() {
    this.tabsArea = "data-tab-area";
    this.contentArea = "data-tab-content-area";

    this.tabs = document.querySelectorAll(`[${this.tabsArea}]`);
    this.contents = document.querySelectorAll(`[${this.contentArea}]`);
  }

  effect(item) {
    item.animate(EFFECT_KEYFRAME, {
      ...EFFECT_OPTIONS,
    });
  }

  tabHendler(elm) {
    let attr = elm.getAttribute(this.tabsArea);
    for (let item of this.tabs) {
      let elm = item.getAttribute(this.tabsArea);

      if (elm === attr && attr === "tb-all") {
        item.classList.add("--active");
        item.classList.add("gm-hide");
      } else if (elm === attr) {
        item.classList.add("--active");
      } else {
        item.classList.remove("--active");
        item.classList.remove("gm-hide");
      }
    }

    this.contents.forEach((item) => {
      let itemAttr = item.getAttribute(this.contentArea);

      if (itemAttr !== attr && attr === "tb-all") {
        item.classList.remove("gm-hide");
      } else if (
        (itemAttr !== attr && attr === "tb-indor") ||
        (itemAttr !== attr && attr === "tb-outdoor") ||
        (itemAttr !== attr && attr === "tb-house")
      ) {
        item.classList.add("gm-hide");
      } else {
        item.classList.remove("gm-hide");
      }

      this.effect(item);
    });
  }

  init() {
    this.tabs.forEach((item) =>
      item.addEventListener("click", (event) => this.tabHendler(event.target))
    );
  }
}

const app = () => {
  const tabs = new TabsComponent();

  tabs.init();
};

window.addEventListener("load", (event) => {
  app();
});
