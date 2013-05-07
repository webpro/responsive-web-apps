define([], function() {

    var VanillaView = function(viewNode) {
        this.viewNode = viewNode;
        this.render();
    };

    VanillaView.prototype.render = function() {
        this.viewNode.innerHTML = '<p class="module">Rendered the default Vanilla JS view (<code>view/vanillaJS</code>).</p>';
    };

    return VanillaView;

});
