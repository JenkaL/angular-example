export default class AuthRouteController {
    constructor(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
    }

    login(email, password) {
        this.Auth.checkAuth(email, password)
            .then(() => {
                this.$state.go('folders.letters', {folderId: 1});
            })
            .catch(() => {
                this.loginError = true;
            });
    }
}
