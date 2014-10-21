var _ = require('underscore');

if (!console.log) {
    console.log = _.bind(console.println, console);
}
