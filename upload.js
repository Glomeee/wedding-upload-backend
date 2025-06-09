import axios from "axios";
import fs from "fs";

export async function uploadToOneDrive(file, accessToken) {
  const fileName = `${Date.now()}-${file.originalname}`;
  const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/WeddingUploads/${fileName}:/content`;

  const response = await axios.put(uploadUrl, fs.readFileSync(file.path), {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": file.mimetype
    }
  });

  return response.data;
}
