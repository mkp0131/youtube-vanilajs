import express from "express";
import { videos, upload, editVideo } from "../controller/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;
