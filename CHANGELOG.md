# Changelog

## 2026-10-03

- [FEAT]: Optimization improvements — editorial sales page, published $125,000 ask, buy / offer / agent paths, use-case filter, valuation brief, escrow steps, dark mode, and a mobile menu.
- Removed the self-served star rating from Product schema. Kept Organization, WebSite, WebPage, and Offer.
- Removed the homepage `noindex` header. 404 stays noindexed.
- Added baseline security headers on Cloudflare Pages. Still on the Workers and Pages free plan (`wrangler.toml` assets, no paid features).
- Dropped the Font Awesome CDN and the rainbow gradient treatment.
