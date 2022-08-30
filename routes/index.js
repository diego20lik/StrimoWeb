const express = require("express");
const router = express.Router();
const { Router } = require("express");
const path = require("path");
router.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});
//Check User

function checkUser(req, res, next) {
  const sessionCookie = req.cookies.session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then(() => {
      next();
    })
    .catch((error) => {
      res.redirect("/access");
    });
}
router.get("/home", (req, res) => {
  res.render("../views/main.ejs");
});
router.get("/", (req, res) => {
  res.render("../views/swap.ejs");
});
router.get("/download_white_paper", (req, res) => {
  var file = path.join(__dirname, "..", "whitepaper-pdf", "STRIMO WP.pdf");
  res.download(file, function (err) {
    if (err) {
      console.log("Error");
      console.log(err);
    }
  });
});
module.exports = router;
