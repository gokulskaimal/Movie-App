import api from "../api/axios";
import { getGuestId } from "../hooks/useGuestId";
import type { Movie } from "../types/movie";

export const favoriteService = {
    async getFavorites(){
        const response = await api.get('/favorites' , {headers : {'x-guest-id' : getGuestId()}})

        return response.data.data
    
    },

    async addFavorite(movie : Movie){
        const response = await api.post('/favorites' , movie , {headers : {'x-guest-id' : getGuestId()}})

        return response.data.data

    },

    async removeFavorite(imdbID : string) {
        const response = await api.delete(`/favorites/${imdbID}` , {headers : {'x-guest-id' : getGuestId()}})

        return response.data.data
    
    }
}