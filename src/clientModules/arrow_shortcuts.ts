import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  document.onkeydown = function (e) {
    // Avoid triggering navigation when typing in input fields or search bars
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable) {
      return;
    }

    const navigationButtons = document.getElementsByClassName('pagination-nav__link');
    
    if (e.key === 'ArrowLeft') {
      // If a previous page button exists, it will be the first item index
      const prevButton = navigationButtons[0];
      if (prevButton && prevButton.classList.contains('pagination-nav__link--prev')) {
        prevButton.click();
      }
    } else if (e.key === 'ArrowRight') {
      // If both next/prev exist, next is index 1. If only next exists, it's index 0.
      const nextButton = navigationButtons.length === 2 ? navigationButtons[1] : navigationButtons[0];
      if (nextButton && nextButton.classList.contains('pagination-nav__link--next')) {
        nextButton.click();
      }
    }
  };
}
