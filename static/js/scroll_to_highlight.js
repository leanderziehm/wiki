
(function () {
    console.log("scroll_to_highlight");
  const PARAM = "_highlight";

  let observer = null;
  let retryTimer = null;

  function findAndScroll(keyword) {
    if (!keyword) return false;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      if (
        node.textContent.toLowerCase().includes(keyword.toLowerCase()) &&
        node.parentElement &&
        !node.parentElement.closest(
          "script, style, noscript, [hidden], [aria-hidden='true']"
        )
      ) {
        node.parentElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        console.log("scrolled into view : ",keyword);

        stopWatching();
        return true;
      }
    }

    return false;
  }

  function stopWatching() {
    observer?.disconnect();
    observer = null;

    clearInterval(retryTimer);
    retryTimer = null;
  }

  function startWatching(keyword) {
    stopWatching();

    if (!keyword) return;

    if (findAndScroll(keyword)) return;

    observer = new MutationObserver(() => {
      findAndScroll(keyword);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    retryTimer = setInterval(() => {
      findAndScroll(keyword);
    }, 500);
  }

  function checkUrl() {
    const keyword = new URLSearchParams(
      window.location.search
    ).get(PARAM);

    startWatching(keyword);
  }

  window.addEventListener("popstate", checkUrl);

  for (const method of ["pushState", "replaceState"]) {
    const original = history[method];

    history[method] = function (...args) {
      const result = original.apply(this, args);
      checkUrl();
      return result;
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkUrl, {
      once: true,
    });
  } else {
    checkUrl();
  }
})();
