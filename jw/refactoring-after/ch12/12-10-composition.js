// 위임 사용
class Printer {
  #printHeader;

  constructor(printHeader) {
    this.#printHeader = printHeader;
  }

  print() {
    this.#printHeader
      ? this.#printHeader.print()
      : console.log("기본적인 출력");
  }
}

class RedPrinterHeader {
  print() {
    console.log("빨간색으로 출력");
  }
}

class BlackPrinterHeader {
  print() {
    console.log("검정색으로 출력");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];

printers.forEach((p) => p.print());
