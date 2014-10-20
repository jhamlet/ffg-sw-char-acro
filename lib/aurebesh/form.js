var Aurebesh = require('./factory'),
    doc = event.target;

Aurebesh.
    format(doc, {
        pages: [
            [
                Aurebesh.text({
                    name: 'name',
                    defaultValue: 'Character Name',
                    x: 126.833,
                    y: 22.749,
                    width: 194,
                    height: 15
                }),
                Aurebesh.description({
                    x: 411.334,
                    y: 323.926,
                    species: {
                        defaultValue: 'Human',
                        x: 26.5,
                        y: 11.877,
                        width: 156.5,
                        height: 15
                    },
                    career: {
                    },
                    gender: {
                    },
                    age: {
                    },
                    height: {
                    },
                    build: {
                    },
                    hair: {
                    },
                    eyes: {
                    },
                    motivation: {
                    }
                }),
                Aurebesh.abilities({
                    x: 18.099,
                    y: 439.998,
                    count: 10
                })
            ]
        ]
    });
