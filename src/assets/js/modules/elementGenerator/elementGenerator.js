/*
  ------------ TAG GENERATOR --------------
  Generates tags.
  Default: <div>
  Parameters (tag, ...classes)

  To-Do:
  - Create/find regex expression to match valid
      HTML tags (This does not have to match valid attribute/properties)

  Issues: No error checking on tag input and valid html tags
*/

const elementGenerator = (() => {
  const createElement = (domTag = 'div') => {
    const regexStringsIntegers = /[A-Za-z0-9]+/g;
    const newTag = domTag.toLowerCase().match(regexStringsIntegers).join();
    // SVG child elements that would go into a <svg>...</svg> container
    const svgChildElements = ['def', 'g', 'filter', 'line', 'circle', 'rect', 'polyline', 'path', 'polygon', 'ellipse'];
    let generatedElement;

    // SVGs require a different declaration
    if (newTag === 'svg') {
      generatedElement = document.createElementNS('http://www.w3.org/2000/svg', newTag);
      generatedElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      generatedElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      generatedElement.setAttribute('viewBox', '0 0 800 800');
      console.log(`- Parent SVG NS element created: ${newTag}`);
    } else if (svgChildElements.includes(newTag)) {
      generatedElement = document.createElementNS('http://www.w3.org/2000/svg', newTag);
      console.log(`- Child SVG NS element: ${newTag}`);
    } else {
      generatedElement = document.createElement(newTag);
      console.log('- Normal Element Created!');
    }

    return generatedElement;
  };

  return {
    createElement,
  };
})();

export default elementGenerator;
