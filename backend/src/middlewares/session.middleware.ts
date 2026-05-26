import session from "express-session";

export const sessionMiddleware = session({
    secret : process.env.SESSION_SECRET || 'movie-secret',
    resave : false,
    saveUninitialized : true,

    cookie : {
        secure : false,
        httpOnly : true,
        maxAge : 1000 * 60 * 60 * 24
    
    }
})