'use strict';
eventsApp.controller('EventController',
function EventController($scope){
    $scope.sortorder = 'name';
  $scope.event = {
      name: 'AngularJS Just Start Learning',
      date: '31/10/2010',
      time: '10:20',
      price: 2000,
  
  location:{
      companyname: 'Company name is xcidify ',
      city : 'banglore',
      course: 'postalCode(560076)'
  },
  imageUrl: '/img/angularjs-logo.png',
  sessions:[
      {
          name: 'Directives Masterclass  ',
          creatorname: 'xyz',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'IN this session you will learn the ins and outs of directives!',
          upVoteCount:0
      },
      {
          name: 'Scopes for fun and profit ',
          creatorname: 'xyza',
          duration: '10 hr',
          level: 'introductory',
          abstract: 'IN this session you will learn the ins and outs of directives!!!!!!!!!!!!!!!!!',
          upVoteCount:0
      },
      {
          name: 'well Behaved Controllers',
          creatorname: 'xyzzz',
          duration: '14 hr',
          level: 'intermediate',
          abstract: 'IN this session you will learn the ins and outs of directives!',
          upVoteCount:0
      }
  ]
    }  
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
});