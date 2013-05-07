define(['maria'], function(maria) {

    var ns = {};

    var controller = new maria.Controller();

    var template = '<p class="module">Rendered the default maria ElementView (<code>view/mariaView</code>).</p>';

    maria.ElementView.subclass(ns, 'myView', {
        controllerConstructor: controller,
        template: template
    });

    return ns.myView;

});
