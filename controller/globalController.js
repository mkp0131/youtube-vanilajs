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
    res.redirect(routes.home);
  }
};
