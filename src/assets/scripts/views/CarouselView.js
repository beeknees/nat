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
    var CarouselView = function($element) {
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
        * Sets default index value
        *
        */

        this.index = 0;


        /**
        * Sets number of slides value
        *
        */

        this.numberOfSlides = 0;

        /**
         * Tracks whether component is enabled.
         *
         * @default false
         * @property isEnabled
         * @type {bool}
         * @public
         */
        // this.isEnabled = false;

        /**
         * Tracks whether user interactivity is enabled
         *
         * @default false
         * @property isInteractive
         * @type {bool}
         * @public
         */

        this.init();
    };

    var proto = CarouselView.prototype;

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
        this.onClickHandler = this.onClick.bind(this);

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

        this.$carouselContainer = this.$element.find('.js-carousel');
        this.$carouselList = this.$element.find('.js-carousel-list');
        this.$carouselItem = this.$element.find('.js-carousel-item');
        this.$pagerThmb = this.$element.find('.carousel-thumbnail');

        // this.$currentSlide = 1;
        // this.$numberOfSlides = $('.js-carousel-list .js-carousel-item').length;

        
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
        // if (this.isEnabled) {
        //     return this;
        // }
        // this.isEnabled = true;
// 
        // this.$carouselItem.on('click', this.onClickHandler);
        this.$pagerThmb.on('click', this.onClickHandler);

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

    proto.getSlideWidth = function() {
        return this.$carouselItem.width();
        console.log($carouselItem.width());
    }


    proto.onClick = function(e) {

        console.log('clicked');
        var $clickedEl = $(e.currentTarget);

        // this.incrementSlide();

        this.replaceSlide($clickedEl);

        console.log($clickedEl);
        return this;

    };


    proto.replaceSlide = function($element) {
        // var thumbnailIndex = $('.carousel').findIndex('.pager li');
        // console.log('index of: ', thumbnailIndex);
        // test.addClass('test');

        // var $thumbnail = $('.js-img-thumbnail');

        // this.$thumbnail.eq(index).addClass('hooray');
        // this.$clickedEl.toggleClass('isActive');
        // console.log(index);
        this.$pagerThmb.addClass('isActive');

        return this;
    };












    // for use with a slide that has a pager
    proto.incrementSlide = function() {
        // var currentSlide = this.index++;
        var numberOfSlides = $('.js-carousel-list li').length - 1;
        // var test = $('.js-img-thumbnail').index();

            if (this.index === numberOfSlides) {
                this.index = 0;
            } else {
                this.index++;
            }

        console.log('current slide: ' + this.index);
        console.log('# slide: ' + numberOfSlides);

        this.changeSlide(this.index);
        console.log('pager index' , test);

        return this;
    };


    proto.changeSlide = function(index) {
        this.$carouselList.animate({ marginLeft: -this.getSlideWidth() * index });
        console.log('slide width: ' + this.getSlideWidth());

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
    // proto.setIsInteractive = function(value) {
    //     this.isInteractive = value;
    // };

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

    return CarouselView;

});