(function () {
  const root = document.querySelector("[data-publications-page]");
  if (!root) return;

  let currentYear = "all";
  let currentTopic = "all";

  const papers = Array.from(root.querySelectorAll(".publication-card"));
  const yearDividers = Array.from(root.querySelectorAll("[data-year-divider]"));
  const yearButtons = Array.from(root.querySelectorAll("[data-filter-year]"));
  const topicButtons = Array.from(root.querySelectorAll("[data-filter-topic]"));
  const noResults = root.querySelector("#publication-no-results");

  function setActive(buttons, activeButton) {
    buttons.forEach((button) => {
      const active = button === activeButton;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function applyFilters() {
    let visibleCount = 0;
    const visibleYears = new Set();

    papers.forEach((paper) => {
      const year = paper.dataset.year;
      const topics = (paper.dataset.topics || "").split(",");
      const visible =
        (currentYear === "all" || year === currentYear) &&
        (currentTopic === "all" || topics.includes(currentTopic));

      paper.classList.toggle("publication-hidden", !visible);
      if (visible) {
        visibleCount += 1;
        visibleYears.add(year);
      }
    });

    yearDividers.forEach((divider) => {
      divider.style.display = visibleYears.has(divider.dataset.yearDivider) ? "flex" : "none";
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  yearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentYear = button.dataset.filterYear;
      setActive(yearButtons, button);
      applyFilters();
    });
  });

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentTopic = button.dataset.filterTopic;
      setActive(topicButtons, button);
      applyFilters();
    });
  });

  root.querySelectorAll(".publication-tag[data-topic]").forEach((tag) => {
    tag.addEventListener("click", () => {
      currentTopic = tag.dataset.topic;
      const matchingButton = topicButtons.find(
        (button) => button.dataset.filterTopic === currentTopic
      );
      if (matchingButton) setActive(topicButtons, matchingButton);
      applyFilters();
    });
  });

  root.querySelectorAll(".publication-stat[data-repo]").forEach((element) => {
    fetch(`https://img.shields.io/github/stars/${element.dataset.repo}.json`)
      .then((response) => response.json())
      .then((data) => {
        element.textContent = `⭐ Stars: ${data.value}`;
      })
      .catch(() => {
        element.textContent = "⭐ Stars: N/A";
      });
  });

  root.querySelectorAll(".publication-stat[data-arxiv]").forEach((element) => {
    fetch(
      `https://api.semanticscholar.org/graph/v1/paper/arXiv:${element.dataset.arxiv}?fields=citationCount`
    )
      .then((response) => response.json())
      .then((data) => {
        element.textContent = `📖 Citations: ${data.citationCount ?? 0}`;
      })
      .catch(() => {
        element.textContent = "📖 Citations: N/A";
      });
  });
})();
