define(['maria.orig'], function(maria) {

    maria.ElementView.prototype.attachViewToDOM = function(element) {
        element.innerHTML = this.build().outerHTML;
    };

    return maria;

});
