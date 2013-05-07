define({

    backboneViewLarge: {
        create: {
            module: 'view/backboneView/large/main',
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
