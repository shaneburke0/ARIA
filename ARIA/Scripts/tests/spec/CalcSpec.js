describe("CalculatorController", function () {
    beforeEach(module('myApp'));

    describe("Addition", function () {

        var $scope, ctrl;

        beforeEach(
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller('CalcCtrl', {
                    $scope: $scope
                });
        }));

        it("should add two integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.add();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(5);
        });

        it("should add two negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.add();
            $scope.pendingValue = -3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-5);
        });

        it("should add an integer to zero.", function () {
            $scope.pendingValue = 0;
            $scope.add();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(3);
        });

        it("should add three integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.add();
            $scope.pendingValue = 3;
            $scope.add();
            $scope.pendingValue = 4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(9);
        });

        it("should add three negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.add();
            $scope.pendingValue = -3;
            $scope.add();
            $scope.pendingValue = -4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-9);
        });
    });

    describe("Subtraction", function () {

        var $scope, ctrl;

        beforeEach(
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller('CalcCtrl', {
                    $scope: $scope
                });
            }));

        it("should subtract two integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.subtract();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-1);
        });

        it("should subtract two negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.subtract();
            $scope.pendingValue = -3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(1);
        });

        it("should subtract an integer to zero.", function () {
            $scope.pendingValue = 0;
            $scope.subtract();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-3);
        });

        it("should subtract three integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.subtract();
            $scope.pendingValue = 3;
            $scope.subtract();
            $scope.pendingValue = 4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-5);
        });

        it("should subtract three negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.subtract();
            $scope.pendingValue = -3;
            $scope.subtract();
            $scope.pendingValue = -4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(5);
        });
    });

    describe("Multiplication", function () {

        var $scope, ctrl;

        beforeEach(
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller('CalcCtrl', {
                    $scope: $scope
                });
            }));

        it("should multiply two integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.multiply();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(6);
        });

        it("should multiply two negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.multiply();
            $scope.pendingValue = -3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(6);
        });

        it("should multiply an integer to zero.", function () {
            $scope.pendingValue = 0;
            $scope.multiply();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(0);
        });

        it("should multiply three integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.multiply();
            $scope.pendingValue = 3;
            $scope.multiply();
            $scope.pendingValue = 4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(24);
        });

        it("should multiply three negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.multiply();
            $scope.pendingValue = -3;
            $scope.multiply();
            $scope.pendingValue = -4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-24);
        });
    });

    describe("Division", function () {

        var $scope, ctrl;

        beforeEach(
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller('CalcCtrl', {
                    $scope: $scope
                });
            }));

        it("should divide two integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.divide();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(0.6666666666666666);
        });

        it("should multiply two negative integer numbers.", function () {
            $scope.pendingValue = -2;
            $scope.divide();
            $scope.pendingValue = -3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(0.6666666666666666);
        });

        it("should divide an integer to zero.", function () {
            $scope.pendingValue = 0;
            $scope.divide();
            $scope.pendingValue = 3;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(0);
        });

        it("should divide three integer numbers.", function () {
            $scope.pendingValue = 2;
            $scope.divide();
            $scope.pendingValue = 3;
            $scope.divide();
            $scope.pendingValue = 4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(0.16666666666666666);
        });

        it("should divide three negative integer numbers.", function () {
            $scope.pendingValue = -24;
            $scope.divide();
            $scope.pendingValue = -3;
            $scope.divide();
            $scope.pendingValue = -4;
            $scope.calculate();
            expect($scope.runningTotal).toEqual(-2);
        });
    });
});
