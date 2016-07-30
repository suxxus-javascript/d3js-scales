'use strict';

var test = require('tape');
var main = require('scripts/continuous-scales');

test('continuous: scaleLinear', function(t) {

    var domain = [10, 130],
        range = [0, 960],
        scaleLinear = main.scaleLinear(domain, range),
        actual = scaleLinear(20),
        expect = 80;
    t.deepEqual(actual, expect, 'position enconding: 80');

    domain = [0, 100];
    range = ['red', 'green'];
    scaleLinear = main.scaleLinear(domain, range);
    actual = scaleLinear(20);
    expect = 'rgb(204, 26, 0)';
    t.equal(actual, expect, 'color enconding: rgb(204, 26, 0)');

    domain = [0, 100];
    range = [0, 50];
    scaleLinear = main.scaleLinear(domain, range);
    actual = scaleLinear.invert(12.5);
    expect = 25;
    t.equal(actual, expect, 'Invert: corresponding value from the domain === 25');

    domain = [10, 100];
    range = [0, 200];
    scaleLinear = main.scaleLinear(domain, range).clamp(true);
    actual = scaleLinear(300);
    expect = 200;
    t.equal(actual, expect, 'Clamped: the return value of the scale is always within the scale’s range');

    domain = [10, 100];
    range = [0, 50];
    scaleLinear = main.scaleLinear(domain, range);
    actual = scaleLinear.ticks();
    expect = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    t.deepEqual(actual, expect, 'approximately count representative values from the scale');

    domain = [0, 1];
    range = [0, 1];
    scaleLinear = main.scaleLinear(domain, range);
    actual = scaleLinear.ticks(10).map(scaleLinear.tickFormat(10, '%'));
    expect = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];
    t.deepEqual(actual, expect, 'tick format');

    t.end();
});
