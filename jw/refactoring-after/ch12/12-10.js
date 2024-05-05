// 상속
class Printer {
  print() {
    console.log("기본적인 출력");
  }
}

class Network {
  send() {}
}

class RedPrinter extends Printer {
  print() {
    console.log("빨간색으로 출력");
  }
}

const printers = [new Printer(), new RedPrinter()];

printers.forEach((p) => p.print());
