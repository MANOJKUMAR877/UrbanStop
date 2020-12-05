import axios from "axios";
const fetchApi = async () => {

    try {
        let apiValue = await axios.get("https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart")
       
       return apiValue.data;


    }
    catch (error) {
        return (error)
    }
}


export default fetchApi