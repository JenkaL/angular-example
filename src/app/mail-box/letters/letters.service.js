export default class Letters {
    constructor(RestangularWithAuth) {
        this.RestangularWithAuth = RestangularWithAuth;
    }

    getLetters(folderId) {
        return this.RestangularWithAuth.one('users', folderId).getList('posts');
    }

    getLetter(letterId) {
        return this.RestangularWithAuth.one('posts', letterId).get();
    }
}
