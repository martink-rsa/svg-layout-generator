/* eslint-disable no-underscore-dangle */

/*
  Information holder – an object designed to know certain information and provide that information to other objects.
  Structurer – an object that maintains relationships between objects and information about those relationships.
  Service provider – an object that performs specific work and offers services to others on demand.
  Controller – an object designed to make decisions and control a complex task.
  Coordinator – an object that doesn’t make many decisions but, in a rote or mechanical way, delegates work to other objects.
  Interfacer – an object that transforms information or requests between distinct parts of a system.
*/

'use strict'

/* Stylesheets */
import './assets/css/normalize.css';
import './assets/css/style.css';
import './assets/css/acrylic.css';

/* Modules */
import { svgGenerator } from './assets/js/modules/svgGenerator/svgGenerator';
import { domController } from './assets/js/modules/domController/domController';

svgGenerator.createSVG();

// OLD MODULE AND FUNCTION
// import { svgLayout } from './assets/js/modules/svgLayout';
// svgLayout.createNewSVGLayout(800, 800, 'rgba(255,0,255,1');
