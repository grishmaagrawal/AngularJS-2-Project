"use strict";
eventsApp.controller('EditEventController',
function EditEventController($scope){
    $scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){
    window.alert('name' +" " +  event.name +" "+ 'saved!');
        }
};
$scope.cancleEdit = function(){
    window.location = "/EventDetails.html";
}
}
);