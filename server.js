const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.static("public"));

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("images", 20), (req,res)=>{
  res.json({ ok:true });
});

app.listen(process.env.PORT || 3000);