export default function RestangularWithAuth(Restangular, $injector, $http) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setErrorInterceptor(function(response, deferred, responseHandler) {
            if (response.status === 401) {
                $injector.get('$state').go('login');
                $http(response.config).then(responseHandler, deferred.reject);
                return false;
            }

            return true;
        });
    });
}
