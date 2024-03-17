import fs from "node:fs";

const clientInputFileName = process.argv[2];

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
    return JSON.parse(rawData);
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

throwClientFileNameError(clientInputFileName);
checkIsFileExist(clientInputFileName);

const orders = readRawFileAsParsed(clientInputFileName);
console.log(orders, "orders");

// console.log(rawData, "rawData");
// if (process.argv.includes("-r")) {
//   console.log(orders.filter((order) => order.status === "ready").length);
// } else {
//   console.log(orders.length);
// }
