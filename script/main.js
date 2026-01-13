const page = {
  init() {
    this.portfolio();
  },
  portfolio() {
    // Main Portfolio Tab Change
    const tabs = document.querySelectorAll(".portfolio__main-tab");
    const tabItems = document.querySelectorAll(".portfolio__main-item");

    tabItems.forEach((tabItem, index) => {
      tabItem.classList.toggle("isactive", index === 0);
    });
    tabs.forEach((tab, index) => {
      tab.classList.toggle("is-active", index === 0);
    });
  },
};
page.init();
