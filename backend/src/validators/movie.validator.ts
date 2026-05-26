import {z} from 'zod'

export const searchMovieSchema = z.object({query : z.string().trim().min(1 , "Search query is required").max(100 , "Query too long"), page: z.coerce.number().min(1).optional()})