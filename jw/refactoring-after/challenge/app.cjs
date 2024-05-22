"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statement_ts_1 = require("./statement-ts");
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
var result = new statement_ts_1.Statement(invoicesJSON[0], playsJSON);
// test case 작성
var expected = "청구 내역 (고객명: BigCo)\n" +
    "  Hamlet: $650.00 (55석)\n" +
    "  As You Like It: $580.00 (35석)\n" +
    "  Othello: $500.00 (40석)\n" +
    "총액: $1,730.00\n" +
    "적립 포인트: 47점\n";
console.log(result);
console.log(result.getStatement() === expected);
