import axios from "axios";
const fetchApi1 = async () => {

    try {
        let apiValue = await axios.get("https://5fc952922af77700165ae75d.mockapi.io/api/task/card-data")
       
       return apiValue.data;


    }
    catch (error) {
        return (error)
    }
}


export default fetchApi1