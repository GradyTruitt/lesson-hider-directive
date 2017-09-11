angular.module('directivePractice').directive('lessonHider', function() {
    return {
        templateUrl: './views/lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        controller: function($scope, service) {
            $scope.getSchedule = service.getSchedule();
        },
        link: function(scope, element, attr) {
            scope.getSchedule.then(function(res){
                scope.schedule = res.data;

                scope.schedule.forEach(function(scheduleDay){
                    if (scheduleDay.lesson === scope.lesson) {
                        scope.lessonDay = scheduleDay.weekday;
                        element.css('text-decoration', "line-through");
                        return;
                    }
                });
            });
        }
    };
});