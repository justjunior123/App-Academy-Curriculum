console.log("Hello from the JavaScript console!");

// Your AJAX request here
// The purpose of Ajax is to be able to make requests through the browser
// and retrieve information without having to refresh a webpage. Making
// overall requests less expensive and more responsive.

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather' +
  	'?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b',
  type: 'GET',
  success: function(widgetData){
    console.log('Here are the parameters for the feched widget data.');
    console.log(widgetData);
  },

});

console.log("The Ajax request worked!");
// Add another console log here, outside your AJAX request
