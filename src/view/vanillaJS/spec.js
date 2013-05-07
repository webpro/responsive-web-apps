define({

    vanillaJS: {
        create: {
            module: 'view/vanillaJS/main',
            args: [{ $ref: 'viewNode' }]
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true }
    ]

});
