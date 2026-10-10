# NVK Wellness Blog: Deployment and Editing Guide

## 1. Before you upload
Search every file for `https://USERNAME.github.io/REPOSITORY/` and replace it with your real GitHub Pages address, for example `https://myname.github.io/nvk-wellness-blog/`. This affects canonical tags, Open Graph tags, JSON-LD, sitemap.xml and robots.txt. Replace `assets/images/logo/og.svg` with a 1200x630 JPG or PNG for better social previews.

## 2. Deploy to GitHub Pages
1. Create a GitHub account. 2. Create a new public repository. 3. Upload all files (the contents of this folder, keeping the structure). 4. Commit changes. 5. Open Settings, then Pages. 6. Choose "Deploy from a branch". 7. Select `main` and `/ (root)`. 8. Save. 9. Wait a few minutes. 10. Open your Pages URL and test links, menu and blog filters.

## 3. Google Search Console
1. Add a URL-prefix property for your Pages URL. 2. Verify using the HTML tag method (paste the meta tag into each page head, or at least index.html) or another offered method. 3. Open Sitemaps and submit `sitemap.xml`. 4. Use URL Inspection on the homepage and key articles, then Request Indexing. 5. Check the Pages report for indexing status and Performance for clicks and impressions. Indexing is not instant and rankings are never guaranteed.

## 4. Add an article
1. Copy `articles/article-template.html` to a new folder: `articles/your-slug/index.html`, and change every `../` to `../../`.
2. Fill in every marked area (title, category, description, date, image, content, sources, `data-slug` on the `<body>` tag).
3. Add one entry to the top of `articles` in `assets/js/blog.js`. The Home page, Articles page, category page, Related Articles, Recent Articles, Editor's Picks and Previous/Next all update from that entry.
4. Add the article URL to `sitemap.xml`.

## 5. Other tasks
- Editor's Picks: set `editorPick: true` in blog.js. There is no analytics data behind it, so the site never says "trending".
- Sub-articles: set `parent: "main-article-slug"` to show "Back to Main Article".
- Images: save WebP in `assets/images/articles/`, always with width, height and alt text.
- Internal links: `<a href="../other-slug/">descriptive text</a>` inside an article.
- External links: add `target="_blank" rel="noopener noreferrer"`.
- Affiliate links: use the Recommended Resource block in the template with `rel="sponsored noopener noreferrer"` and keep the disclosure beside it.
- New category: add it to `categories` in blog.js, copy a file in `categories/` (set `data-cat`), add it to the Topics menu, the Home topic cards, the Articles page filter buttons and `sitemap.xml`.
- Custom domain later: Settings, Pages, Custom domain, then update the URLs from step 1.

## 6. Post-launch checklist
Add a real contact email, social links and newsletter link; replace sample articles with your own writing; add sources to health and finance posts; update privacy.html if you add analytics or ads; run Lighthouse; check Search Console weekly.
