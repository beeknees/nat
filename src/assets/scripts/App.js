define(function(require, exports, module) { // jshint ignore:line
    'use strict';
    
    require('nerdery-function-bind');
    var $ = require('jquery');
    var DemoView = require('./views/DemoView');
    var CarouselView = require('./views/CarouselView');
    var Modernizr = require('modernizr');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {
        this.init();
    };

    var proto = App.prototype;

    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    proto.init = function() {
        // Create your views here
        // Pass in a jQuery reference to DOM elements that need functionality attached to them
        this.demoView = new DemoView($('.js-demo'));
        this.carouselView = new CarouselView($('.js-carousel'));
    };

    return App;

});