﻿var makerjs = require('makerjs');
var B = require('makerjs-rimbox');

function rimbox3d(width, height, holeRadius, rim, z) {
    this.models = {
        bottom: new B(width, height, holeRadius, rim, true),
        side: new B(width, height, holeRadius - 1, rim + 1),
        lid: new B(width, height, holeRadius, rim, true)
    };

    var d = width + 2 * holeRadius + 2 * rim + 2;

    this.models.lid.origin = [-d, 0];

    delete this.models.bottom.models.bolts;

    this.exporterOptions = {
        toOpenJsCad: {
            modelMap: {
                bottom: { extrusion: 1 },
                side: { extrusion: z },
                lid: { extrusion: rim }
            }
        }
    };

}

rimbox3d.metaParameters = [
    { title: "width", type: "range", min: 10, max: 500, value: 75 },
    { title: "height", type: "range", min: 10, max: 500, value: 50 },
    { title: "holeRadius", type: "range", min: 1, max: 20, value: 3 },
    { title: "rimThickness", type: "range", min: 1, max: 20, value: 2 },
    { title: "z depth", type: "range", min: 2, max: 200, value: 50 }
];

module.exports = rimbox3d;
