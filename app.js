import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouther";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

// watch module
app.use(morgan("dev"));

// public 폴더 지정
app.use(express.static("public"));

// view engine 설정 - Pug
app.set("view engine", "pug");

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);

export default app;
