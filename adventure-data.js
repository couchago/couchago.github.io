var R = window.R;

window.adventureData = {
  slackline: window.slacklineData,
  climb: window.climbingData,
  explore: window.exploreData,
  hike: window.hikeData,
  all: R.concat(
    R.concat(
      window.slacklineData,
      window.climbingData
    ),
    R.concat(
      window.exploreData,
      window.hikeData
    )
  )
};
