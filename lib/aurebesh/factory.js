var Form = require('../acrobat/form'),
    _ = require('underscore'),
    abilityId = 0,
    customSkillId = 0,
    dutyBoxId = 0,
    critLineId = 0;

_.extend(exports, require('../base/factory'), {
    /**
     * Format a document form
     * @param {external:Acrobat.Doc} doc
     * @param {Object} spec
     * @param {Array<Array<Object>>} spec.pages
     */
    format: function (doc, spec) {
        spec.name = 'aurebesh';
        return Form.create(doc, spec);
    },
    /**
     * format the description area
     */
    description: function (s) {
        return this.component({
            name: 'description',
            x: s.x,
            y: s.y,
            children: [
                this.text(_.extend({
                    name: 'species',
                    defaultValue: 'Human'
                }, s.species || {})),
                this.text(_.extend({ name: 'career' }, s.career || {})),
                this.text(_.extend({ name: 'gender' }, s.gender || {})),
                this.text(_.extend({ name: 'age' }, s.age || {} )),
                this.text(_.extend({ name: 'height' }, s.height || {} )),
                this.text(_.extend({ name: 'build' }, s.build || {})),
                this.text(_.extend({ name: 'hair' }, s.hair || {})),
                this.text(_.extend({ name: 'eyes' }, s.eyes || {})),
                this.text(_.extend({ name: 'motivation1', }, s.motivation1 || {})),
                this.text(_.extend({ name: 'motivation2', }, s.motivation2 || {}))
            ]
        });
    },

    charbox: function (s) {
        return this.text(_.extend({
            width: 22,
            height: 18,
            size: 18,
            font: font.HelvB,
            alignment: 'center',
            defaultValue: 2
        }, s));
    },

    dutybox: function (s) {
        return this.component({
            name: 'od' + dutyBoxId++,
            x: (s && s.x) || 0,
            y: (s && s.y) || 0,
            children: [
                this.text({
                    name: 'description',
                    x: 0,
                    y: 0,
                    width: 134,
                    height: 15
                }),
                this.text({
                    name: 'size',
                    x: 148.75,
                    y: 0,
                    width: 36,
                    height: 15
                })
            ]
        });
    },
    /**
     * Produces one ability item
     */
    ability: function (s) {
        var y = 11.527 + (s.y || 0);
        return this.component({
            name: 'ab' + abilityId++,
            children: [
                this.text({
                    name: 'desc',
                    x: 0,
                    y: y,
                    width: 277.228,
                    height: 15,
                    rich: true
                }),
                this.text({
                    name: 'act',
                    x: 291.94,
                    y: y,
                    width: 52.346,
                    height: 15
                }),
                this.text({
                    name: 'rnk',
                    x: 358.884,
                    y: y,
                    width: 20,
                    height: 15,
                    alignment: 'center'
                })
            ]
        });
    },

    abilities: function (s) {
        var ability = this.ability.bind(this);

        return this.component({
            name: 'abils',
            x: s.x,
            y: s.y,
            children: _.times(s.count, function (i) {
                return ability({ y: i * 16 });
            })
        });
    },

    skillpool: function () {
        var checkbox = this.checkbox.bind(this),
            startX = 142,
            stepX = 8.25,
            y = 1.4,
            w = 9.36,
            h = 6.48,
            ht = 9,
            mark = style.sq;

        return _(5).
            times(function (i) {
                return checkbox({
                    name: 'rnk' + i,
                    x: startX + (stepX * i),
                    y: y + 4,
                    width: w,
                    height: h,
                    size: ht,
                    mark: mark
                });
            }).
            concat(
                _(5).
                times(function (i) { 
                    return checkbox({
                        name: 'abil' + i,
                        x: startX + (stepX * i),
                        y: y,
                        width: w,
                        height: h,
                        size: ht,
                        mark: mark
                    });
                })
            );
    },

    skill: function (s) {
        return this.component({
            name: s.id,
            children: [
                this.checkbox({
                    name: 'car',
                    x: 3.25,
                    y: 2.75,
                    width: 8,
                    height: 8,
                    size: 7,
                    mark: style.ci
                })
            ].
            concat(
                s.id && s.id.indexOf('cust') > -1 ?
                    this.text({
                        name: 'name',
                        x: 13,
                        y: 0,
                        width: 108,
                        height: 12
                    })
                    :
                    undefined
            ).
            concat(
                s.addStat ?
                    this.text({
                        name: 'char',
                        x: 123,
                        y: 0,
                        width: 16,
                        height: 12,
                        size: 7,
                        alignment: 'center'
                    })
                    :
                    undefined
            ).
            concat(this.skillpool()).
            filter(Boolean)
        });
    },

    skills: function (s) {
        var skills = require('../base/skills'),
            makeSkill = this.skill.bind(this),
            space = function (o, i) { o.y = i * 13; return o; },
            general = _.
                where(skills, { type: 'general' }).
                map(makeSkill).
                map(space),
            knowledge = _.
                where(skills, { type: 'knowledge' }).
                concat([{ id: 'cust' + customSkillId++ }]).
                concat([{ id: 'cust' + customSkillId++ }]).
                map(makeSkill).
                map(space),
            combat = _.
                where(skills, { type: 'combat' }).
                concat([{ id: 'cust' + customSkillId++, addStat: true }]).
                map(makeSkill).
                map(space),
            custom = _(4).
                times(function () {
                    return { id: 'cust' + customSkillId++, addStat: true };
                }).
                map(makeSkill).
                map(space);

        return this.component({
            name: 'skills',
            x: s.x,
            y: s.y,
            children: [
                this.component({
                    name: 'gen',
                    x: 0,
                    y: 20,
                    children: general
                }),
                this.component({
                    name: 'know',
                    x: 196.75,
                    y: 19.75,
                    children: knowledge
                }),
                this.component({
                    name: 'com',
                    x: 196.75,
                    y: 150,
                    children: combat
                }),
                this.component({
                    name: 'oth',
                    x: 196.75,
                    y: 254,
                    children: custom
                })
            ]
        });
    },

    weapbox: function (s) {
        var cbNames = ['min', 'maj', 'des'],
            cbOpts = {
                x: -1,
                y: 0,
                width: 7.92,
                height: 10.8,
                size: 9,
                mark: style.cr
            };

        return this.component(_.extend({
            name: 'weapon',
            x: 0,
            y: 0,
            children: [
                this.text({
                    name: 'name',
                    x: 19.5,
                    y: 0,
                    width: 115.5,
                    height: 15
                }),
                this.text({
                    name: 'skill',
                    x: 154.5,
                    y: 0,
                    width: 58.7,
                    height: 15
                }),
                this.text({
                    name: 'dam',
                    x: 225,
                    y: 0,
                    width: 15,
                    height: 15,
                    alignment: 'center'
                }),
                this.text({
                    name: 'crit',
                    x: 248,
                    y: 0,
                    width: 15,
                    height: 15,
                    alignment: 'center'
                }),
                this.text({
                    name: 'rng',
                    x: 280.6,
                    y: 0,
                    width: 51.4,
                    height: 15
                }),
                this.text({
                    name: 'enc',
                    x: 341,
                    y: 0,
                    width: 15,
                    height: 15,
                    alignment: 'center'
                }),
                this.text({
                    name: 'hp',
                    x: 364,
                    y: 0,
                    width: 15,
                    height: 15,
                    alignment: 'center'
                }),
                this.text({
                    name: 'spec',
                    x: 26.2,
                    y: 15,
                    width: 300,
                    height: 15
                }),
                this.component({
                    name: 'cond',
                    x: 356,
                    y: 16.5,
                    children: _(3).
                        times(function (i) {
                            var opts = _.extend({ name: cbNames[i] }, cbOpts);
                            opts.x += i * 8;
                            return opts;
                        }).
                        map(this.checkbox.bind(this))
                })
            ]
        }, s));
    },

    critline: function () {
        var checkbox = this.checkbox.bind(this),
            cbOpts = {
                x: -2.5,
                y: 2.75,
                width: 7.92,
                height: 10.8,
                size: 9,
                mark: style.di
            };

        return this.component({
            name: 'crit' + critLineId++,
            children: _(4).
                times(function (i) {
                    return checkbox(_.extend({ name: 'cbox' + i }, cbOpts));
                }).
                map(function (b, i) {
                    b.x = i * 8;
                    return b;
                }).
                concat([
                    this.text({
                        name: 'desc',
                        x: 36,
                        y: 0,
                        width: 144,
                        height: 15
                    })
                ])
        });
    },

    checkgrid: function (s) {
        var rows = s.cells,
            cw = 9,
            ch = 6.4,
            vpad = -1,
            hpad = -1,
            style = {
                width: 11,
                height: 8.4,
                color: s.color,
                mark: s.mark
            },
            checkbox = this.checkbox.bind(this);

        return this.component({
            name: s.name,
            x: s.x,
            y: s.y,
            children: _.
                chain(rows).
                map(function (cols, r) {
                    return _(cols).
                        times(function (c) {
                            var cb = checkbox(_.extend({
                                    name: 'cb-' + c + 'x' + r,
                                    x: (c * cw) + hpad,
                                    y: (r * ch) + vpad
                                }, style));

                            return cb;
                        });
                }).
                flatten().
                value()
        });
    },

    script: function (fn) {
        var src = fn.toString().split('\n').slice(1);
        src.pop();
        return src.join('\n');
    }
});
