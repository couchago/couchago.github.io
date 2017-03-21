var R = window.R;
var addUserData = window.addUserData;

function addExploreData(activity) {
  activity.activity = 'explore';
  activity.adventureImage = 'slackline.jpg';
  return activity;
}

window.exploreData = [
  {
    description: '',
    location: {
      name: 'Jump Creek, ID',
      coordinates: [43.4768227, -116.9254222]
    }
  }
];

var decorate = R.compose(addUserData, addExploreData);
window.exploreData = R.map(decorate, window.exploreData);
