export default class Users {
    constructor(UsersRestangular) {
        this.route = UsersRestangular.all('users');
    }

    getUsers() {
        return this.route.getList();
    }

    getOne(id) {
        return this.route.get(id);
    }

    update(user) {
        return this.route.post({user: user});
    }

    delete(user) {
        return user.remove();
    }
}
