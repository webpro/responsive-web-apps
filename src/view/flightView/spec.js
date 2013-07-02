define(['view/flightView/main'], {

    flightView: {
        create: {
            module: 'view/flightView/main',
            args: { $ref: 'viewNode' }
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true }
    ]

});
