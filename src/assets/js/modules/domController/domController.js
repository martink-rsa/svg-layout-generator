/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const domController = (() => {
  const _mainDisplay = document.getElementById('content');

  const getMainDisplay = () => _mainDisplay;

  const init = () => {
    console.log('domController init');
  };

  init();

  return {
    getMainDisplay,
  };
})();
export { domController };
