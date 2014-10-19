var Sheet = require('./character-sheet'),
    doc = event.target;

Sheet.
    create(doc, {
        name: 'ffg-sw-charsheet-aurebesh',
        layout: [
            {
                Field: {
                    name: 'foo',
                    type: 'text',
                    page: 0,
                    rect: [4.25, 0, 5.25, 1/12],
                    value: 'FOO'
                }
            },
            {
            }
        ]
    });
