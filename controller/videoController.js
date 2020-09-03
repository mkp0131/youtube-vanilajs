import routes from "../routes";
import Video from "../models/Video";

// await 를 기다리고 render 되는지 테스트해보기
function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("안녕");
    }, sec);
  });
}

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log("videos", videos);
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log("home error", error);
  }
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
