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
        step: function (x, a) {
            if (x.has(a))
                return x;
            return x.add(a);
        },
        initial: new Set(),
        extract: function (x) { return __spread(x); },
    });
}; };
exports.nub = nub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sSUFBSSxHQUFHLFVBQU8sQ0FBYSxFQUFFLEVBQWU7SUFDaEQsT0FBQSxDQUFDLENBQUMsVUFBQyxFQUEwQjtZQUF4QixjQUFJLEVBQUUsb0JBQU8sRUFBRSxvQkFBTztRQUFPLE9BQUEsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQWpDLENBQWlDLENBQUM7QUFBcEUsQ0FBb0UsQ0FBQTtBQTRCckMsb0JBQUk7QUExQnJDLElBQU0sRUFBRSxHQUFHLFVBQUksQ0FBSSxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQTtBQUV6QixJQUFNLEdBQUcsR0FBeUIsVUFBQyxHQUFHO0lBQ3BDLE9BQUEsR0FBRyxDQUFDO1FBQ0YsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSztRQUNyQixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztBQUpGLENBSUUsQ0FBQTtBQW1Cd0Msa0JBQUc7QUFqQi9DLElBQU0sR0FBRyxHQUFHLFVBQUksQ0FBb0IsSUFBdUIsT0FBQSxVQUFDLEdBQUc7SUFDN0QsT0FBQSxHQUFHLENBQUM7UUFDRixJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTO1FBQ3pCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDO0FBSkYsQ0FJRSxFQUx1RCxDQUt2RCxDQUFBO0FBWW1DLGtCQUFHO0FBVjFDLElBQU0sR0FBRyxHQUFHLGNBQXVCLE9BQUEsVUFBQyxHQUFHO0lBQ3JDLE9BQUEsR0FBRyxDQUFDO1FBQ0YsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNqQixDQUFDO1FBQ0QsT0FBTyxFQUFFLElBQUksR0FBRyxFQUFLO1FBQ3JCLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxnQkFBSSxDQUFDLEdBQUwsQ0FBTTtLQUN2QixDQUFDO0FBUEYsQ0FPRSxFQVIrQixDQVEvQixDQUFBO0FBRTZDLGtCQUFHIn0=