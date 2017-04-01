var R = window.R;
var faker = window.faker;
var geolib = window.geolib;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function host() {
  return {
    firstName: faker.name.firstName(),
    image: faker.image.avatar()
  };
}

window.addUserData = function (activity) {
  var hosts = Math.round(getRandomArbitrary(1, 4));
  var capacity = hosts * Math.round(getRandomArbitrary(2, 5));
  var adventurers = Math.round(capacity * getRandomArbitrary(0.5, 1));

  activity.adventurerCount = adventurers;
  activity.adventurerCapacity = capacity;
  activity.hosts = [];

  for (var i = 0; i < hosts; i++) {
    activity.hosts.push(host());
  }

  return activity;
};

window.sortByPopularity = function(activities) {
  var diff = function(a, b) { return b.adventurerCount - a.adventurerCount; };
  return R.sort(diff, activities);
};

window.sortByProximity = function(coordinates, activities) {
  var diff = function(a, b) {
    const bDist = geolib.getDistance(
      {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      },
      {
        latitude: b.location.coordinates[0],
        longitude: b.location.coordinates[1]
      }
    );

    const aDist = geolib.getDistance(
      {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      },
      {
        latitude: a.location.coordinates[0],
        longitude: a.location.coordinates[1]
      }
    );

    return aDist - bDist;
  };

  return R.sort(diff, activities);
};
