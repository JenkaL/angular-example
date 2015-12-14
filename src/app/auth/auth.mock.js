export default class AuthMock {
    constructor ($httpBackend, AuthToken) {
        $httpBackend.whenPOST(/sessions.*/).respond((method, url, data) => {
            let credentials = JSON.parse(data);

            if(credentials.email === 'xz@xz.ru' && credentials.password === '123'){
                AuthToken.tokenSet();
                return [200, {message: 'Auth Success'}, {}];
            } else {
                return [401, {error: 'Login or password are not correct'}, {}];
            }
        });

        $httpBackend.whenDELETE(/sessions.*/).respond(() => {
            if(!AuthToken.tokenCheck()) {
                return [401, {error: 'Login or password are not correct'}, {}];
            }

            AuthToken.deleteCookie('authToken');
            return [200, {}, {}];
        });
    }
}