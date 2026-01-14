const page = {
  init() {
    this.portfolio();
  },
  portfolio() {
    // Main Portfolio Tab Change
    const tabs = document.querySelectorAll(".portfolio__main-tab");
    const tabItems = document.querySelectorAll(".portfolio__main-item");

    tabItems.forEach((tabItem, index) => {
      tabItem.classList.toggle("is-active", index === 0);
    });
    tabs.forEach((tab, index) => {
      tab.classList.toggle("is-active", index === 0);
    });

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");

        tabItems.forEach((tabItem) => tabItem.classList.remove("is-active"));
        tabItems[index].classList.add("is-active");
      });
    });

    // Widget Portfolio Show More
    const showMoreBtn = document.querySelector(".portfolio__widget-more");
    const widgetItems = document.querySelectorAll(".portfolio__widget-item");

    const showCount = 3;
    let visibleCount = showCount;

    widgetItems.forEach((widgetItem, index) => {
      if (index < showCount) {
        widgetItem.classList.add("is-active");
      }
    });

    showMoreBtn.addEventListener("click", () => {
      visibleCount += showCount;

      widgetItems.forEach((widgetItem, index) => {
        if (index < visibleCount) {
          widgetItem.classList.add("is-active");
        }
        if (visibleCount >= widgetItems.length) {
          showMoreBtn.style.display = "none";
        }
      });
    });
  },
};
page.init();
