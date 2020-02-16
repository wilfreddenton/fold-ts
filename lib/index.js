"use strict";
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
        extract: function (b) { return b; },
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
        extract: function (x) { return Array.from(x.values()); },
    });
}; };
exports.nub = nub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQSxJQUFNLElBQUksR0FBRyxVQUFPLENBQWEsRUFBRSxFQUFlO0lBQ2hELE9BQUEsQ0FBQyxDQUFDLFVBQUMsRUFBMEI7WUFBeEIsY0FBSSxFQUFFLG9CQUFPLEVBQUUsb0JBQU87UUFBTyxPQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUFqQyxDQUFpQyxDQUFDO0FBQXBFLENBQW9FLENBQUE7QUE0QnJDLG9CQUFJO0FBMUJyQyxJQUFNLEVBQUUsR0FBRyxVQUFJLENBQUksSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUE7QUFFekIsSUFBTSxHQUFHLEdBQXlCLFVBQUMsR0FBRztJQUNwQyxPQUFBLEdBQUcsQ0FBQztRQUNGLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUs7UUFDckIsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7QUFKRixDQUlFLENBQUE7QUFtQndDLGtCQUFHO0FBakIvQyxJQUFNLEdBQUcsR0FBRyxVQUFJLENBQW9CLElBQXVCLE9BQUEsVUFBQyxHQUFHO0lBQzdELE9BQUEsR0FBRyxDQUFDO1FBQ0YsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVQsQ0FBUztRQUN6QixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDO0tBQ2xCLENBQUM7QUFKRixDQUlFLEVBTHVELENBS3ZELENBQUE7QUFZbUMsa0JBQUc7QUFWMUMsSUFBTSxHQUFHLEdBQUcsY0FBdUIsT0FBQSxVQUFDLEdBQUc7SUFDckMsT0FBQSxHQUFHLENBQVM7UUFDVixJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUE7WUFDdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLENBQUM7UUFDRCxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQUU7UUFDbEIsT0FBTyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBdEIsQ0FBc0I7S0FDdkMsQ0FBQztBQVBGLENBT0UsRUFSK0IsQ0FRL0IsQ0FBQTtBQUU2QyxrQkFBRyJ9