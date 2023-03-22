import {axiosService} from "./axios.service";
import {urls} from "../configs";

const characterService={
    getAll:()=>axiosService.get(urls.characters),
    getById:(id)=>axiosService.get(`${urls.characters}/${id}`),
    searchCharacters:(query)=>axiosService.get(`${urls.characters}/?name=${query}`)
}
export {
    characterService
}
