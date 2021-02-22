import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";
import axiosConfigured from "../utils/axiosConfigured";
import routes from "../utils/routes";

class UserStore {
    username = ""

    constructor() {
        makeAutoObservable(this)
    }

    async authentication () {
        const token = localStorage.getItem("token")
        if (token)
        {
            try {
                const response = await axiosConfigured.post(routes.AUTHENTICATION, {},)
                this.parseToken(token)
            }
            catch (e) {
                alert(e.response.data.message)
                this.setUsername("")
                console.log("401")
            }
        }
    }

    parseToken(token) {
        console.log("auth")
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
