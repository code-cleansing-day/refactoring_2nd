"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionalPlay = exports.ComedyPlay = exports.TragedyPlay = void 0;
var TragedyPlay = /** @class */ (function () {
    function TragedyPlay(data) {
        this.name = data.name;
        this.type = data.type;
    }
    TragedyPlay.prototype.calculateAmount = function (performance) {
        var extraAmount = this.checkIsAudienceMoreThan(performance)
            ? 1000 * (performance.audience - 30)
            : 0;
        return TragedyPlay.BASE_AMOUNT + extraAmount;
    };
    TragedyPlay.prototype.checkIsAudienceMoreThan = function (performance) {
        return performance.audience > 30;
    };
    TragedyPlay.BASE_AMOUNT = 40000;
    return TragedyPlay;
}());
exports.TragedyPlay = TragedyPlay;
var ComedyPlay = /** @class */ (function () {
    function ComedyPlay(data) {
        this.name = data.name;
        this.type = data.type;
    }
    ComedyPlay.prototype.calculateAmount = function (performance) {
        var extraAmountByAudience = this.checkIsAudienceMoreThan(performance)
            ? 10000 + 500 * (performance.audience - 20)
            : 0;
        return (ComedyPlay.BASE_AMOUNT +
            extraAmountByAudience +
            300 * performance.audience);
    };
    ComedyPlay.prototype.checkIsAudienceMoreThan = function (performance) {
        return performance.audience > 20;
    };
    ComedyPlay.BASE_AMOUNT = 30000;
    return ComedyPlay;
}());
exports.ComedyPlay = ComedyPlay;
var ExceptionalPlay = /** @class */ (function () {
    function ExceptionalPlay(data) {
        this.name = data.name;
        this.type = data.type;
    }
    ExceptionalPlay.prototype.calculateAmount = function (performance) {
        throw new Error("\uC54C \uC218 \uC5C6\uB294 \uC7A5\uB974: ".concat(this.type));
    };
    return ExceptionalPlay;
}());
exports.ExceptionalPlay = ExceptionalPlay;
