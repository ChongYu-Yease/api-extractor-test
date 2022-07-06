(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Index = {}));
})(this, (function (exports) { 'use strict';

    var test1 = function (name) {
        return name;
    };

    var test2 = function (name) {
        return name;
    };

    function test3(name) {
        return name + test1(name + "小明") + test2(name + "小红");
    }

    exports.test1 = test1;
    exports.test2 = test2;
    exports.test3 = test3;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
