import express from "express";
import routes from "../routes";
import { search, getJoin, postJoin } from "../controller/globalController";
import { home } from "../controller/videoController";

const globalRouter = express.Router();
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
