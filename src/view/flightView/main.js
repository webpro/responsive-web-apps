define(['flight/lib/component'], function(defineComponent) {

    var template = '<p class="module">Rendered the default Flight view (<code>view/flightView</code>).</p>';

    function flightView() {

        this.render = function() {
            this.$node.html(template);
        };

        this.after('initialize', function() {
            this.render();
        })
    }

    return defineComponent(flightView);

});
