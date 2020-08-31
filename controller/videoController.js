import routes from "../routes";

export const home = (req, res) => {
  console.log("home", res.locals.user);
  res.render("home", { pageTitle: "Home" });
};

export const getUpload = (req, res) => {
  res.render("upload");
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;

  // video.id 정의 되지 않음.
  res.redirect(routes.videoDetail(video.id));
};

export const editVideo = (req, res) => {
  const {
    params: { id: videoId },
  } = req;
  res.render("editVideo", { videoId: videoId });
};

export const videoDetail = (req, res) => {
  const {
    params: { id: videoId },
  } = req;
  res.render("videoDetail", { videoId: videoId });
};
