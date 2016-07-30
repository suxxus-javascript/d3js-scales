'use strict';
var d3Scale = require('d3-scale');

// -- CONTINUOUS SCALE --
// A continuous scale is not constructed directly;
// instead, try a linear, power, log, identity,
// time or sequential color scale.

module.exports = {
    scaleLinear: function(domain, range) {
        return d3Scale.scaleLinear()
            .domain(domain)
            .range(range);
    }
};
