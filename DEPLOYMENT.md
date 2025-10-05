# Deployment Guide

This guide covers deploying your a6n AI Automation Platform to production.

## 🚀 Quick Deploy with Lovable

The easiest way to deploy:

1. Open your [Lovable Project](https://lovable.dev/projects/c5fe5b12-4670-4eaf-a113-439d4cad4a2c)
2. Click **Share → Publish**
3. Your site is live! 🎉

### Custom Domain with Lovable

1. Navigate to **Project > Settings > Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (usually 5-15 minutes)

[Learn more about custom domains](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 🔨 Manual Deployment

### Build Process

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Output will be in dist/ directory
```

### Build Output

The `dist/` folder contains:
- Optimized and minified JavaScript bundles
- Minified CSS with Tailwind v4
- Compressed assets and images
- Generated HTML files

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import your Git repository
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy!

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or use [Netlify Drop](https://app.netlify.com/drop):
1. Build locally: `npm run build`
2. Drag and drop the `dist/` folder

### Deploy to AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Sync to S3 (replace YOUR-BUCKET)
aws s3 sync dist/ s3://YOUR-BUCKET --delete

# Invalidate CloudFront cache (replace YOUR-DISTRIBUTION-ID)
aws cloudfront create-invalidation --distribution-id YOUR-DISTRIBUTION-ID --paths "/*"
```

### Deploy to GitHub Pages

Add to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔒 Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. Never commit `.env.local` to Git
4. In production, set variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **AWS**: Use Systems Manager Parameter Store

## ⚡ Performance Checklist

Before deploying, verify:

- [ ] Production build completes without errors
- [ ] Bundle sizes are reasonable (check with `npm run build`)
- [ ] All images are optimized
- [ ] Lighthouse score is 90+ for all metrics
- [ ] Meta tags are configured in `index.html`
- [ ] `robots.txt` is updated with your domain
- [ ] 404 page works correctly

## 📊 Post-Deployment

### Verify SEO

- [ ] Open Graph tags display correctly (test on [Facebook Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Twitter Cards work (test on [Twitter Card Validator](https://cards-dev.twitter.com/validator))
- [ ] Structured data is valid (test on [Google Rich Results](https://search.google.com/test/rich-results))

### Monitor Performance

- [ ] Run [Lighthouse](https://pagespeed.web.dev/) audit
- [ ] Check [GTmetrix](https://gtmetrix.com/) report
- [ ] Test on [WebPageTest](https://www.webpagetest.org/)

### Set Up Analytics (Optional)

Add Google Analytics, Plausible, or similar:

```typescript
// In src/main.tsx or App.tsx
if (import.meta.env.PROD) {
  // Initialize analytics here
}
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Page Refresh

If using React Router, configure your hosting for SPA:

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**: Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Assets Not Loading

Ensure base path is correct in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/', // or '/your-subdirectory/' for subdomain deployments
  // ... rest of config
});
```

## 📞 Support

For deployment issues:
- Check [Lovable Documentation](https://docs.lovable.dev/)
- Review [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Contact support through Lovable

---

Happy deploying! 🚀
