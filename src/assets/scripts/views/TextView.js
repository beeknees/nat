define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var $ = require('jquery');

    /**
     * Carousel script for slideshow
     *
     * @class CarouselView
     * @param {jQuery} $element A reference to the containing DOM element.
     * @constructor
     */
    var TextView = function($element) {
        /**
         * A reference to the containing DOM element.
         *
         * @default null
         * @property $element
         * @type {jQuery}
         * @public
         */
        this.$element = $element;

        /**
         * A reference to the carousel element.
         *
         * @default null
         * @property $carousel
         * @type {jQuery}
         * @private
         */
        this.$carousel = null;

        /**
         * Tracks whether component is enabled.
         *
         * @default false
         * @property isEnabled
         * @type {bool}
         * @public
         */
        this.isEnabled = false;

        /**
         * Tracks whether user interactivity is enabled
         *
         * @default false
         * @property isInteractive
         * @type {bool}
         * @public
         */
        this.isInteractive = false;

        this.init();
    };

    var proto = TextView.prototype;

    /**
     * Initializes the UI Component View.
     * Runs a single setupHandlers call, followed by createChildren and layout.
     * Exits early if it is already initialized.
     *
     * @method init
     * @returns {DemoView}
     * @private
     */
    proto.init = function() {
        this.setupHandlers()
           .createChildren()
           .enable();

        return this;
    };

    /**
     * Binds the scope of any handler functions.
     * Should only be run on initialization of the view.
     *
     * @method setupHandlers
     * @returns {DemoView}
     * @private
     */
    proto.setupHandlers = function() {
        // Bind event handlers scope here

        return this;
    };

    /**
     * Create any child objects or references to DOM elements.
     * Should only be run on initialization of the view.
     *
     * @method createChildren
     * @returns {DemoView}
     * @private
     */
    proto.createChildren = function() {
        this.$text = this.$element.find('js-slide');
        this.$texti = 0;
        this.$textArray = ['cute', 'happy', 'smart']; 
        return this;
    };

    /**
     * Remove any child objects or references to DOM elements.
     *
     * @method removeChildren
     * @returns {DemoView}
     * @public
     */
    proto.removeChildren = function() {
        // this.$carousel = null;

        return this;
    };

    /**
     * Enables the component.
     * Performs any event binding to handlers.
     * Exits early if it is already enabled.
     *
     * @method enable
     * @returns {CarouselView}
     * @public
     */
    proto.enable = function() {
        if (this.isEnabled) {
            return this;
        }
        this.isEnabled = true;


        return this;
    };

    /**
     * Disables the component.
     * Tears down any event binding to handlers.
     * Exits early if it is already disabled.
     *
     * @method disable
     * @returns {DemoView}
     * @public
     */
    proto.disable = function() {
        if (!this.isEnabled) {
            return this;
        }
        this.isEnabled = false;


        this.setIsInteractive(false);

        return this;
    };

    /**
     * Destroys the component.
     * Tears down any events, handlers, elements.
     * Should be called when the object should be left unused.
     *
     * @method destroy
     * @returns {DemoView}
     * @public
     */
    proto.destroy = function() {
        this.disable()
            .removeChildren();

        return this;
    };

    //////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * onClick handler.
     * Alters color upon click of the element.
     *
     * @method onClick
     * @param event {Event} JavaScript event object.
     * @private
     */
    proto.onClick = function(event) {

        console.log('you did it!');
    };

    /**
     * onMouseEnter handler.
     * Alters background color upon mouse enter of the element.
     *
     * @method onMouseEnter
     * @param event {Event} JavaScript event object.
     * @private
     */
    proto.onMouseEnter = function(event) {
        this.$texti++;
        if(texti > (textArray.length - 1)) {
            texti = 0;
        }

        
        this.$text = $textArray[texti];

        console.log('test');

    };

    proto.slideNext = function(event) {

    };

    proto.slide = function(event) {
    };

    /**
     * onMouseLeave handler.
     * Alters background color upon mouse leave of the element.
     *
     * @method onMouseLeave
     * @param event {Event} JavaScript event object.
     * @private
     */
    proto.onMouseLeave = function(event) {
    };

    //////////////////////////////////////////////////////////////////////////////////
    // HELPERS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * Sets whether user interactivity is enabled for this component
     *
     * @method wait
     * @param value {bool} True to enable interactivity
     */
    proto.setIsInteractive = function(value) {
        this.isInteractive = value;
    };

    /**
     * Waits for the defined number of milliseconds.
     *
     * @method wait
     * @param millisecondsToWait {int} Number of milliseconds to delay
     * @returns {jQuery.deferred}
     */
    // proto.wait = function(millisecondsToWait) {
    //     var deferred = $.Deferred();

    //     window.setTimeout(function() {
    //         deferred.resolve();
    //     }, millisecondsToWait);

    //     return deferred.promise();
    // };

    return TextView;

});