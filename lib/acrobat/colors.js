
module.exports = {
    rgb: function (r, g, b) {
        return [
            'RGB',
            r > 1 ? r / 255 : r,
            g > 1 ? g / 255 : g,
            b > 1 ? b / 255 : b
        ];
    },

    cmyk: function (c, m, y, k) {
        return [
            'CMYK',
            c > 1 ? c / 100 : c,
            m > 1 ? m / 100 : m,
            y > 1 ? y / 100 : y,
            k > 1 ? k / 100 : k
        ];
    }
};
