function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '=',
            showName: '='
        },
        templateUrl: 'js/directives/member.html'
    };
}