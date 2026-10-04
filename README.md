# Darius Olsson Carter Portfolio

## Deploy immediately
Use `darius-portfolio-deploy.zip`: extract it and upload the folder containing index.html and assets to Netlify Drop, or another static website host. No install or build is needed. Keep the assets folder beside index.html.

## Edit and rebuild
This source archive contains the original React/Vite app, the revised design, fonts, images, and video. Requires Node.js 20.19+ or Bun.

1. Install: `npm install`
2. Develop: `npm run dev`
3. Build: `npm run build`
4. Deploy the generated `dist` folder. On Netlify/Vercel set build command `npm run build` and publish directory `dist`.

## Updates
- Preserved retro city backdrop, folder password entrance, section order, featured carousel, and project layout.
- Shared per-box scroll reveals, mint-edge hover feedback, gentle image motion, and reduced-motion support.
- Built-with labels for all eight projects and the infrastructure labs.
- Corrected Sentinel source-on-request display and Excel project title.
- Restored every referenced photo/video; no external image hotlinks or Lovable dependencies.
- Fixed narrow title wrapping, mobile menu spacing, and carousel dot hit areas.

## Password and links
The original four-digit password hash is unchanged. This client-side password screen is a visual curtain, not security: content and files are publicly downloadable. Do not store private information behind it. For genuine protection, configure access controls with your hosting provider.

LinkedIn remains unlinked because no profile URL was supplied. Add your real URL to `src/contact.jsx` when ready.
