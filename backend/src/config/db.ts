import  sqlite3  from "sqlite3";
import { open , Database } from "sqlite";
import path from "path";
import fs from 'fs/promises'

let dbInstance : Database | null

export const getDb = async() => {
    if(dbInstance) return dbInstance

    const dbPath = path.join(process.cwd() , 'src' , 'data' , 'favorites.db')

    await fs.mkdir(path.dirname(dbPath) , {recursive: true})
    dbInstance = await open({filename : dbPath, driver : sqlite3.Database})

    await dbInstance.exec(
        ` CREATE TABLE IF NOT EXISTS  favorites(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            guestId TEXT NOT NULL,
            imdbID TEXT NOT NULL,
            Title TEXT NOT NULL,
            Year TEXT NOT NULL,
            Poster TEXT NOT NULL,
            Type TEXT NOT NULL,
            UNIQUE(guestId, imdbID)
        )`
    )
    return dbInstance
}
