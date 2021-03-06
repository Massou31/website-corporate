'use strict';

/**
 * Modal that allows the user to register on the mailing list
 */
angular.module('websiteCorporateApp').controller('DownloadModalCtrl', [
    '$scope', '$http', '$modalInstance',
    function ($scope, $http, $modalInstance) {

    $scope.header = "Je reçois la présentation par email";
    $scope.mailingListRecord = {
        origin: 1,   // Download
        email: null,
        message: "Je souhaiterais recevoir la présentation Alkemics - IFLS du jeudi 05 juin."
    };

    /*
     * Register a user to the mailing list
     * Default is a POST to the endpoint
     * Fallback with a GET to have the email in the logs
     */
    $scope.ok = function () {
        (new Image()).src = 'https://auth.alkemics.com/auth/v1/mailinglist/register?email=' + $scope.mailingListRecord.email + '&message=' + $scope.mailingListRecord.message;
        var record = $scope.mailingListRecord;
        $http.post(
            'https://auth.alkemics.com/auth/v1/mailinglist/register',
            record
        ).success(function (response) {
            $modalInstance.close($scope.product);
        }).error(function (response) {
            $http.get(
                'https://auth.alkemics.com/auth/v1/mailinglist/register',
                {
                    params: record
                }
            );
            $modalInstance.close($scope.product);
        });
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);