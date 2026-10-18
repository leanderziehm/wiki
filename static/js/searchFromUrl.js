(function () {
  const QUERY_PARAM = "q";
  const INPUT_ID = "search_input_react";

  function getQuery() {
    return new URLSearchParams(window.location.search).get(QUERY_PARAM);
  }

  async function startSearch(query) {
    const input = document.querySelector(
      'input[placeholder="Search"][aria-label="Search"]',
    );

    if (!input) {
      console.warn("Search input not found");
      return;
    }

    input.focus();

    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    ).set;

    setter.call(input, query);
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  async function init() {
    const query = getQuery();

    if (!query) {
      return;
    }

    console.log("[URL Search] Query:", query);

    await startSearch(query);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
