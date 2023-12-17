import axios from "axios";

//использование HTTP запросов для получения блюд с сайта THEMEALDB
//axios.create для создания опредленной ссылки с API данными что бы упрастить ко
//что бы не писать ссылку на данные что бы получить их и что бы сразу обработать успешный ответ(response)
//и что бы если что обработать ошибки(error)
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosClient;
