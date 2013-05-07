define(function() {

    var VanillaWifiView = function(viewNode) {
        this.viewNode = viewNode;
        this.render();
    };

    VanillaWifiView.prototype.render = function() {
        this.viewNode.innerHTML = '<p class="module">Rendered the Vanilla JS "WIFI" view (<code>view/vanillaJS/wifi</code>).</p>';
    };

    return VanillaWifiView;

});
