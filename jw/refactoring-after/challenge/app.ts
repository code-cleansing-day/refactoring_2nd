import { StatementManager } from "./statement";

const BASE_URL = "http://localhost:5500";

const fetchInvoices = async () => {
  const response = await fetch(`${BASE_URL}/invoices`);
  return await response.json();
};

const fetchPlays = async () => {
  const response = await fetch(`${BASE_URL}/plays`);
  return await response.json();
};

const app = async () => {
  const [invoicesJSON, playsJSON] = await Promise.all([
    fetchInvoices(),
    fetchPlays(),
  ]);

  const result = new StatementManager(invoicesJSON[0], playsJSON);

  // test case 작성
  const expected =
    "청구 내역 (고객명: BigCo)\n" +
    "  Hamlet: $650.00 (55석)\n" +
    "  As You Like It: $580.00 (35석)\n" +
    "  Othello: $500.00 (40석)\n" +
    "총액: $1,730.00\n" +
    "적립 포인트: 47점\n";

  console.log(result.getStatement());
  console.log("같은지 여부:", result.getStatement() === expected);
};

app();
