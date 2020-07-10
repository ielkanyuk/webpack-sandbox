import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let destoyed = false;

  const listener = () => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destoyed = true;
    },

    getClicks() {
      if (destoyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }

      return counter;
    }
  }
}

window.analytics = createAnalytics();
