const express = require("express");
const router = express.Router();
const { Router } = require("express");
const path = require("path");
const admin = require("firebase-admin");
const serviceAccount = require("../strimo-9e1a1-firebase-adminsdk-dqzfg-6c17e3a7c1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://strimo-9e1a1-default-rtdb.firebaseio.com",
});
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
router.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
  const expiresIn = 60 * 60 * 1000;
  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
});
router.get("/sessionLogout", (req, res) => {
  res.clearCookie("session");
  res.redirect("/access");
});

router.get("/home", (req, res) => {
  res.render("../views/main.ejs");
});
router.get("/", (req, res) => {
  res.render("../views/swap.ejs");
});
router.get("/access", (req, res) => {
  res.render("../views/session/access.ejs");
});
router.get("/lobby", checkUser, (req, res) => {
  res.render("../views/session/lobby.ejs");
});
router.get("/my-token", checkUser, (req, res) => {
  res.render("../views/session/myToken.ejs");
});
router.get("/buy-token", checkUser, (req, res) => {
  res.render("../views/session/buyToken.ejs");
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
