import axiosConfigured from "./axiosConfigured";
import UserStore from "../store/UserStore";
import jwtDecode from "jwt-decode";
import routes from "./routes";

const login = async (username, password, history) => {
    try {
        const response = await axiosConfigured.post(routes.LOGIN, {username, password})
        auth(response)
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

const registration = async (username, password, history) => {
    try {
        const response = await axiosConfigured.post(routes.REGISTRATION, {username, password})
        auth(response)
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

const auth = (response) => {
    const token = response.data.access
    const refresh = response.data.refresh
    const decoded =jwtDecode(token)
    if (decoded.hasOwnProperty("username")) {
        //console.log("token: ", token, refresh)
        localStorage.setItem("token", token)
        localStorage.setItem("refresh", refresh)
        UserStore.setUsername(decoded.username)
    }
    else {
        alert("Ошибка на сервере, username не был вовзращён.")
    }
}

export {login, registration}
