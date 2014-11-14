var Aurebesh = require('./factory'),
    doc = event.target,
    theme = require('./theme')(),
    _ = require('underscore'),
    adjust = require('../i18n/layout-adjust').bind('aurebesh');

// Set up our thematic defaults
_.extend(require('../base/text').prototype.defaults, theme.defaults);
_.extend(require('../base/check-box').prototype.defaults, theme.defaults);

Aurebesh.
    format(doc, {
        pages: [
            [
                Aurebesh.text(theme.nameField),
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
                    name: 'od',
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
                    name: 'moral',
                    x: 411.334,
                    y: 517.782,
                    children: [
                        Aurebesh.text({
                            name: 'c',
                            x: 4,
                            y: 9.5,
                            width: 30,
                            height: 18,
                            alignment: 'center',
                            size: 10
                        }),
                        Aurebesh.text(adjust.extend(['moral', 'str'], {
                            name: 'str',
                            x: 50,
                            y: 0,
                            width: 101,
                            height: 15,
                            alignment: 'right'
                        })),
                        Aurebesh.text({
                            name: 'weak',
                            x: 50,
                            y: 16,
                            width: 101,
                            height: 15,
                            alignment: 'right'
                        }),
                        Aurebesh.text({
                            name: 'conf',
                            x: 39.5,
                            y: 29,
                            width: 142,
                            height: 16,
                            size: 10
                        })
                    ]
                }),
                Aurebesh.component({
                    name: 'char',
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
                    name: 'weapons',
                    x: 18.099,
                    y: 641.78,
                    children: _(4).
                        times(function (i) {
                            return {
                                name: 'weap' + i,
                                x: 0,
                                y: i * 32
                            };
                        }).
                        map(Aurebesh.weapbox.bind(Aurebesh))
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
            ],
            [].
            concat(
                _(2).
                times(function (c) {
                    return Aurebesh.component({
                        name: 'gear' + c,
                        x: 18 + (c * 196.5),
                        y: 37,
                        children: _(16).
                            times(function (r) {
                                return Aurebesh.component({
                                    name: 'item-' + c + '-' + r,
                                    x: 0,
                                    y: r * 16,
                                    children: [
                                        Aurebesh.text({
                                            name: 'desc',
                                            x: 0,
                                            y: 0,
                                            width: 147,
                                            height: 15
                                        }),
                                        Aurebesh.text({
                                            name: 'enc',
                                            x: 159,
                                            y: 0,
                                            width: 23,
                                            height: 15,
                                            alignment: 'center'
                                        })
                                    ]
                                });
                            })
                    });
                })
            ).
            concat(
                Aurebesh.component({
                    name: 'armor',
                    x: 18,
                    y: 308,
                    children: [
                        Aurebesh.text(adjust.extend(['armor', 'desc'],{
                            name: 'desc',
                            x: 0,
                            y: 0,
                            width: 212,
                            height: 15
                        })),
                        Aurebesh.text(adjust.extend(['armor', 'def'], {
                            name: 'def',
                            x: 237.4,
                            y: 0,
                            width: 46,
                            height: 15,
                            alignment: 'center'
                        })),
                        Aurebesh.text(adjust.extend(['armor', 'soak'], {
                            name: 'soak',
                            x: 299.5,
                            y: 0,
                            width: 32,
                            height: 15,
                            alignment: 'center'
                        })),
                        Aurebesh.text({
                            name: 'enc',
                            x: 342,
                            y: 0,
                            width: 15,
                            height: 15,
                            alignment: 'center'
                        }),
                        Aurebesh.text({
                            name: 'hp',
                            x: 363,
                            y: 0,
                            width: 15.5,
                            height: 15,
                            alignment: 'center'
                        }),
                        Aurebesh.text(adjust.extend(['armor', 'spec'], {
                            name: 'spec',
                            x: 26.5,
                            y: 16,
                            width: 296,
                            height: 15
                        })),
                        (function () {
                        var cbNames = ['min', 'maj', 'des'],
                            cbOpts = {
                                x: -0.5,
                                y: 2,
                                width: 7.92,
                                height: 10.8,
                                size: 9,
                                mark: style.cr
                            };

                            return Aurebesh.component({
                                name: 'cond',
                                x: 355.5,
                                y: 16,
                                children: _(3).
                                    times(function (i) {
                                        var opts = _.extend({ name: cbNames[i] }, cbOpts);
                                        opts.x += i * 8;
                                        return opts;
                                    }).
                                    map(Aurebesh.checkbox.bind(Aurebesh))
                            });
                        }())
                    ]
                })
            ).
            concat(Aurebesh.text({
                name: 'credits',
                x: 24,
                y: 360,
                width: 169,
                height: 15
            })).
            concat(Aurebesh.text({
                name: 'enc-threshold',
                x: 258,
                y: 360,
                width: 40.8,
                height: 15,
                alignment: 'center'
            })).
            concat(Aurebesh.text({
                name: 'enc-current',
                x: 343,
                y: 360,
                width: 48,
                height: 15,
                alignment: 'center'
            })).
            concat(Aurebesh.abilities({
                x: 18,
                y: 405,
                count: 22 
            })).
            concat(Aurebesh.text({
                name: 'exp-total',
                x: 435,
                y: 41,
                width: 60,
                height: 15,
                alignment: 'center'
            })).
            concat(Aurebesh.text({
                name: 'exp-avail',
                x: 528,
                y: 41,
                width: 60,
                height: 15,
                alignment: 'right'
            })).
            concat(Aurebesh.component({
                name: 'specs',
                x: 411,
                y: 81.436,
                children: [0, 60.5, 60.3, 60.45, 60.25].
                    reduce(function (acc, cur, idx) {
                        acc.y += cur;
                        acc.items.push(Aurebesh.component({
                            name: 'spec' + idx,
                            x: 0,
                            y: acc.y,
                            children: [
                                Aurebesh.checkbox({
                                    name: 'car',
                                    x: 3.5,
                                    y: 7,
                                    width: 8,
                                    height: 8,
                                    size: 7,
                                    mark: style.ci
                                }),
                                Aurebesh.text({
                                    name: 'name',
                                    x: 7.5,
                                    y: 19,
                                    width: 136.45,
                                    height: 15,
                                    size: 9
                                }),
                                Aurebesh.text({
                                    name: 'sig',
                                    x: 13.28,
                                    y: 38,
                                    width: 130,
                                    height: 15,
                                    size: 9,
                                    alignment: 'right'
                                })
                            ].
                            concat(Aurebesh.checkgrid({
                                name: 'talgrid',
                                cells: [4, 4, 4, 4, 4],
                                x: 147,
                                y: 0,
                                mark: style.cr
                            })).
                            concat(Aurebesh.checkgrid({
                                name: 'sigrid',
                                cells: [1, 4, 4],
                                x: 147,
                                y: 35,
                                mark: style.cr
                            }))
                        }));
                        return acc;
                    }, { y: 0, items: [] }).
                    items
            })).
            concat(Aurebesh.component({
                name: 'powers',
                x: 411,
                y: 385.5,
                children: [0, 40, 40, 40, 40, 40].
                    reduce(function (acc, cur, idx) {
                        acc.y += cur;
                        acc.items.push(Aurebesh.component({
                            name: 'pow' + idx,
                            x: 0,
                            y: acc.y,
                            children: [
                                Aurebesh.text({
                                    name: 'name',
                                    x: 7.5,
                                    y: 17,
                                    width: 136.45,
                                    height: 15,
                                    size: 9
                                }),
                                Aurebesh.checkgrid({
                                    name: 'powgrid',
                                    cells: [1, 4, 4, 4, 4],
                                    x: 147,
                                    y: 0,
                                    mark: style.cr
                                })
                            ]
                        }));
                        return acc;
                    }, { y: 0, items: [] }).
                    items
            })).
            concat(Aurebesh.text({
                name: 'notes',
                x: 411,
                y: 638,
                width: 183,
                height: 133.2,
                size: 9,
                multiline: true
            }))
        ]
    });

_.extend(doc.info, { ModDate: new Date() });
doc.removeScript('aurebeshTheme');

