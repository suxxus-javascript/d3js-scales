'use strict';
var d3Scale = require('d3-scale');

// Unlike continuous scales, ordinal scales have a discrete
// domain and range. For example, an ordinal scale might map
// a set of named categories to a set of colors, or determine
// the horizontal positions of columns in a column chart.


module.exports = {

    scaleOrdinal: function(domain, range) {
        return d3Scale.scaleOrdinal()
            .domain(domain)
            .range(range);
    },

    scaleBand: function(domain, range) {
        return d3Scale.scaleBand()
            .domain(domain)
            .range(range);
    },

    scaleBandRangeRound: function(domain, range) {
        return d3Scale.scaleBand()
            .domain(domain)
            .rangeRound(range);
    },

    scaleBandRangeRoundPadding: function(domain, range, padding) {
        return d3Scale.scaleBand()
            .domain(domain)
            .rangeRound(range)
            .padding(padding);
    }

};
