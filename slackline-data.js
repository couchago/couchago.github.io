var faker = window.faker;
var R = window.R;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function host() {
  return {
    firstName: faker.name.firstName(),
    image: faker.image.avatar()
  };
}

function addSlacklineData(activity) {
  activity.activity = 'slackline';
  activity.adventureImage = 'slackline.jpg';
  return activity;
}

function addUserData(activity) {
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
}

window.slacklineData = [
  {
    description: '',
    location: {
      name: 'Jump Creek, ID',
      coordinates: [43.4768227, -116.9254222]
    }
  },
  {
    description: '',
    location: {
      name: 'Stoney Point, CA',
      coordinates: [34.2735, -118.6024]
    }
  },
  {
    description: '',
    location: {
      name: 'Big Bear Lake, CA',
      coordinates: [34.2439, -116.9114]
    }
  },
  {
    description: '',
    location: {
      name: 'Yosemite Valley, CA',
      coordinates: [37.7456, -119.5936]
    }
  },
  {
    description: '',
    location: {
      name: 'Joshua Tree National Park, CA',
      coordinates: [33.8734, -115.9010]
    }
  },
  {
    description: '',
    location: {
      name: 'Poudre Canyon, CO',
      coordinates: [40.69804, -105.62333]
    }
  },
  {
    description: '',
    location: {
      name: 'Estes Park, CO',
      coordinates: [40.3772, -105.5217]
    }
  },
  {
    description: 'over water at the boardwalk',
    location: {
      name: 'Austin, TX',
      coordinates: [30.2672, -97.7431]
    }
  },
  {
    description: 'Parque Zaragoza Recreation Center',
    location: {
      name: 'Austin, TX',
      coordinates: [30.2672, -97.7431]
    }
  },
  {
    description: 'Memorial Park',
    location: {
      name: 'El Paso, TX',
      coordinates: [31.7619, -106.4850]
    }
  },
  {
    description: '',
    location: {
      name: 'Hocking Hills, OH',
      coordinates: [39.4266, -82.5357]
    }
  },
  {
    description: 'Missouri State University campus',
    location: {
      name: 'Springfield, MO',
      coordinates: [37.2090, -93.2923]
    }
  },
  {
    description: '',
    location: {
      name: 'Linville Gorge, NC',
      coordinates: [35.9049, -81.8949]
    }
  },
  {
    description: 'local park',
    location: {
      name: 'Murphy, NC',
      coordinates: [35.0876, -84.0346]
    }
  },
  {
    description: '',
    location: {
      name: 'South Beach, FL',
      coordinates: [25.7826, -80.1341]
    }
  },
  {
    description: '',
    location: {
      name: 'The Flume Fall, NY',
      coordinates: [44.3664, -73.8401]
    }
  }
];

var decorate = R.compose(addUserData, addSlacklineData);
window.slacklineData = R.map(decorate, window.slacklineData);