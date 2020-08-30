// 임시 db
import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const upload = (req, res) => {
  res.render("upload");
};

export const editVideo = (req, res) => {
  const {
    params: { id: videoId },
  } = req;
  res.render("editVideo", { videoId: videoId });
};
