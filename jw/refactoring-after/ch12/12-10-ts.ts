interface PrinterHeader {
  print(): void;
}

export class Printer {
  private printerHeader: PrinterHeader;
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }

  print() {
    this.printerHeader.print();
  }
}

class DefaultPrinterHeader implements PrinterHeader {
  print(): void {
    console.log("기본 프린터 출력");
  }
}

export class BlackPrinterHeader implements PrinterHeader {
  print() {
    console.log("흑백 프린터 출력");
  }
}

export class ColorPrinterHeader implements PrinterHeader {
  print() {
    console.log("칼라 프린터 출력");
  }
}

const printers = [
  new Printer(),
  new Printer(new BlackPrinterHeader()),
  new Printer(new ColorPrinterHeader()),
];
