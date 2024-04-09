function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>location: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);
      outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write("");
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}

const renderDiv = (inner) => (decorator) => {
  const result = [];
  result.push("<div>");
  result.push(decorator(inner));
  result.push("</div>");
  result.join("\n");

  return result;
};

const decorateLowerCase = (inner) => {
  return inner.toLowerCase();
};

const decorateUpperCase = (inner) => {
  return inner.toUpperCase();
};

const html = renderDiv("Hello, World!");

console.log(html(decorateLowerCase));
console.log(html(decorateUpperCase));
