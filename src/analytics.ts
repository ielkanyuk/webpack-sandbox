import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let destoyed: boolean = false;

  const listener = (): number => counter++;

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

window['analytics'] = createAnalytics();
