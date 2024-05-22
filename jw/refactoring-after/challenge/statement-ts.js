"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
var Play_1 = require("./play/Play");
/**
 * **내가 생각하는 개선 포인트**
 * - [x] totalAmount 흐름 파악이 어려움 + 불변성 보장 안됨
 * - statement(계산서) 함수가 너무 많은 일을 하고 있음
 * - for문을 map으로 변경
 *  - for문 안에서 하는 일: thisAmount, volumeCredits 계산
 *  - 각각 일을 나눠서 할 수 있지 않을까?
 * - play 다형성 개선
 * - perf 약어가 이해하기 어려움
 * - format 함수를 따로 빼서 사용
 */
var Statement = /** @class */ (function () {
    function Statement(invoice, plays) {
        this.invoice = invoice;
        this.plays = plays;
    }
    Statement.prototype.getTotalAmount = function () {
        var _this = this;
        var amountList = this.invoice.performances.map(function (performance) {
            var play = _this.playFactory(_this.plays[performance.playID]);
            return play.calculateAmount(performance);
        });
        var totalAmount = amountList.reduce(function (prevTotalAmount, thisAmount) { return prevTotalAmount + thisAmount; }, 0);
        return totalAmount;
    };
    Statement.prototype.getVolumeCredits = function () {
        var _this = this;
        var volumeCredits = 0;
        var volumeCreditList = this.invoice.performances.map(function (performance) {
            var play = _this.playFactory(_this.plays[performance.playID]);
            if (play.type === "comedy") {
                return Math.floor(performance.audience / 5);
            }
            return Math.max(performance.audience - 30, 0);
        });
        for (var _i = 0, _a = this.invoice.performances; _i < _a.length; _i++) {
            var performance_1 = _a[_i];
            var play = this.playFactory(this.plays[performance_1.playID]);
            // 포인트를 적립한다.
            volumeCredits += Math.max(performance_1.audience - 30, 0);
            // 희극 관객 5명마다 추가 포인트를 제공한다.
            if ("comedy" === play.type)
                volumeCredits += Math.floor(performance_1.audience / 5);
        }
        return volumeCredits;
    };
    // 청구 내역을 출력한다.
    Statement.prototype.getStatement = function () {
        var result = "\uCCAD\uAD6C \uB0B4\uC5ED (\uACE0\uAC1D\uBA85: ".concat(this.invoice.customer, ")\n");
        for (var _i = 0, _a = this.invoice.performances; _i < _a.length; _i++) {
            var performance_2 = _a[_i];
            var play = this.playFactory(this.plays[performance_2.playID]);
            var thisAmount = play.calculateAmount(performance_2);
            // 청구 내역을 출력한다.
            result += "  ".concat(play.name, ": ").concat(this.format(thisAmount / 100), " (").concat(performance_2.audience, "\uC11D)\n");
        }
        result += "\uCD1D\uC561: ".concat(this.format(this.getTotalAmount() / 100), "\n");
        result += "\uC801\uB9BD \uD3EC\uC778\uD2B8: ".concat(this.getVolumeCredits(), "\uC810\n");
        return result;
    };
    Statement.prototype.playFactory = function (play) {
        switch (play.type) {
            case "tragedy":
                return new Play_1.TragedyPlay(play);
            case "comedy":
                return new Play_1.ComedyPlay(play);
            default:
                throw new Play_1.ExceptionalPlay(play);
        }
    };
    Object.defineProperty(Statement.prototype, "format", {
        get: function () {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
            }).format;
        },
        enumerable: false,
        configurable: true
    });
    return Statement;
}());
exports.Statement = Statement;
