# SoftRays Global Website

Static multi-page website for your software services company (Ireland HQ + India delivery center).

## Project Structure
- `index.html` (Home)
- `pages/about.html`
- `pages/services.html`
- `pages/sectors.html`
- `pages/contact.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `.github/workflows/deploy-pages.yml` (GitHub Pages auto deploy)
- `netlify.toml` (Netlify deploy config)

## Local Preview
```bash
cd /Users/amarinder/Devlopment/global_software_studio
python3 -m http.server 8080
```
Open: `http://localhost:8080`

## Fastest Public Hosting (2-5 min)
1. Open `https://app.netlify.com/drop`
2. Drag this folder: `/Users/amarinder/Devlopment/global_software_studio`
3. Site goes live instantly with a public HTTPS URL

## Auto Deploy with GitHub Pages (Recommended)

### One-time setup
```bash
cd /Users/amarinder/Devlopment/global_software_studio

git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### Enable Pages in GitHub
1. Open your repo on GitHub
2. Go to `Settings` -> `Pages`
3. Under `Build and deployment`, set `Source` to `GitHub Actions`
4. The workflow `Deploy static site to GitHub Pages` runs automatically

After deployment, site URL will be:
- `https://<your-username>.github.io/<repo-name>/`

Every future `git push` auto-publishes updates.

## Auto Deploy with Netlify + GitHub
1. Push this project to GitHub (steps above)
2. In Netlify: `Add new site` -> `Import from Git`
3. Pick the repo
4. Build command: *(leave empty)*
5. Publish directory: `.`
6. Deploy

Every push to `main` auto-deploys on Netlify.

## Next Steps
- Connect custom domain (for example `softraysglobal.com`)
- Add backend for contact form (email/API)
- Add case studies, testimonials, and pricing
- Add analytics (GA4/Plausible)
