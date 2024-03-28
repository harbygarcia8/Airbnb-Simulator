import axios from "axios"
import { HEADER, SEARCH_DESTINATION } from "../../constants/routesApis"

export const searchDestination = async (query:string, country:string) => {
    try {
        const responseSearchDestionation = await axios.get(SEARCH_DESTINATION, {
            params: {query, country},
            headers: HEADER
        })
        console.log(responseSearchDestionation.data)
    } catch (error) {
        console.error(error)
    }   
}