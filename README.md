# Wedding Upload Backend

Ovo je backend server za vjenčane slike. Gosti šalju slike putem weba, a one se spremaju na tvoj OneDrive.

## Kako pokrenuti lokalno

1. Kopiraj `.env.example` u `.env` i unesi svoje Microsoft Azure podatke
2. Instaliraj ovisnosti:
```
npm install
```
3. Pokreni server:
```
node server.js
```
4. Upload endpoint: `POST /upload` s poljem `images` (multipart/form-data)

## Deploy na Render.com

1. Stavi ovaj projekt na GitHub (repo npr. `wedding-upload-backend`)
2. Otvori [https://render.com](https://render.com) i spoji repo
3. Postavke:
   - Build command: `npm install`
   - Start command: `node server.js`
   - Add Environment Variables iz `.env`
4. Dobit ćeš javni URL kao `https://your-app.onrender.com`

Taj URL koristiš u frontend dijelu!
