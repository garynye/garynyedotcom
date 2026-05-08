# garynyedotcom

Personal website built with Vite and React.

## Current Deployment

This project is being migrated from Netlify to GitHub Pages. Netlify deployment
configuration has been removed from the repo, and production deploys now run
through GitHub Actions.

The GitHub Pages workflow lives at `.github/workflows/deploy.yml`. It runs on
pushes to the `main` branch, installs dependencies with `npm ci`, builds with
`npm run build`, uploads the `build` folder, and deploys it with GitHub Pages.

## Local Development

Install dependencies:

```powershell
npm ci
```

Run the local development server:

```powershell
npm run dev
```

Build the production site:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

Run tests:

```powershell
npm test
```

## GitHub Pages Setup

In the GitHub repository settings, set Pages to deploy from GitHub Actions.
After that, every push to `main` will publish the latest production build.

The Vite build output is configured in `vite.config.js`:

```js
build: {
  outDir: "build",
}
```

Keep this output path aligned with the workflow artifact path:

```yaml
path: './build'
```
