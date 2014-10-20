var Aurebesh = require('./factory'),
    doc = event.target,
    _ = require('underscore');

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
                        x: 26.5,
                        y: 11.877,
                        width: 156.5,
                        height: 15
                    },
                    career: {
                        x: 26.5,
                        y: 27.877,
                        width: 156.5,
                        height: 15
                    },
                    gender: {
                        x: 26.5,
                        y: 43.877,
                        width: 64,
                        height: 15
                    },
                    age: {
                        x: 113.588,
                        y: 43.877,
                        width: 69,
                        height: 15
                    },
                    height: {
                        x: 26.5,
                        y: 59.877,
                        width: 64,
                        height: 15
                    },
                    build: {
                        x: 115.588,
                        y: 59.877,
                        width: 67,
                        height: 15
                    },
                    hair: {
                        x: 20.5,
                        y: 75.877,
                        width: 70,
                        height: 15
                    },
                    eyes: {
                        x: 113.588,
                        y: 75.877,
                        width: 69,
                        height: 15
                    },
                    motivation1: {
                        x: 37.5,
                        y: 91.877,
                        width: 145,
                        height: 15
                    },
                    motivation2: {
                        x: 4,
                        y: 107.877,
                        width: 180,
                        height: 15
                    }
                }),
                Aurebesh.component({
                    name: 'obliduty',
                    x: 411.334,
                    y: 459,
                    children: _.
                        map([
                            Aurebesh.dutybox(),
                            Aurebesh.dutybox(),
                            Aurebesh.dutybox()
                        ], function (b, i) {
                            b.y = i * 16;
                            return b;
                        })
                }),
                Aurebesh.component({
                    name: 'morality',
                    x: 411.334,
                    y: 517.782,
                    children: [
                        Aurebesh.text({
                            name: 'current',
                            x: 4,
                            y: 9.5,
                            width: 30,
                            height: 18,
                            alignment: 'center',
                            size: 10
                        }),
                        Aurebesh.text({
                            name: 'strength',
                            x: 50,
                            y: 0,
                            width: 101,
                            height: 15,
                            alignment: 'right'
                        }),
                        Aurebesh.text({
                            name: 'weakness',
                            x: 50,
                            y: 16,
                            width: 101,
                            height: 15,
                            alignment: 'right'
                        }),
                        Aurebesh.text({
                            name: 'conflict',
                            x: 39.5,
                            y: 29,
                            width: 142,
                            height: 16,
                            size: 10
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'characteristics',
                    x: 17.972,
                    y: 75.25,
                    children: [
                        Aurebesh.charbox({ name: 'br' }),
                        Aurebesh.charbox({ name: 'ag' }),
                        Aurebesh.charbox({ name: 'int' }),
                        Aurebesh.charbox({ name: 'cun' }),
                        Aurebesh.charbox({ name: 'wil' }),
                        Aurebesh.charbox({ name: 'pr' })
                    ].
                    map(function (b, i) {
                        b.x = (i * 64.2) + 18;
                        return b;
                    })
                }),
                Aurebesh.skills({
                    x: 18.18,
                    y: 128.013
                }),
                Aurebesh.abilities({
                    x: 18.099,
                    y: 439.998,
                    count: 10
                }),
                Aurebesh.component({
                    name: 'soak',
                    x: 411.334,
                    y: 586.4,
                    children: [
                        Aurebesh.text({
                            name: 'value',
                            x: 10.3,
                            y: 18.3,
                            width: 30,
                            height: 18,
                            size: 13,
                            font: font.HelvB,
                            alignment: 'center'
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'defense',
                    x: 411.334,
                    y: 630.582,
                    children: [
                        Aurebesh.text({
                            name: 'melee',
                            x: 2,
                            y: 18.3,
                            width: 25.5,
                            height: 18,
                            size: 13,
                            font: font.HelvB,
                            alignment: 'center'
                        }),
                        Aurebesh.text({
                            name: 'range',
                            x: 33,
                            y: 18.3,
                            width: 30,
                            height: 18,
                            size: 13,
                            font: font.HelvB,
                            alignment: 'center'
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'wounds',
                    x: 481.334,
                    y: 586.4,
                    children: [
                        Aurebesh.text({
                            name: 'threshold',
                            x: 4,
                            y: 18.3,
                            width: 30,
                            height: 18,
                            size: 13,
                            font: font.HelvB,
                            alignment: 'center'
                        }),
                        Aurebesh.text({
                            name: 'current',
                            x: 48.15,
                            y: 18.3,
                            width: 62,
                            height: 18,
                            size: 13,
                            alignment: 'center'
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'strain',
                    x: 481.334,
                    y: 630.582,
                    children: [
                        Aurebesh.text({
                            name: 'threshold',
                            x: 4,
                            y: 18.3,
                            width: 30,
                            height: 18,
                            size: 13,
                            font: font.HelvB,
                            alignment: 'center'
                        }),
                        Aurebesh.text({
                            name: 'current',
                            x: 48.15,
                            y: 18.3,
                            width: 62,
                            height: 18,
                            size: 13,
                            alignment: 'center'
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'criticals',
                    x: 410.25,
                    y: 689.448,
                    children: _(5).
                        times(Aurebesh.critline.bind(Aurebesh)).
                        map(function (b, i) { b.y = i * 16; return b; })
                })
            ]
        ]
    });
