import express from "express";
import routes from "../routes";
import {
  search,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controller/globalController";
import { home } from "../controller/videoController";

const globalRouter = express.Router();
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

export default globalRouter;
