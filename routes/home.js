const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    const urls = [
        { origin: "www.google.com/1", shortURL: "dgkjkd1" },
        { origin: "www.google.com/2", shortURL: "dgkjkd2" },
        { origin: "www.google.com/3", shortURL: "dgkjkd3" },
      ];
      res.render("home", { urls: urls });
})



module.exports = router