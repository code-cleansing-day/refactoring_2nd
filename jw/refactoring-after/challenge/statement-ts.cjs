"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    return Invoice;
}());
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
/**
 * **내가 생각하는 개선 포인트**
 * - totalAmount 흐름 파악이 어려움 + 불변성 보장 안됨
 * - statement(계산서) 함수가 너무 많은 일을 하고 있음
 * - for문을 map으로 변경
 *  - for문 안에서 하는 일: thisAmount, volumeCredits 계산
 *  - 각각 일을 나눠서 할 수 있지 않을까?
 * - play 다형성 개선
 * - perf 약어가 이해하기 어려움
 * - format 함수를 따로 빼서 사용
 */
var format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
}).format;
var Statement = /** @class */ (function () {
    function Statement(invoice, plays) {
        this.invoice = invoice;
        this.plays = plays;
    }
    Statement.prototype.getTotalAmount = function () {
        var totalAmount = 0;
        for (var _i = 0, _a = this.invoice.performances; _i < _a.length; _i++) {
            var performance_1 = _a[_i];
            var play = this.playFactory(this.plays[performance_1.playID]);
            var thisAmount = play.calculateAmount(performance_1);
            totalAmount += thisAmount;
        }
        return totalAmount;
    };
    Statement.prototype.getVolumeCredits = function () {
        var volumeCredits = 0;
        for (var _i = 0, _a = this.invoice.performances; _i < _a.length; _i++) {
            var performance_2 = _a[_i];
            var play = this.playFactory(this.plays[performance_2.playID]);
            // 포인트를 적립한다.
            volumeCredits += Math.max(performance_2.audience - 30, 0);
            // 희극 관객 5명마다 추가 포인트를 제공한다.
            if ("comedy" === play.type)
                volumeCredits += Math.floor(performance_2.audience / 5);
        }
        return volumeCredits;
    };
    // 청구 내역을 출력한다.
    Statement.prototype.getStatement = function () {
        var result = "\uCCAD\uAD6C \uB0B4\uC5ED (\uACE0\uAC1D\uBA85: ".concat(this.invoice.customer, ")\n");
        for (var _i = 0, _a = this.invoice.performances; _i < _a.length; _i++) {
            var performance_3 = _a[_i];
            var play = this.playFactory(this.plays[performance_3.playID]);
            var thisAmount = play.calculateAmount(performance_3);
            // 청구 내역을 출력한다.
            result += "  ".concat(play.name, ": ").concat(format(thisAmount / 100), " (").concat(performance_3.audience, "\uC11D)\n");
        }
        result += "\uCD1D\uC561: ".concat(format(this.getTotalAmount() / 100), "\n");
        result += "\uC801\uB9BD \uD3EC\uC778\uD2B8: ".concat(this.getVolumeCredits(), "\uC810\n");
        return result;
    };
    Statement.prototype.playFactory = function (play) {
        switch (play.type) {
            case "tragedy":
                return new TragedyPlay(play);
            case "comedy":
                return new ComedyPlay(play);
            default:
                throw new ExceptionalPlay(play);
        }
    };
    return Statement;
}());
// 사용예:
var playsJSON = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
};
var invoicesJSON = [
    {
        customer: "BigCo",
        performances: [
            {
                playID: "hamlet",
                audience: 55,
            },
            {
                playID: "as-like",
                audience: 35,
            },
            {
                playID: "othello",
                audience: 40,
            },
        ],
    },
];
var result = new Statement(invoicesJSON[0], playsJSON);
var expected = "청구 내역 (고객명: BigCo)\n" +
    "  Hamlet: $650.00 (55석)\n" +
    "  As You Like It: $580.00 (35석)\n" +
    "  Othello: $500.00 (40석)\n" +
    "총액: $1,730.00\n" +
    "적립 포인트: 47점\n";
console.log(result);
console.log(result.getStatement() === expected);
