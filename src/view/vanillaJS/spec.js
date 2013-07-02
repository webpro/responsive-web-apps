define(['view/vanillaJS/main'], {

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
