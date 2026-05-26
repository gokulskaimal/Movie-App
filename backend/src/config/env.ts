import dotenv from 'dotenv'

dotenv.config()

const requiredEnvVariables = ["PORT" , "OMDB_API_KEY" ]

requiredEnvVariables.forEach((key) => {
    if(!process.env[key]){
        throw new Error(`Missing required environment variable: ${key}`)
    }
})

export const ENV = {
    PORT : process.env.PORT,
    OMDB_API_KEY : process.env.OMDB_API_KEY as string
}