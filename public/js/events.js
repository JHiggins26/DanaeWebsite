
let calApp;
let photoUrlList = [];
let totalEvents;
calApp = angular.module('calApp', ['ngAnimate']);
calApp.controller('calCtrl', function ($scope) {

    $scope.eventsVisible = 3; // How many events should be shown?

    $scope.events = [
        {
            id: 1,
            title: "Book Signing Event @ Book Boutique Bookstore",
            month: "Feb",
            day: "23",
            year: "2019",
            time: "12-2 PM",
            location: "2929 Turner Hill Rd Suite L1030, 30038 Stonecrest, GA",
        },
        {
            id: 2,
            title: "Book Signing Event @ Black Dot Cultural Center Bookstore",
            month: "Feb",
            day: "02",
            year: "2019",
            time: "2-4 PM",
            location: "6984 Main St. Lithonia, GA 30058",
        },
        {
            id: 3,
            title: "Book Signing Event @ Book Boutique Bookstore",
            month: "Nov",
            day: "03",
            year: "2018",
            time: "12-2 PM",
            location: "2929 Turner Hill Rd Suite L1030, 30038 Stonecrest, GA",
        }
    ];

    $scope.photos = [
        {
            id: 1,
            eventName: "Little Black Girl Brunch",
            photoList: [

            ]
        },
        {
            id: 2,
            eventName: "Black Dot Cultural Center Bookstore",
            photoList: [
                "/img/Black Dot Cultural Center Bookstore_1.jpg",
                "/img/Black Dot Cultural Center Bookstore_2.jpg",
                "/img/Black Dot Cultural Center Bookstore_3.jpg",
                "/img/Black Dot Cultural Center Bookstore_4.png",

            ]
        },
        {
            id: 3,
            eventName: "Book Boutique Bookstore",
            photoList: [
                "/img/Book Boutique Bookstore_1.jpg",
                "/img/Book Boutique Bookstore_2.jpg",
                "/img/Book Boutique Bookstore_3.jpg",
                "/img/Book Boutique Bookstore_4.jpg"

            ]
        }
    ];

    $scope.getMap = function (event) {

        // Creates a Google Map URL
        return "https://maps.google.com/?q=" + event.location;
    };


    $scope.getPhotos = function(event) {

        photoUrlList = [];

        for(let i = 0; i < $scope.photos.length; i++) {
            let photo = $scope.photos[i];

            if( photo.id === event.id ) {
                photoUrlList = photo.photoList;

                if(photoUrlList.length === 0) {
                    // Do nothing
                }
                else {
                    // Call the event photo modal
                    openEventModal();
                }
            }
        }
    };


    $scope.getEvents = function () {
        // Gets x number of events , using scope.eventsVisible
        // to determine how many events to show
        let events = [];
        for (let x = 0; x < $scope.eventsVisible; x++) {
            events.push($scope.events[x]);
        }

        totalEvents = events;

        return events;
    };



    $scope.hiddenEvents = function () {
        // Calculates how many events are hidden
        let remaining;
        if ($scope.events.length - $scope.eventsVisible > 0) {
            remaining = $scope.events.length - $scope.eventsVisible;
        } else {
            remaining = 0;
        }

        return remaining;
    };

    $scope.showHidden = function () {
        // Show hidden events
        $scope.eventsVisible = $scope.events.length;
    };
    $scope.hideEvents = function () {
        // Hide events
        $scope.eventsVisible = 3;
    };


});