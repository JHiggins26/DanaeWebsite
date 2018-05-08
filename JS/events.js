var calApp;
calApp = angular.module('calApp', ['ngAnimate'])
calApp.controller('calCtrl',  function($scope, $sce) {
  
  $scope.eventsVisible = 1; // How many events should be shown?
  
  $scope.events = [
    {
      title    : "Book Signing Event @ Nia Rae Salon",
      month    : "Sep",
      day      : "01",
      year     : "2018",
      time     : "02:30 PM",
      location : "4975 Stone Mountain Hwy, 30047 Lilburn",
    }
    /*,{
      title    : "Book Signing Event @ Nia Rae Salon",
      month    : "Jan",
      day      : "01",
      time     : "12:30 AM",
      location : "4975 Stone Mountain Hwy, 30047 Lilburn",
    },
    {
      title    : "Book Signing Event @ Nia Rae Salon",
      month    : "Jan",
      day      : "01",
      time     : "12:30 AM",
      location : "4975 Stone Mountain Hwy, 30047 Lilburn",
    },*/
   /* {
      title    : "Book Signing Event @ Nia Rae Salon",
      month    : "Jan",
      day      : "01",
      time     : "12:30 AM",
      location : "4975 Stone Mountain Hwy, 30047 Lilburn",
    },
    {
      title    : "Book Signing Event @ Nia Rae Salon",
      month    : "Jan",
      day      : "01",
      time     : "12:30 AM",
      location : "4975 Stone Mountain Hwy, 30047 Lilburn",
    }*/
  ];
  
  $scope.getMap = function(event){
    // Creates a Google Map URL
    return "https://maps.google.com/?q=" + event.location;
  };
    
 $scope.getEvents = function(){
  // Gets x number of events , using scope.eventsVisible 
  // to determine how many events to show
   var events = [];
   for(x = 0; x<$scope.eventsVisible; x++){
     events.push($scope.events[x]);
   }
   return events;
 } 
 
 $scope.hiddenEvents = function(){
   // Calculates how many events are hidden
   var remaining;
   if($scope.events.length - $scope.eventsVisible > 0){
     remaining = $scope.events.length - $scope.eventsVisible;
   } else{
     remaining = 0;
   }
   
   return remaining;
 }
 
 $scope.showHidden = function(){
   // Show hidden events
   $scope.eventsVisible = $scope.events.length;
 }
 $scope.hideEvents = function(){
   // Hide events
   $scope.eventsVisible = 3;
 } 
 
  
});


