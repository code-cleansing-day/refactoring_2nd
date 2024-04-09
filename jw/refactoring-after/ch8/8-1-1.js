function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distance(p1, p2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function calcPace(totalTime, totalDistance) {
  return totalTime / 60 / totalDistance;
}

export function trackSummary(points) {
  // const totalTime = calculateTime();
  const totalTime = 10000;
  const totalDistance = calculateDistance(points);
  const pace = calcPace(totalTime, totalDistance);

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };

  // function calculateTime() {
  //   return 10000;
  // }
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);

class Point {
  #lat;
  #lon;

  get lat() {
    return this.#lat;
  }

  get lon() {
    return this.#lon;
  }

  constructor(lat, lon) {
    this.#lat = lat;
    this.#lon = lon;
  }
}
class TrackSummary {
  #points = [];

  get time() {
    return 10000;
  }

  get distance() {
    return this.#calculateDistance();
  }

  get pace() {
    return this.time / 60 / this.distance;
  }

  constructor(points) {
    this.#points = points;
  }

  #getDistance(p1, p2) {
    // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // in miles
    const dLat = this.#getRadians(p2.lat) - this.#getRadians(p1.lat);
    const dLon = this.#getRadians(p2.lon) - this.#getRadians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(this.#getRadians(p2.lat)) *
        Math.cos(this.#getRadians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }

  #calculateDistance() {
    const points = this.#points;
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += this.#getDistance(points[i - 1], points[i]);
    }
    return result;
  }

  #getRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  summary() {
    return {
      time: this.time,
      distance: this.distance,
      pace: this.pace,
    };
  }
}

const summary2 = new TrackSummary([
  new Point(40.73061, -73.935242),
  new Point(35.652832, 139.839478),
]);

console.log(summary2.summary());
