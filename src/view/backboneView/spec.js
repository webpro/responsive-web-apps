define({

    backboneView: {
        create: {
            module: 'view/backboneView/main',
            args: [{
                el: { $ref: 'viewNode' }
            }]
        },
        destroy: {
            remove: []
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true }
    ]

});
