var Form = require('../acrobat/form'),
    _ = require('underscore');

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
                this.text(_.extend({ name: 'species' }, s.species))
            ]
        });
    },
    /**
     * Produces one ability item
     */
    ability: function (s) {
        var y = 11.527 + (s.y || 0);
        return this.component({
            name: 'ability' + s.index,
            children: [
                this.text({
                    name: 'description',
                    x: 0,
                    y: y,
                    width: 277.228,
                    height: 15,
                    multiline: true,
                    rich: true
                }),
                this.dropdown({
                    name: 'activation',
                    items: [
                        'Passive',
                        'Action',
                        'Maneuver',
                        'Incidental',
                        'Out of Turn'
                    ],
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
                return ability({ y: i * 16, index: i });
            })
        });
    }
});
