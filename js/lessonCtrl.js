angular.module('directivePractice').controller('lessonCtrl', function($scope, service) {

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = function(lesson, day) {
        console.log('string')
        if (day !== undefined) {
        alert(lesson + ' is active on ' + day);
        }
        else alert(lesson + " is not on the schedule.");
    };

});