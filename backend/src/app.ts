import express from "express"
import cors from "cors"
import routes from "./routes"
import { apiLimiter } from "./middlewares/rate-limit.middleware"
import { notFoundMiddleware } from "./middlewares/not-found.middleware"
import { errorMiddleware } from "./middlewares/error.middleware"
import { MESSAGES } from "./constants/messages"

export const app = express()
app.set("trust proxy", 1);
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL || ""
    ],
    credentials: true
  })
);

app.use(express.json())


app.use(apiLimiter)

app.get('/', (_req , res) => {
    res.json({message : MESSAGES.SERVER_RUNNING})
})

app.use('/api' , routes)

app.use(notFoundMiddleware)

app.use(errorMiddleware)

export default app;