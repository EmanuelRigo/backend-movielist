import express from "express";
import http from "http";
import envUtil from "./utils/env.utils.js";
import argsUtil from "./utils/args.util.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";


//SERVER
const app = express()
const port = envUtil.PORT 

//CREATING HTTP SERVER
const server = http.createServer(app)

//START SERVER
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log("server on mode", argsUtil.env);
})

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser(envUtil.SECRET_KEY));

// CONFIGURACION DE SESSION
app.use(
    session({
      secret: envUtil.SECRET_KEY,
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({
        mongoUrl: envUtil.MONGO_LINK,
        ttl: 60 * 60 * 24,
      }),
    })
  );

//CONFIGURACION DE CORS
app.use(cors({origin: true, credentials: true}));

