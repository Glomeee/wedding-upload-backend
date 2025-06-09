import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function getAccessToken() {
  const response = await axios.post(`https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`, new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials"
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  return response.data.access_token;
}
