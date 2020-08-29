import express from "express";
import routes from "../routes";

const userRouter = express.Router();
userRouter.get(routes.userDetail, (req, res) => {
  console.log("##", req.params);
  res.send("This is user Index.");
});

export default userRouter;
