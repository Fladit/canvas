import axiosConfigured from "../../utils/axiosConfigured";
import UserStore from "../../store/UserStore";
import jwtDecode from "jwt-decode";
import routes from "../../utils/routes";

const login = async (username, password, history) => {
    try {
        const response = await axiosConfigured.post(routes.LOGIN, {username, password})
        const token = response.data.token
        console.log("token: ", token)
        localStorage.setItem("token", token)
        const decoded =jwtDecode(token)
        if (decoded.hasOwnProperty("username")) {
            UserStore.setUsername(decoded.username)
            history.push("/")
            console.log("next")
        }
        else {
            alert("Ошибка на сервере, username не был вовзращён.")
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

const registration = async (username, password, history) => {
    try {
        const response = await axiosConfigured.post(routes.REGISTRATION, {username, password})
        const token = response.data.token
        console.log("token: ", token)
        localStorage.setItem("token", token)
        const decoded =jwtDecode(token)
        if (decoded.hasOwnProperty("username")) {
            UserStore.setUsername(decoded.username)
            history.push("/")
        }
        else {
            alert("Ошибка на сервере, username не был вовзращён.")
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export {login, registration}
