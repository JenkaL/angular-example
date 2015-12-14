export default class Auth {
    constructor(RestangularWithAuth, $q) {
        this.RestangularWithAuth = RestangularWithAuth;
        this.currentSession = null;
        this.$q = $q;
    }

    checkAuth(email, password) {
        let defer = this.$q.defer();

        this.RestangularWithAuth.all('sessions').post({
            email: email,
            password : password
        }).then((session) => {
            this.currentSession = session;
            defer.resolve();
        }, () => {
            defer.reject();
        });

        return defer.promise;
    }

    logout() {
        return this.currentSession.remove();
    }
}
