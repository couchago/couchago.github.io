var R = window.R;
var addUserData = window.addUserData;

function addClimbingData(activity) {
  activity.activity = 'climb';
  activity.adventureImage = 'slackline.jpg';
  return activity;
}

window.climbingData = [
  {
    description: '',
    location: {
      name: 'Jump Creek, ID',
      coordinates: [43.4768227, -116.9254222]
    }
  }
];

var decorate = R.compose(addUserData, addClimbingData);
window.climbingData = R.map(decorate, window.climbingData);
