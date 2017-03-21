var R = window.R;
var faker = window.faker;

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

function sortByPopularity(activities) {
  var diff = function(a, b) { return b.adventurerCount - a.adventurerCount; };
  return R.sort(diff, activities);
}

window.sort = function(sortType, activities) {
  return sortByPopularity(activities);
};
