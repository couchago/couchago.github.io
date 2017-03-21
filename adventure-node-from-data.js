var R = window.R;
var $ = window.$;

function activityTitle(data) {
  var style = "background-image: url(" + data.adventureImage + ");";
  return "<div class='activity-image' style='" + style + "'>" +
      '<div class="image-content">' +
        '<span class="activity-title">' + data.activity + '</span>' +
      '</div>' +
    '</div>';
}

function hostImages(hosts) {
  var images = R.map(function(image) {
      return '<image src="' + image + '"/>';
  }, R.pluck('image', hosts));

  return '<div class="host-images">' + R.join('', images) + '</div>';
}

function strong(innerHtml) {
  return '<strong>' + innerHtml + '</strong>';
}

function summary(data) {
  var hosts = R.pluck('firstName', data.hosts);
  hosts = R.map(function(name) { return strong(name); }, hosts);
  hosts[hosts.length - 1] = 'and ' + hosts[hosts.length - 1];

  return '<div class="summary">' +
    '<p>' + data.description + '</p>' +
    '<p class="hosts">Hosted by ' + R.join(', ', hosts) + '.</p>' +
  '</div>';
}

function deets(data) {
  return '<div class="deets">' +
      '<div class="left-side">' +
        '<i class="fa fa-map-marker"></i>' +
        '<p>' + data.location.name + '</p>' +
      '</div>' +
      '<div class="right-side">' +
        '<p>' + data.adventurerCount + ' / ' + data.adventurerCapacity + '</p>' +
      '</div>' +
    '</div>';
}

window.adventureNodeFromData = function(data) {
  return $(
    '<div class="adventure-widget">' +
    activityTitle(data) +
    hostImages(data.hosts) +
    summary(data) +
    deets(data) +
    '</div>'
  );
};
