export declare const configurations: {
    readonly hexagon: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 8;
            readonly height: 8;
            readonly flat: false;
            readonly spacing: 1.02;
        };
        readonly origin: {
            readonly x: 0;
            readonly y: 0;
        };
        readonly map: "hexagon";
        readonly mapProps: readonly [3];
    };
    readonly triangle: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 9;
            readonly height: 9;
            readonly flat: false;
            readonly spacing: 1.05;
        };
        readonly origin: {
            readonly x: -45;
            readonly y: -35;
        };
        readonly map: "triangle";
        readonly mapProps: readonly [5];
    };
    readonly parallelogram: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 7;
            readonly height: 7;
            readonly flat: true;
            readonly spacing: 1.05;
        };
        readonly origin: {
            readonly x: 0;
            readonly y: 0;
        };
        readonly map: "parallelogram";
        readonly mapProps: readonly [-2, 2, -2, 2];
    };
    readonly rectangle: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 6;
            readonly height: 6;
            readonly flat: false;
            readonly spacing: 1.02;
        };
        readonly origin: {
            readonly x: -45;
            readonly y: -40;
        };
        readonly map: "rectangle";
        readonly mapProps: readonly [10, 10];
    };
    readonly orientedRectangle: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 6;
            readonly height: 6;
            readonly flat: false;
            readonly spacing: 1.1;
        };
        readonly origin: {
            readonly x: -45;
            readonly y: -15;
        };
        readonly map: "orientedRectangle";
        readonly mapProps: readonly [7, 7];
    };
    readonly ring: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 6;
            readonly height: 6;
            readonly flat: false;
            readonly spacing: 1.1;
        };
        readonly origin: {
            readonly x: 0;
            readonly y: 0;
        };
        readonly map: "ring";
        readonly mapProps: readonly [{
            readonly q: 0;
            readonly r: 0;
            readonly s: 0;
        }, 3];
    };
    readonly spiral: {
        readonly width: 1000;
        readonly height: 800;
        readonly layout: {
            readonly width: 6;
            readonly height: 6;
            readonly flat: false;
            readonly spacing: 1.1;
        };
        readonly origin: {
            readonly x: 0;
            readonly y: 0;
        };
        readonly map: "spiral";
        readonly mapProps: readonly [{
            readonly q: 0;
            readonly r: 0;
            readonly s: 0;
        }, 3];
    };
};
//# sourceMappingURL=configurations.d.ts.map