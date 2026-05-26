import api from "../api/axios";

export const movieService = {
    async searchMovies(query : string , page = 1){
        const response = await api.get('/movies/search' , {params : {query , page}})

        return response.data.data
    }
}