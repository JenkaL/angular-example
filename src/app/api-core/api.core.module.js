import ApiMock from './api.mock';
import RestangularWithAuth from './api.restangular';

let api = angular
    .module('api-core', ['ngMockE2E', 'restangular'])
    .run(($httpBackend) => new ApiMock($httpBackend))

    .service('RestangularWithAuth', RestangularWithAuth);

export default api = api.name;
