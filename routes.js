// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_FROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  // Global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  // User
  user: USER,
  userDetail: USER_DETAIL,
  editFrofile: EDIT_FROFILE,
  changePassword: CHANGE_PASSWORD,
  // Video
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
