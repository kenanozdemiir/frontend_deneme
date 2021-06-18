import axios from "axios"
export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getall")
    }

    getByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByCompanyName?SirketAdi="+companyName)
    }

    add(values){
       return axios.post("http://localhost:8080/api/JobAdvertisement/add",values)
    }
}