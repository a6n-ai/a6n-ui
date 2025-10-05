# Performance Optimization Guide

This document outlines the performance optimizations implemented in the a6n project and best practices for maintaining them.

## 🎯 Current Optimizations

### Build Configuration

#### Code Splitting
```typescript
// vite.config.ts
manualChunks: {
  vendor: ["react", "react-dom", "react-router-dom"],
  ui: ["@radix-ui/react-slot", "lucide-react"],
}
```

**Benefits:**
- Separates vendor code from application code
- Better caching (vendor code changes less frequently)
- Parallel downloads in modern browsers

#### Minification
```typescript
minify: "terser",
terserOptions: {
  compress: {
    drop_console: true,    // Remove console.log in production
    drop_debugger: true,   // Remove debugger statements
  },
}
```

**Benefits:**
- Smaller bundle size (~30-40% reduction)
- Faster downloads and parsing
- Removes debug code from production

### CSS Optimization

#### Tailwind v4
- Uses modern OKLCH color space
- CSS variables for theming
- Automatic purging of unused styles
- Minimal config (most in `@theme` directive)

#### Critical CSS
- Inline critical styles in `index.css`
- Custom utilities for common patterns
- Reduced runtime style calculations

### Asset Optimization

#### Images
- Use WebP format when possible
- Lazy load below-the-fold images
- Proper sizing and compression

```jsx
// Example lazy loading
<img 
  loading="lazy"
  src="/path/to/image.webp"
  alt="Description"
/>
```

#### Fonts
- Preconnect to Google Fonts
- Font-display: swap for faster rendering
- Only load used font weights

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

## 📊 Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

### Bundle Size Targets
- **Initial JS Bundle**: < 200KB gzipped
- **Vendor Chunk**: < 150KB gzipped
- **CSS Bundle**: < 30KB gzipped
- **Total Page Weight**: < 1MB

## 🚀 Optimization Techniques

### 1. Component Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 2. React Query Caching

```jsx
import { useQuery } from '@tanstack/react-query';

// Automatic caching and deduplication
const { data } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

### 3. Memoization

```jsx
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

// Memoize expensive calculations
const computed = useMemo(() => expensiveOperation(data), [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething();
}, []);
```

### 4. Virtualization

For long lists, use virtualization:

```bash
npm install @tanstack/react-virtual
```

```jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });
  
  // ... render virtual items
}
```

### 5. Image Optimization

```jsx
// Use next-gen formats
<picture>
  <source srcSet="/image.avif" type="image/avif" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Fallback" />
</picture>

// Or use lazy loading with intersection observer
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });
    
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <img 
      ref={imgRef}
      src={isLoaded ? src : undefined}
      alt={alt}
    />
  );
}
```

## 🔍 Monitoring Performance

### Development Tools

```bash
# Analyze bundle size
npm run build -- --mode analyze

# Or use vite-bundle-visualizer
npm i -D vite-bundle-visualizer
```

Add to `vite.config.ts`:
```typescript
import { visualizer } from 'vite-bundle-visualizer';

plugins: [
  // ... other plugins
  visualizer({ open: true }),
]
```

### Lighthouse CI

Add to CI/CD pipeline:

```bash
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:8080
```

### Web Vitals Monitoring

```bash
npm install web-vitals
```

```typescript
// src/main.tsx
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  // Send to analytics service
  console.log({ name, value, id });
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onFCP(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
```

## ✅ Performance Checklist

Before deploying:

### Build
- [ ] Production build completes without warnings
- [ ] Bundle sizes are within targets
- [ ] No duplicate dependencies
- [ ] Tree-shaking is working

### Loading
- [ ] Images are optimized and lazy-loaded
- [ ] Fonts are preloaded
- [ ] Critical CSS is inlined
- [ ] Non-critical scripts are deferred

### Runtime
- [ ] No unnecessary re-renders
- [ ] Event handlers are memoized
- [ ] Large lists are virtualized
- [ ] API responses are cached

### Network
- [ ] HTTP/2 or HTTP/3 is enabled
- [ ] Gzip/Brotli compression is enabled
- [ ] CDN is configured
- [ ] Cache headers are set correctly

### Monitoring
- [ ] Lighthouse score > 90
- [ ] Web Vitals are green
- [ ] No console errors in production
- [ ] Performance monitoring is set up

## 🐛 Common Performance Issues

### Issue: Large Initial Bundle

**Solution:**
- Implement route-based code splitting
- Lazy load heavy components
- Move large dependencies to separate chunks

### Issue: Slow First Paint

**Solution:**
- Reduce critical path CSS
- Preload critical assets
- Use font-display: swap
- Minimize render-blocking scripts

### Issue: Layout Shifts

**Solution:**
- Set explicit dimensions for images/videos
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS aspect-ratio

### Issue: Memory Leaks

**Solution:**
- Clean up event listeners in useEffect
- Cancel pending requests on unmount
- Clear intervals and timeouts
- Properly dispose of subscriptions

## 📚 Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)

---

Keep your app fast! ⚡
