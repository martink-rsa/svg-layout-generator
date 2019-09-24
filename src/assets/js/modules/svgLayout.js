/* eslint-disable no-underscore-dangle */

// Create Main SVG Tag
//  Set height and width
//
//    <svg>  </svg>
//
// Add more to the layout
//
//    #do stuff
//
// Add classes to SVG
//
//    #finish up and return something

const svgLayout = (() => {
  /*
  RESERVE WORDS:
  ELEMENT: KEEP RESERVED FOR ELEMENT GENERATION
  */
  let _svgSpec;
  let _baseMargin = 10;

  const getSvgSpec = () => _svgSpec;
  const setSvgSpec = (svgSpec) => {
    _svgSpec = svgSpec;
  };

  const getBaseMargin = () => _baseMargin;
  const setBaseMargin = (baseMargin) => {
    _baseMargin = baseMargin;
  };

  const px = (text) => `${text}px`;

  class SVGSpec {
    constructor({ baseHeight = 800, baseWidth = 800, baseBackground = 'rgba(0,0,0,1)' }) {
      this.baseHeight = baseHeight;
      this.baseWidth = baseWidth;
      this.baseBackground = baseBackground;
    }
  }

  const initSVG = (height, width, background) => {
    const newSVGSpec = new SVGSpec({
      baseHeight: height,
      baseWidth: width,
      baseBackground: background,
    });
    setSvgSpec(newSVGSpec);
  };

  const createBaseContainer = () => {
    const svgSpec = getSvgSpec();

    console.log(svgSpec.baseHeight);

    const mainSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mainSVGElement.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    mainSVGElement.classList('svg-base-container');

    console.log(mainSVGElement);

    // const svgSeparatorLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  };

  /* PUBLIC */

  const createNewSVGLayout = (height, width, background) => {
    console.log('generate svg');
    initSVG(height, width, background);
    createBaseContainer();
  };

  return {
    createNewSVGLayout,
  };

})();
export { svgLayout };
