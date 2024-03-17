import fs from "node:fs";

function throwClientFileNameError(fileName) {
  if (!fileName) {
    throw new Error("파일 이름을 입력하세요");
  }
}

function checkIsFileExist(fileName) {
  const currentFileName = `./${fileName}.json`;
  if (!fs.existsSync(currentFileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }
}

function readRawFileAsParsed(fileName) {
  let file;
  const originModulePath = `./${fileName}.json`;

  try {
    file = fs.readFileSync(originModulePath, "utf8");
    return JSON.parse(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      // We're probably dealing with a virtualised file system where
      // `this.originModulePath` doesn't actually exist on disk.
      // We can't show a code frame, but there's no need to let this I/O
      // error shadow the original module resolution error.
      return null;
    }

    // I add for show the folder
    console.log("file: ", originModulePath);
    throw error;
  }
}

function getOrderSize(orders) {
  return process.argv.includes("-r")
    ? orders.filter((order) => order.status === "ready").length
    : orders.length;
}

function run(args) {
  const clientInputFileName = args[2];

  throwClientFileNameError(clientInputFileName);
  checkIsFileExist(clientInputFileName);
  const orders = readRawFileAsParsed(clientInputFileName);
  const length = getOrderSize(orders);

  console.log(length);
}

run(process.argv);
