describe("CalculatorController", function () {
    describe("Addition", function () {

        var $scope, ctrl;

        beforeEach(
            module('myApp'),
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller('CalcCtrl', {
                    $scope: $scope
                });
        }));

        it("should add two integer numbers.", function () {
            $scope.add(2, 3)
            expect($scope.runningTotal).toEqual(5);
        });
    });
});
