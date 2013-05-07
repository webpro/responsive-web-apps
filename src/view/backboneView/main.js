define(['backbone'], function(Backbone) {

    return Backbone.View.extend({

        template: '<p class="module">Rendered default module (<code>view/backboneView</code>).</p>',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
        }
    });
});
