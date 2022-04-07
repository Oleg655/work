import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: " http://engine.hotellook.com/api/v2/lookup.json",
    headers: {
      "API-KEY": "",
    },
  });

export const authAPI = {
    login(data){
        return instance.post('')
    }
}

