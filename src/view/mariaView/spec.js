define({

    mariaView: {
        create: {
            module: 'view/mariaView/main'
        },
        init: {
            buildTemplate: [],
            attachViewToDOM: [{ $ref: 'viewNode' }]
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true }
    ]

});
