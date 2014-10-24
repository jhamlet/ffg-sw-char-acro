var colors = require('../acrobat/colors'),
    _ = require('underscore'),
    defaults = {
        size: 8,
        font: font.Helv
    };

module.exports = function () {
    /*globals imperialTheme */
    switch (imperialTheme) {
    default:
    case 'eote':
    case 'eote-gray':
        return {
            nameField: {
                name: 'name',
                x: 144,
                y: 25.5,
                width: 262,
                height: 15,
                size: 11
            },
            defaults: _.defaults({
                color: imperialTheme === 'eote' ?
                    colors.cmyk(50, 65, 65, 25) :
                    colors.cmyk(0, 0, 0, 70)
            }, defaults)
        };
    case 'aor':
    case 'aor-gray':
        return {
            nameField: {
                name: 'name',
                x: 130,
                y: 22.5,
                width: 188,
                height: 15,
                size: 11
            },
            defaults: _.defaults({
                color: imperialTheme === 'aor' ?
                    colors.cmyk(15, 80, 65, 10) :
                    colors.cmyk(0, 0, 0, 70)
            }, defaults)
        };
    case 'fad':
    case 'fad-gray':
        return {
            nameField: {
                name: 'name',
                x: 98,
                y: 25,
                width: 282,
                height: 15,
                size: 11
            },
            defaults: _.defaults({
                color: imperialTheme === 'fad' ?
                    colors.cmyk(25, 60, 80, 10) :
                    colors.cmyk(0, 0, 0, 70)
            }, defaults)
        };
    }
};

