'use strict';

var test = require('tape');
var main = require('scripts/ordinal-scales');
var d3ScaleChromatic = require('d3-scale-chromatic');

var domain = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

test('scaleOrdinal', function(t) {

    var range = [10, 20, 30, 40, 50, 60, 70],
        scaleOrdinal = main.scaleOrdinal(domain, range),
        actual = scaleOrdinal('Wednesday'),
        expect = 40;

    t.equal(actual, expect);
    t.end();
});

test('Band Scales', function(t) {

    var range = [10, 110],
        scaleBand = main.scaleBand(domain, range),
        actual = scaleBand('Monday'),
        expect = 24.285714285714285;
    t.equal(actual, expect);

    scaleBand = main.scaleBandRangeRound(domain, range);
    actual = domain.map(scaleBand);
    expect = [11, 25, 39, 53, 67, 81, 95];
    t.deepEqual(actual, expect, 'rounded values');

    scaleBand = main.scaleBandRangeRoundPadding(domain, range, 0.5);
    actual = domain.map(scaleBand);
    expect = [18, 31, 44, 57, 70, 83, 96];
    t.deepEqual(actual, expect, 'rounded values, padding');

    t.end();
});

test('Category Scales', function(t) {
    var mDomain = ['a', 'b', 'c', 'd', 'c', 'd'],
        range = d3ScaleChromatic.schemeDark2,
        categoryScale = main.scaleOrdinal(mDomain, range),
        actual = mDomain.map(categoryScale),
        expect = [
            '#1b9e77',
            '#d95f02',
            '#7570b3',
            '#e7298a',
            '#7570b3',
            '#e7298a'
        ];

    t.deepEqual(actual, expect);
    t.end();
});
