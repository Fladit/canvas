import axiosConfigured from "./axiosConfigured";
import routes from "./routes";

const joinSession = async (id, history) => {
    try {
        const response = await axiosConfigured.get(`${routes.GET_CANVAS_SESSION}/${id}`)
        history.push(`/${response.data.sessionID}`)
    }
    catch (e) {
        alert("Сессия с ведённым id не существует!")
    }
}

export {joinSession}
