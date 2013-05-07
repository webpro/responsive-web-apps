define(['core/advisor', 'wire'], function(advisor, wire) {

    "use strict";

    var dataAttributes = {
        module: 'data-module',
        extend: 'data-extend'
    };

    var boot = function() {

        // Check whether we're on a "cordova device"
        if(!window.device) {
            wireModules();
        } else {
            document.addEventListener('deviceready', function() {
                wireModules();
            }, false);
        }

    };

    // Find elements with data-module attribute
    var wireModules = function(context) {

        var elements = (context || document.body).querySelectorAll('[' + dataAttributes.module + ']');

        Array.prototype.slice.call(elements).map(function(element) {
            wireModuleTo(element);
        });

    };

    // Wire module to DOM element (if conditions match)
    var wireModuleTo = function(element) {

        if(!advisor.hasConditionMatch(element)) {

            // The specId is actually a named module identifier in AMD terms,
            // and looks like @data-module/@data-extend/spec.js.
            // This wire spec points to the actual module.

            var extend = element.getAttribute(dataAttributes.extend),
                moduleLocation = element.getAttribute(dataAttributes.module),
                moduleLocationExtend =+ advisor.hasMatch(extend) ? '/' + extend : '',
                specId = moduleLocation + moduleLocationExtend + '/spec';

            wire([specId, { viewNode: element }]);

        }

    };

    return {
        boot: boot
    };

});
