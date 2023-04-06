const ANIMATION_KEYFRAME = [
  {
    filter: "blur(30px)",
    transform: "scale(0.8) translate(0, 80%)",
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

const ANIMATION_OPTIONS = {
  delay: 0,
  fill: "forwards",
  easing: "cubic-bezier(0,.99,.32,.99)",
  direction: "normal",
};

class TabsComponent {
  constructor(
    tabsArea = "data-tab-area",
    contentArea = "data-tab-content-area",
    allTargetName = "tb-all",
    activeClass = "--is-active",
    hideClass = "gm-hide"
  ) {
    this.tabsArea = tabsArea;
    this.contentArea = contentArea;

    this.tabs = document.querySelectorAll(`[${this.tabsArea}]`);
    this.contents = document.querySelectorAll(`[${this.contentArea}]`);

    this.allTargetName = allTargetName;
    this.activeClass = activeClass;
    this.hideClass = hideClass;
  }

  appleEffect(item, count = 1, delta = 0.026) {
    item.animate(ANIMATION_KEYFRAME, {
      ...ANIMATION_OPTIONS,
      duration: Math.round((100 * count) / 2 + delta),
    });
  }

  tabHendler(elm) {
    let attr = elm.getAttribute(this.tabsArea);

    for (let item of this.tabs) {
      let elm = item.getAttribute(this.tabsArea);

      if (elm === attr && attr === this.allTargetName) {
        item.classList.add(this.activeClass);
        item.classList.add(this.hideClass);
      } else if (elm === attr) {
        item.classList.add(this.activeClass);
      } else {
        item.classList.remove(this.activeClass);
        item.classList.remove(this.hideClass);
      }
    }

    this.contents.forEach((item, index) => {
      let itemAttr = item.getAttribute(this.contentArea);

      itemAttr !== attr && attr !== this.allTargetName
        ? item.classList.add(this.hideClass)
        : item.classList.remove(this.hideClass);

      this.appleEffect(item, index);
    });
  }

  init() {
    this.tabHendler(this.tabs[0]);
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
