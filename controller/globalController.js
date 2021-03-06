import routes from "../routes";

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
};

export const getJoin = (req, res) => {
  console.log("get");
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { id, pw, pw_r, name },
  } = req;

  // 비밀번호 확인
  if (pw !== pw_r) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // 회원가입 & 로그인
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};
export const postLogin = (req, res) => {
  // 로그인 처리 구현해야함
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.locals.user = {};
  console.log("logout", res.locals.user);
  res.redirect(routes.home);
};
