var R = window.R;
var addUserData = window.addUserData;

function addHikeData(activity) {
  activity.activity = 'hike';
  activity.adventureImage = 'slackline.jpg';
  return activity;
}

window.hikeData = [
  {
    description: '',
    location: {
      name: 'Jump Creek, ID',
      coordinates: [43.4768227, -116.9254222]
    }
  }
];

var decorate = R.compose(addUserData, addHikeData);
window.hikeData = R.map(decorate, window.hikeData);
