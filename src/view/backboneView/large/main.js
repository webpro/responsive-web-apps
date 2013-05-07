define(['../main'], function(BackboneViewSmall) {

    return BackboneViewSmall.extend({

        template: '<p class="module">Rendered extended module (<code>view/backboneView/large</code>).</p>',

        render: function() {
            this.$el.html(this.template);
        }

    });

});
