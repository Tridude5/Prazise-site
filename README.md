# Prazise website

Static marketing site for **Prazise** (HTML/CSS/JS). Deployed with **GitHub Pages**.

## What’s here
/
├─ index.html
├─ styles.css
├─ logo.svg
├─ privacy.html
├─ terms.html
└─ deletion.html

## Deploy (GitHub Pages)
1. Push files to this repo (or upload via **Add file → Upload files**).
2. Repo **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Site will be at `https://<user>.github.io/<repo>/`.

## Edit
- Click a file → **✏️ Edit** → **Commit changes**.
- For local preview:
- 
  python3 -m http.server 8080
  # open http://localhost:8080
Customize
Replace contact emails in the HTML files (hello@…, privacy@…).

Swap logo.svg if you have a final mark.

Waitlist form: set your real endpoint in index.html.

Custom domain (optional, later)
Settings → Pages → Custom domain, add www.yourdomain.com, follow CNAME hint, then enable Enforce HTTPS.

License
Add one if you want (e.g., MIT). Otherwise keep the repo unlicensed/private.

makefile
::contentReference[oaicite:0]{index=0}
