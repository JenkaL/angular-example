export default class ApiMock {
    constructor ($httpBackend) {
        $httpBackend.whenGET(/^http:\/\/jsonplaceholder\.typicode\.com/).passThrough();

        $httpBackend.whenPOST(/^http:\/\/jsonplaceholder\.typicode\.com\/users/).respond(() => {
            return [200, {}, {}];
        });
        $httpBackend.whenDELETE(/^http:\/\/jsonplaceholder\.typicode\.com\/users/).respond(() => {
            return [200, {}, {}];
        });
    }
}