import {makeAutoObservable} from "mobx";

class UserStore {
    username = ""
    socket = null

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return !!this.username;
    }

}

export default new UserStore()
