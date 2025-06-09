import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { getAccessToken } from "./auth.js";
import { uploadToOneDrive } from "./upload.js";
import fs from "fs";

dotenv.config();
const app = express();
const upload = multer({ dest: "uploads/" });
app.use(cors());

app.post("/upload", upload.array("images"), async (req, res) => {
  try {
    const accessToken = await getAccessToken();

    for (let file of req.files) {
      await uploadToOneDrive(file, accessToken);
      fs.unlinkSync(file.path);
    }

    res.status(200).send("Upload successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Upload failed.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
