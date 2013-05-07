define(function() {

    "use strict";

    var dataAttributes = {
        condition: 'data-condition',
        media: 'data-matchMedia',
        mediaElement: 'data-matchMediaElement'
    };

    // Size is a string set by CSS using media queries (see src/css/stylesheet.css), and is either just 'small' or 'large'
    // Credits: http://adactio.com/journal/5429/
    var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

    // Some custom tests (for media queries and device features)
    var test = {
        small: function() {
            return size === 'small';
        },
        large: function() {
            return size === 'large';
        },
        touch: function() {
            // Simple version of https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
            return 'ontouchstart' in window;
        },
        gps: function() {
            return 'geolocation' in navigator;
        },
        cell: function() {
            // Check navigator.connection (set by cordova)
            return navigator.connection &&
                (navigator.connection.type === Connection.CELL_2G ||
                    navigator.connection.type === Connection.CELL_3G ||
                    navigator.connection.type === Connection.CELL_4G)
        },
        '3g': function() {
            // Check navigator.connection (set by cordova)
            return typeof navigator.connection === 'undefined' || navigator.connection.type === Connection.CELL_3G;
        },
        wifi: function() {
            // Check navigator.connection (set by cordova)
            return typeof navigator.connection === 'undefined' || navigator.connection.type === 'wifi';
        }
    };

    // Basic element query matching (e.g. extracts "800" out of `min-width:800px`)
    var reMinWidth = /min\-width:[\s]*([0-9]+)px[\s]*\)/,
        reMaxWidth = /max\-width:[\s]*([0-9]+)px[\s]*\)/;

    // Check whether given media query matches element
    var matchMediaElement = function(mediaQuery, element) {

        var matchesMin = mediaQuery.match(reMinWidth),
            matchesMax = mediaQuery.match(reMaxWidth);

        var isMinMatch = matchesMin === null || matchesMin && element.offsetWidth >= parseInt(matchesMin[1], 10),
            isMaxMatch = matchesMax === null || matchesMax && element.offsetWidth <= parseInt(matchesMax[1], 10);

        return isMinMatch && isMaxMatch;

    };

    // Checks whether given element matches a condition or (element) media query
    var hasConditionMatch = function(element) {

        var condition = element.getAttribute(dataAttributes.condition),
            media = element.getAttribute(dataAttributes.media),
            mediaElement = element.getAttribute(dataAttributes.mediaElement);

        if(!condition && !matchMedia && !matchMediaElement) {
            return false;
        }

        // Check data-condition="[feature]"
        if(condition) {
            var isInvertedCondition = condition.indexOf('!') === 0;
            condition = condition.replace(/^!/, '');
            if(test[condition]) {
                var hasCondition = test[condition].call();
                return isInvertedCondition ? hasCondition : !hasCondition;
            }
        }

        // Check data-matchMedia="[media-query]"
        if(media) {
            return !window.matchMedia(media).matches;
        }

        // Check data-matchMediaElement="[element-query]"
        if(mediaElement) {
            return !matchMediaElement(mediaElement, element);
        }

        return false;

    };

    // Simply returns result of condition test
    var hasMatch = function(condition) {

        return condition && test[condition].apply();

    };

    return {
        hasConditionMatch: hasConditionMatch,
        hasMatch: hasMatch
    };

});
