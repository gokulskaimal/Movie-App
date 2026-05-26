import {z} from 'zod'

export const favoriteMovieSchema =   z.object({imdbID: z.string().trim().min(1),Title: z.string().trim().min(1),Year: z.string().trim().min(1),Poster: z.string(),Type: z.string().optional()});