<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1yBR5yH0hSTKszorocDmIAwbZ_DZPdx2v

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Pages

The project is set up to deploy to **GitHub Pages** on every push to `main`.

1. Push this repo to GitHub (e.g. `no-more-frankenstein---rapid-rewire-platform`).
2. In the repo: **Settings → Pages** → set **Source** to **GitHub Actions**.
3. Push to `main` (or run the “Deploy to GitHub Pages” workflow manually). The site will be at:
   - **https://&lt;username&gt;.github.io/&lt;repo-name&gt;/**
