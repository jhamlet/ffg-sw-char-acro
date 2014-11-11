/*globals app*/
var strings = require('../i18n/strings'),
    doc = app.activeDocument;
//------------------------------------------------------------------------------
// Characterisitcs
//------------------------------------------------------------------------------
(function () {
    var tmpl = doc.groupItems.getByName('characteristic-template'),
        text = strings.bind(['characteristics']),
        x = tmpl.width;

    ['brawn', 'agility', 'intellect', 'cunning', 'willpower', 'presence'].
        forEach(function (name, idx) {
            var dupe = idx === 0 ? tmpl : tmpl.duplicate(),
                title = dupe.textFrames.getByName('title'),
                titleBg = dupe.textFrames.getByName('title-bg'),
                subtitle = dupe.textFrames.getByName('subtitle');

            title.contents =
                titleBg.contents = text.get([name]).title;
            subtitle.contents = text.get([name]).subtitle;

            if (idx > 0) {
                dupe.translate(x, 0);
                x += dupe.width;
            }
        });
}());
