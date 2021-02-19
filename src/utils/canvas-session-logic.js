import axiosConfigured from "./axiosConfigured";
import routes from "./routes";

const joinSession = async (id, history) => {
    try {
        const response = await axiosConfigured.get(`${routes.GET_CANVAS_SESSION}/${id}`,
            {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        history.push(`/${id}`)
    }
    catch (e) {
        alert("Сессия с ведённым id не существует!")
    }
}

export {joinSession}
