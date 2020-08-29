import express from 'express';
import { videos, upload } from '../controller/videoController';

const videoRouter = express.Router();
videoRouter.get("/", videos)
videoRouter.get("/upload", upload)

export default videoRouter;