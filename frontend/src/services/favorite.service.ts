import api from "../api/axios";
import type { Movie } from "../types/movie";

export const favoriteService = {
    async getFavorites(){
        const response = await api.get('/favorites')

        return response.data.data
    
    },

    async addFavorite(movie : Movie){
        const response = await api.post('/favorites' , movie)

        return response.data.data

    },

    async removeFavorite(imdbID : string) {
        const response = await api.delete(`/favorites/${imdbID}`)

        return response.data.data
    
    }
}