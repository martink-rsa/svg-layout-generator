/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const domController = (() => {
  const _mainDisplay = document.getElementById('content');

  const getMainDisplay = () => _mainDisplay;

  const init = () => {
  };

  init();

  return {
    getMainDisplay,
  };
})();
export default domController;
