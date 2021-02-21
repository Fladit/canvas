import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";
import axiosConfigured from "../utils/axiosConfigured";
import routes from "../utils/routes";

class UserStore {
    username = ""

    constructor() {
        makeAutoObservable(this)
        const token = localStorage.getItem("token")
        if (token)
            this.authentication(token).then(this.parseToken.bind(this)).catch(e => {
                alert(e.response.data.message)
                this.setUsername("")
            })
    }

    parseToken(token) {
        console.log("auth")
        const decoded = jwtDecode(token)
        this.username = decoded.username
    }

    setUsername(username) {
        this.username = username
    }

    async authentication (token) {
        const response = axiosConfigured.post(routes.AUTHENTICATION, {},
            {headers: {Authorization: `Bearer ${token}`}})
        return token
    }

    get isAuth() {
        return !!this.username;
    }

}

export default new UserStore()
