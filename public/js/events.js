let calApp;
let photoUrlList = [];
let totalEvents;
calApp = angular.module('calApp', ['ngAnimate']);
calApp.controller('calCtrl', function ($scope) {

    $scope.eventsVisible = 5; // How many events should be shown?

    $scope.events = [
        {
            id: 1,
            title: "We Buy Black Convention",
            month: "Aug",
            day: "23-25",
            year: "2019",
            time: "9 AM - 5 PM",
            location: "2000 Convention Center Concourse, Atlanta, GA 30337",
        },
        {
            id: 2,
            title: "Essence Festival",
            month: "July",
            day: "26",
            year: "2019",
            time: "8 PM - 1 AM",
            location: "1554 Ralph David Abernathy, Atlanta, GA 30310",
        },
        {
            id: 3,
            title: "Book Signing Event @ Book Boutique Hilton Hotel",
            month: "July",
            day: "6-7",
            year: "2019",
            time: "12-4 PM",
            location: "2 Poydras St, New Orleans, LA 70130",
        },
        {
            id: 4,
            title: "Kid's Day Author Signing & Reading Sessions @ Book Boutique ATL",
            month: "Jun",
            day: "22",
            year: "2019",
            time: "2-6 PM",
            location: "7105 Stonecrest Pkwy Suite 103, Lithonia, GA 30038",
        },
        {
            id: 5,
            title: "Juneteenth Festival",
            month: "Jun",
            day: "14-16",
            year: "2019",
            time: "~~~ Jun 14th 2-9PM ~~~ Jun 15th 10AM-10PM ~~~ Jun 16th 10AM-10PM",
            times: "",
            location: "1 Backyard Way, Atlanta, GA 30313",
        },
        {
            id: 6,
            title: "Book Signing Event @ Book Boutique ATL",
            month: "Jun",
            day: "08",
            year: "2019",
            time: "12-6 PM",
            location: "7105 Stonecrest Pkwy Suite 103, Lithonia, GA 30038",
        },
        {
            id: 7,
            title: "Book Signing Event @ Book Boutique Bookstore",
            month: "Feb",
            day: "23",
            year: "2019",
            time: "2-4 PM",
            location: "2929 Turner Hill Rd Suite L1030, Stonecrest, GA 30038",
        },
        {
            id: 8,
            title: "Book Signing Event @ Black Dot Cultural Center Bookstore",
            month: "Feb",
            day: "02",
            year: "2019",
            time: "2-4 PM",
            location: "6984 Main St. Lithonia, GA 30058",
        },
        {
            id: 9,
            title: "Book Signing Event @ Book Boutique Bookstore",
            month: "Nov",
            day: "03",
            year: "2018",
            time: "12-2 PM",
            location: "2929 Turner Hill Rd Suite L1030, Stonecrest, GA 30038",
        }
    ];

    $scope.photos = [
        {
            id: 1,
            eventName: "We Buy Black Convention",
            photoList: [
                "/img/We Buy Black Convention.jpg",
            ]
        },
        {
            id: 2,
            eventName: "Essence Festival",
            photoList: [
                "/img/Essence Festival_1.jpg",
            ]
        },
        {
            id: 3,
            eventName: "Book Signing Event Hilton Hotel",
            photoList: [
                "/img/Book Boutique Hilton Hotel.jpg",
                "/img/Book Boutique Hilton Hotel_1.jpg",
                "/img/Book Boutique Hilton Hotel_2.jpg",
                "/img/Book Boutique Hilton Hotel_3.jpg",
                "/img/Book Boutique Hilton Hotel_4.jpg",
                "/img/Book Boutique Hilton Hotel_5.jpg",
                "/img/Book Boutique Hilton Hotel_6.jpg",
                "/img/Book Boutique Hilton Hotel_7.jpg",
                "/img/Book Boutique Hilton Hotel_8.jpg",
                "/img/Book Boutique Hilton Hotel_9.jpg",
            ]
        },
        {
            id: 4,
            eventName: "Kid's Day Author Signing & Reading Sessions",
            photoList: [
                "/img/Kid's Day Event.jpg",
            ]
        },
        {
            id: 5,
            eventName: "Juneteenth Festival",
            photoList: [
                "/img/Juneteenth Event_1.jpg",
                "/img/Juneteenth Event_2.jpg",
                "/img/Juneteenth Event_3.jpg",
                "/img/Juneteenth Event_4.jpg",
                "/img/Juneteenth Event_5.jpg",
                "/img/Juneteenth Event_6.jpg",
                "/img/Juneteenth Event_7.jpg",
                "/img/Juneteenth Event_8.jpg",
                "/img/Juneteenth Event_9.jpg",
                "/img/Juneteenth Event_10.jpg",
                "/img/Juneteenth Event_clip_1.mp4",
                "/img/Juneteenth Event_clip_2.mp4",
            ]
        },
        {
            id: 6,
            eventName: "Book Boutique ATL",
            photoList: [

            ]
        },
        {
            id: 7,
            eventName: "Book Boutique Bookstore",
            photoList: [
                "/img/Book Boutique Bookstore_1_1.jpg",
                "/img/Book Boutique Bookstore_1_2.jpg",
                "/img/Book Boutique Bookstore_1_3.jpg"
            ]
        },
        {
            id: 8,
            eventName: "Black Dot Cultural Center Bookstore",
            photoList: [
                "/img/Black Dot Cultural Center Bookstore_1.jpg",
                "/img/Black Dot Cultural Center Bookstore_2.jpg",
                "/img/Black Dot Cultural Center Bookstore_3.jpg",
                "/img/Black Dot Cultural Center Bookstore_4.png"

            ]
        },
        {
            id: 9,
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


    $scope.getPhotos = function (event) {

        photoUrlList = [];

        for (let i = 0; i < $scope.photos.length; i++) {
            let photo = $scope.photos[i];

            if (photo.id === event.id) {
                photoUrlList = photo.photoList;

                if (photoUrlList.length === 0) {
                    // Do nothing
                } else {
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
        $scope.eventsVisible = 5;
    };


});
