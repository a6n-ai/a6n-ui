# Production Deployment Checklist

Use this checklist before deploying to production to ensure everything is optimized and secure.

## 📋 Pre-Deployment

### Code Quality
- [ ] All console.log statements removed or wrapped in development checks
- [ ] No TODO/FIXME comments in critical paths
- [ ] ESLint shows no errors
- [ ] TypeScript compiles without errors
- [ ] All tests pass (if applicable)

### Build & Bundle
- [ ] `npm run build` completes successfully
- [ ] Bundle sizes are reasonable (< 200KB gzipped for main)
- [ ] No duplicate dependencies in bundle
- [ ] Source maps are disabled (or external) for production
- [ ] Dead code elimination is working

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse Best Practices score > 90
- [ ] Lighthouse SEO score > 90
- [ ] Images are optimized (WebP, proper sizing)
- [ ] Fonts are optimized (preconnect, font-display)
- [ ] Lazy loading implemented for below-fold content
- [ ] Code splitting implemented for routes

### SEO
- [ ] Title tags are unique and descriptive (< 60 chars)
- [ ] Meta descriptions are compelling (< 160 chars)
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] Canonical URLs set correctly
- [ ] robots.txt updated with correct domain
- [ ] Sitemap generated (if applicable)
- [ ] Structured data added (JSON-LD)
- [ ] Alt text on all images
- [ ] Semantic HTML used throughout

### Security
- [ ] No API keys or secrets in client-side code
- [ ] Environment variables properly configured
- [ ] HTTPS enforced
- [ ] CSP headers configured (if applicable)
- [ ] No sensitive data in localStorage
- [ ] XSS prevention measures in place
- [ ] Dependencies audited (`npm audit`)
- [ ] No console errors in production

### Accessibility
- [ ] Keyboard navigation works throughout site
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader tested (NVDA/JAWS/VoiceOver)
- [ ] Forms have proper labels
- [ ] Error messages are clear and accessible
- [ ] Skip navigation link present
- [ ] Language attribute set on html tag

### Cross-Browser Testing
- [ ] Tested in Chrome (latest)
- [ ] Tested in Firefox (latest)
- [ ] Tested in Safari (latest)
- [ ] Tested in Edge (latest)
- [ ] Mobile Safari tested
- [ ] Mobile Chrome tested

### Responsive Design
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet landscape (1024px)
- [ ] Tablet portrait (768px)
- [ ] Mobile large (414px)
- [ ] Mobile medium (375px)
- [ ] Mobile small (320px)

### Content
- [ ] All dummy/lorem ipsum text replaced
- [ ] Copyright year is current
- [ ] Contact information is correct
- [ ] All links work (no 404s)
- [ ] Privacy policy linked (if applicable)
- [ ] Terms of service linked (if applicable)
- [ ] Cookie notice implemented (if in EU)

### Analytics & Monitoring
- [ ] Analytics tracking code added
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance monitoring set up
- [ ] Conversion tracking configured
- [ ] Goals/events configured in analytics

### Social Media
- [ ] Open Graph image created (1200x630px)
- [ ] Open Graph tags tested (Facebook Debugger)
- [ ] Twitter Card tested (Twitter Card Validator)
- [ ] LinkedIn preview tested
- [ ] Social sharing buttons functional

## 🚀 Deployment

### Pre-Deploy
- [ ] Create backup of current production (if updating)
- [ ] Database migrations ready (if applicable)
- [ ] Deployment plan documented
- [ ] Rollback plan prepared
- [ ] Team notified of deployment

### Deploy Steps
- [ ] Environment variables configured on hosting
- [ ] DNS records configured correctly
- [ ] SSL certificate installed and valid
- [ ] CDN configured (if applicable)
- [ ] Caching rules set up
- [ ] Compression enabled (gzip/brotli)
- [ ] HTTP/2 or HTTP/3 enabled

### Post-Deploy
- [ ] Site loads correctly on production domain
- [ ] SSL certificate valid (check with SSL Labs)
- [ ] All pages accessible and render correctly
- [ ] Forms submit successfully
- [ ] API endpoints working
- [ ] Analytics tracking events firing
- [ ] Error tracking receiving events
- [ ] Mobile site functional
- [ ] Check Google Search Console for crawl errors

## 🔍 Post-Launch Testing

### Functional Testing (24 hours)
- [ ] User registration/login works
- [ ] Contact forms deliver emails
- [ ] Payment processing works (if applicable)
- [ ] Search functionality works
- [ ] Filtering/sorting works
- [ ] Navigation works across all pages

### Performance Testing (48 hours)
- [ ] PageSpeed Insights score acceptable
- [ ] GTmetrix report looks good
- [ ] WebPageTest results acceptable
- [ ] Real user monitoring data looks normal
- [ ] Server response times < 200ms

### SEO Testing (1 week)
- [ ] Google Search Console shows no critical issues
- [ ] Pages being indexed correctly
- [ ] Sitemap submitted and accepted
- [ ] Rich results appearing in search (if applicable)
- [ ] No redirect chains or loops

### Monitoring (Ongoing)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure alerts for errors/downtime
- [ ] Monitor analytics for traffic anomalies
- [ ] Check for 404 errors regularly
- [ ] Review performance metrics weekly
- [ ] Check for security vulnerabilities monthly

## 🐛 Common Issues

### Site not loading
- Check DNS propagation (use DNS checker)
- Verify SSL certificate
- Check hosting service status
- Review error logs

### Assets not loading
- Check CDN configuration
- Verify CORS headers
- Check file paths (relative vs absolute)
- Clear CDN cache

### Performance issues
- Check bundle sizes
- Review server response times
- Analyze waterfall in DevTools
- Check for blocking resources

### SEO issues
- Verify robots.txt not blocking pages
- Check canonical tags
- Review sitemap
- Test with Google Rich Results Test

## 📞 Support Contacts

- **Hosting**: [Provider support link]
- **DNS**: [Provider support link]
- **CDN**: [Provider support link]
- **Analytics**: [Provider support link]
- **Team Lead**: [Contact info]

---

## 📅 Review Schedule

- **Daily**: Error logs, uptime
- **Weekly**: Performance metrics, analytics
- **Monthly**: Security audit, dependency updates
- **Quarterly**: Full site audit, competitor analysis

---

Remember: Production is never "done" - continuous monitoring and improvement are key! 🎯
