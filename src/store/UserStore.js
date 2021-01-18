import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";

class UserStore {
    username = ""

    constructor() {
        makeAutoObservable(this)
        const token = localStorage.getItem("token")
        if (token)
            this.parseToken(token)
    }

    parseToken(token) {
        const decoded = jwtDecode(token)
        this.username = decoded.username
    }

    setUsername(username) {
        this.username = username
    }

    get isAuth() {
        return !!this.username;
    }

}

export default new UserStore()
