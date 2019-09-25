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


  /* <div baseDivContainer>
      <svg baseSvg Container>
        <filter>
        # group?
          # box?
  */

  let _baseDiv;
  let _baseSvg;

  let _baseMargin = 10;

  const getSvgSpec = () => _svgSpec;
  const setSvgSpec = (svgSpec) => {
    _svgSpec = svgSpec;
  };

  const getBaseMargin = () => _baseMargin;
  const setBaseMargin = (baseMargin) => {
    _baseMargin = baseMargin;
  };

  const getBaseDiv = () => _baseDiv;
  const setBaseDiv = (baseDiv) => {
    _baseDiv = baseDiv;
  };

  const getBaseSvg = () => _baseSvg;
  const setBaseSvg = (baseSvg) => {
    _baseSvg = baseSvg;
  };

  const px = (text) => `${text}px`;

  class SVGSpec {
    constructor({ baseHeight = 800, baseWidth = 800, baseBackground = 'rgba(0,0,0,1)' }) {
      this.baseHeight = baseHeight;
      this.baseWidth = baseWidth;
      this.baseBackground = baseBackground;
    }
  }


  // Append the SVG to the parent
  const appendSVGToParent = (element) => {
    const displayContainer = document.getElementById('content');
    displayContainer.appendChild(element);
  };

  const appendToSVG = (element) => {
    const svgContainer = getBaseSvg();
    svgContainer.appendChild(element);
  };

  const createRect = () => {
    const newRect = createTag('rect');
    console.log('rect created');
    newRect.setAttribute('height', '100');
    newRect.setAttribute('width', '300');
    newRect.classList.add('basic-rect');

    return newRect;
  };

  const createBoxStyle1 = () => {
    const newPath = createTag('path');
    // const newPath = createTag('path', 'svg-box-test');
    newPath.setAttribute('d', 'M-.38,0V800h800V0ZM737.55,747.86H60.73v-698H737.55Z');
    newPath.setAttribute('stroke', '#fff');
    newPath.setAttribute('fill', '#fff');
    newPath.setAttribute('stroke-miterlimit', '553');
    newPath.setAttribute('translate', 'transform(.88 .5)');
    console.log(newPath);

    return newPath;
  };

  // Create a normal or SVG element
  const createTag = (tag = 'div', ...tagClasses) => {
    // SVG child elements that would go into a <svg>...</svg> container
    const svgChildElements = ['line', 'circle', 'rect', 'polyline', 'path'];
    let newTag;

    console.log('--- Tag creation for parameter: ' + tag + '--------------------');

    // SVGs require a different declaration
    if (tag === 'svg') {
      newTag = document.createElementNS('http://www.w3.org/2000/svg', tag);
      newTag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      newTag.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      newTag.setAttribute('viewBox', '0 0 800 800');
      console.log('- Parent SVG container created');
    } else if (svgChildElements.includes(tag)) {
      newTag = document.createElementNS('http://www.w3.org/2000/svg', tag);
      console.log('- Child SVG element created using createElementNS');
    } else {
      newTag = document.createElement(tag);
      console.log('-- Normal Element Created');
    }

    // Add a class if supplied
    for (let i = 0; i < tagClasses.length; i += 1) {
      if (tagClasses[i] !== '') {
        newTag.classList.add(tagClasses[i]);
      }
    }
    console.log(newTag);
    console.log('--- END: Tag creation ----------------------------------');
    return newTag;
  };

  // Base SVG container <svg> ... </svg>
  const createBaseContainer = () => {
    const svgSpec = getSvgSpec();
    const baseSvgElement = createTag('svg', 'svg-test');
    // baseSvgElement.setAttribute('height', svgSpec.baseHeight);
    // baseSvgElement.setAttribute('width', svgSpec.baseWidth);
    setBaseSvg(baseSvgElement);
    
  };

  // Init before creating the SVG
  const initSVG = (height, width, background) => {
    const newSVGSpec = new SVGSpec({
      baseHeight: height,
      baseWidth: width,
      baseBackground: background,
    });
    setSvgSpec(newSVGSpec);
  };

  /* PUBLIC */

  // Main function to call when creating a new SVG layout
  const createNewSVGLayout = (height, width, background) => {
    console.log('generate svg');
    initSVG(height, width, background);
    createBaseContainer();
    appendToSVG(createRect());
    appendToSVG(createBoxStyle1());
    appendSVGToParent(getBaseSvg());
  };

  return {
    createNewSVGLayout,
  };

})();
export { svgLayout };
