"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fold = function (f, fa) {
    return f(function (_a) {
        var step = _a.step, initial = _a.initial, extract = _a.extract;
        return extract(fa.reduce(step, initial));
    });
};
exports.fold = fold;
var id = function (b) { return b; };
var sum = function (run) {
    return run({
        step: function (x, a) { return x + a; },
        initial: 0,
        extract: id,
    });
};
exports.sum = sum;
var all = function (p) { return function (run) {
    return run({
        step: function (x, a) { return x && p(a); },
        initial: true,
        extract: id,
    });
}; };
exports.all = all;
var nub = function () { return function (run) {
    return run({
        step: function (x, a) { return x.add(a); },
        initial: new Set(),
        extract: function (x) { return __spread(x); },
    });
}; };
exports.nub = nub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sSUFBSSxHQUFHLFVBQU8sQ0FBYSxFQUFFLEVBQWU7SUFDaEQsT0FBQSxDQUFDLENBQUMsVUFBQyxFQUEwQjtZQUF4QixjQUFJLEVBQUUsb0JBQU8sRUFBRSxvQkFBTztRQUFPLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQWpDLENBQWlDLENBQUM7QUFBcEUsQ0FBb0UsQ0FBQTtBQXlCckMsb0JBQUk7QUF2QnJDLElBQU0sRUFBRSxHQUFHLFVBQUksQ0FBSSxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQTtBQUV6QixJQUFNLEdBQUcsR0FBeUIsVUFBQyxHQUFHO0lBQ3BDLE9BQUEsR0FBRyxDQUFDO1FBQ0YsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSztRQUNyQixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztBQUpGLENBSUUsQ0FBQTtBQWdCd0Msa0JBQUc7QUFkL0MsSUFBTSxHQUFHLEdBQUcsVUFBSSxDQUFvQixJQUF1QixPQUFBLFVBQUMsR0FBRztJQUM3RCxPQUFBLEdBQUcsQ0FBQztRQUNGLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVM7UUFDekIsT0FBTyxFQUFFLElBQUk7UUFDYixPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7QUFKRixDQUlFLEVBTHVELENBS3ZELENBQUE7QUFTbUMsa0JBQUc7QUFQMUMsSUFBTSxHQUFHLEdBQUcsY0FBdUIsT0FBQSxVQUFDLEdBQUc7SUFDckMsT0FBQSxHQUFHLENBQUM7UUFDRixJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRO1FBQ3hCLE9BQU8sRUFBRSxJQUFJLEdBQUcsRUFBSztRQUNyQixPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssZ0JBQUksQ0FBQyxHQUFMLENBQU07S0FDdkIsQ0FBQztBQUpGLENBSUUsRUFMK0IsQ0FLL0IsQ0FBQTtBQUU2QyxrQkFBRyJ9