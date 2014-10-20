var Form = require('../acrobat/form'),
    _ = require('underscore'),
    colors = require('../acrobat/colors'),
    abilityId = 0,
    customSkillId = 0,
    dutyBoxId = 0;

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
            name: 'dutybox' + dutyBoxId++,
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
            name: 'ability' + abilityId++,
            children: [
                this.text({
                    name: 'description',
                    x: 0,
                    y: y,
                    width: 277.228,
                    height: 15,
                    rich: true
                }),
                this.text({
                    name: 'activation',
                    x: 291.94,
                    y: y,
                    width: 52.346,
                    height: 15
                }),
                this.text({
                    name: 'rank',
                    x: 358.884,
                    y: y,
                    width: 18.35,
                    height: 15
                })
            ]
        });
    },

    abilities: function (s) {
        var ability = this.ability.bind(this);

        return this.component({
            name: 'abilities',
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
                    name: 'rank' + i,
                    x: startX + (stepX * i),
                    y: y + 4,
                    width: w,
                    height: h,
                    size: ht,
                    mark: mark,
                    color: colors.cmyk(0, 0, 0, 70)
                });
            }).
            concat(
                _(5).
                times(function (i) { 
                    return checkbox({
                        name: 'ability' + i,
                        x: startX + (stepX * i),
                        y: y,
                        width: w,
                        height: h,
                        size: ht,
                        mark: mark,
                        color: colors.cmyk(0, 0, 0, 70)
                    });
                })
            );
    },

    skill: function (s) {
        return this.component({
            name: s.id,
            children: [
                this.checkbox({
                    name: 'career',
                    x: 4,
                    y: 1,
                    width: 8,
                    height: 8,
                    size: 7,
                    color: colors.cmyk(0, 0, 0, 70),
                    mark: style.ch
                })
            ].
            concat(
                s.id && s.id.indexOf('custom') > -1 ?
                    this.text({
                        x: 13,
                        y: 0,
                        width: 108,
                        height: 13,
                        size: 8,
                        color: colors.cmyk(0, 0, 0, 70)
                    })
                    :
                    undefined
            ).
            concat(
                s.addStat ?
                    this.text({
                        x: 123,
                        y: 0,
                        width: 16,
                        height: 13,
                        size: 7,
                        alignment: 'center',
                        color: colors.cmyk(0, 0, 0, 70)
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
                concat([{ id: 'custom' + customSkillId++ }]).
                concat([{ id: 'custom' + customSkillId++ }]).
                map(makeSkill).
                map(space),
            combat = _.
                where(skills, { type: 'combat' }).
                concat([{ id: 'custom' + customSkillId++, addStat: true }]).
                map(makeSkill).
                map(space),
            custom = _(4).
                times(function () {
                    return { id: 'custom' + customSkillId++, addStat: true };
                }).
                map(makeSkill).
                map(space);

        return this.component({
            name: 'skills',
            x: s.x,
            y: s.y,
            children: [
                this.component({
                    name: 'general',
                    x: 0,
                    y: 20,
                    children: general
                }),
                this.component({
                    name: 'knowledge',
                    x: 197,
                    y: 20,
                    children: knowledge
                }),
                this.component({
                    name: 'combat',
                    x: 197,
                    y: 150,
                    children: combat
                }),
                this.component({
                    name: 'custom',
                    x: 197,
                    y: 254.5,
                    children: custom
                })
            ]
        });
    }
});
