# Shiv Automobiles – Deployment, SEO & Operations Guide

> **Prepared for:** Vishal Kotkar, Shiv Automobiles Car Workshop
> **Domain target:** `shivautomobiles.in`

---

## 1. IMAGES YOU MUST PHOTOGRAPH AND ADD

Create an `images/` folder inside your project and add these files (WebP preferred, JPEG also works):

| Filename | Size | What to photograph |
|---|---|---|
| `hero-workshop.webp` | 1200x800 px | Front of workshop or mechanic working on engine |
| `gallery-1.webp` | 800x600 px | Engine repair / under-bonnet work |
| `gallery-2.webp` | 800x600 px | AC unit or coolant pipe work |
| `gallery-3.webp` | 800x600 px | Dent repair or freshly painted car |
| `gallery-4.webp` | 800x600 px | Tyre alignment machine or tyre work |
| `gallery-5.webp` | 800x600 px | Clutch/gearbox parts or suspension work |
| `gallery-6.webp` | 800x600 px | Workshop exterior or team photo |
| `og-cover.webp` | 1200x630 px | Best shop photo (for WhatsApp/Facebook link previews) |
| `apple-touch-icon.png` | 180x180 px | Logo on orange background |

**Free WebP converter:** https://squoosh.app — keep each image under 120 KB.

---

## 2. DEPLOY ON CLOUDFLARE PAGES (Free)

1. Create free account at https://dash.cloudflare.com/sign-up
2. Go to: Workers & Pages > Pages > Create a project > **Upload assets**
3. Drag and drop your entire project folder
4. Project name: `shiv-automobiles`
5. Your site is live at `shiv-automobiles.pages.dev` instantly!

---

## 3. CONNECT YOUR .IN DOMAIN

**Buy the domain:** GoDaddy.in or BigRock.in — search `shivautomobiles.in` (~Rs 800-1200/year)

**Connect to Cloudflare:**
1. Cloudflare Pages > your project > Custom domains > Add domain
2. Enter `shivautomobiles.in` and `www.shivautomobiles.in`
3. Copy the nameservers Cloudflare shows you
4. Login to registrar > Change nameservers > paste Cloudflare's
5. Wait 10-30 minutes. HTTPS is automatic and free.

---

## 4. GOOGLE SEARCH CONSOLE

1. https://search.google.com/search-console/
2. Add property > Domain > `shivautomobiles.in`
3. Verify via DNS TXT record (add it in Cloudflare DNS panel)
4. Submit sitemap: `https://shivautomobiles.in/sitemap.xml`
5. Check Coverage and Core Web Vitals reports weekly

---

## 5. GOOGLE ANALYTICS 4

1. https://analytics.google.com > Create Account > Property > Web
2. Enter `shivautomobiles.in`, copy your Measurement ID (like `G-ABC123XYZ`)
3. In `index.html`, find `G-XXXXXXXXXX` (appears twice) and replace with your ID
4. Verify: visit site, check GA4 Realtime report — should show 1 active user

**GA4 events already wired up:**
- Phone call taps (hero, header, sticky bar)
- WhatsApp opens (all buttons and floating button)
- Booking form submissions
- Per-service WhatsApp enquiry clicks

---

## 6. GOOGLE BUSINESS PROFILE CHECKLIST

Login at https://business.google.com

- [ ] Website URL: `https://shivautomobiles.in`
- [ ] Phone: +91 98343 28635 (exact match with site)
- [ ] Address: Shivare-Satara Road (SH 30), Naitale, Tal. Niphad, Dist. Nashik, Maharashtra 422303
- [ ] Category: Primary = `Auto Repair Shop`
- [ ] Hours: Monday-Sunday 08:00-23:00
- [ ] Add services in GBP (Car Service, AC Repair, Engine Repair, Denting & Painting, etc.)
- [ ] Upload 10+ real photos
- [ ] Copy your review link from GBP > Share > Copy review link
- [ ] Paste review link in `index.html` replacing `REPLACE_WITH_YOUR_GOOGLE_REVIEW_LINK`
- [ ] Post on GBP at least once a week

---

## 7. REQUIRED REPLACEMENTS IN index.html

| Find | Replace with |
|---|---|
| `G-XXXXXXXXXX` | Your GA4 Measurement ID |
| `REPLACE_WITH_YOUR_GOOGLE_REVIEW_LINK` | Your Google review link |
| Google Maps iframe `src="..."` | Real embed URL from Google Maps > Share > Embed a map |

---

## 8. GET CORRECT GOOGLE MAPS EMBED

1. Open Google Maps on desktop or browser
2. Navigate to your exact workshop location
3. Click Share > Embed a map
4. Copy the `src="..."` value from inside the iframe code shown
5. In `index.html`, find the `<iframe>` inside `id="find-us"` and replace its `src` attribute

---

## 9. ADD MORE REAL REVIEWS

Open `js/data.js`, find `const REVIEWS = [...]`, add:

```
{
  name: 'Customer Name',
  stars: 5,
  date: 'November 2025',
  textMr: 'मराठी रिव्ह्यू...',
  textEn: 'English review text...',
  textHi: 'हिंदी समीक्षा...',
  source: 'Google'
},
```

Once you have 5+ verified Google reviews, add aggregateRating to the JSON-LD schema in index.html.

---

## 10. CORE WEB VITALS CHECKLIST

- [x] `loading="lazy"` on all below-fold images
- [x] `loading="eager"` on hero image (LCP target)
- [x] WebP format images, each under 120 KB
- [x] Fonts preloaded via `rel="preload"`
- [x] All images have `width` and `height` attributes (prevents CLS)
- [x] Animations use only `transform` and `opacity` (no layout triggers)
- [x] `prefers-reduced-motion` CSS media query respected
- [ ] After launch, test at https://pagespeed.web.dev — aim for 90+ mobile score

---

## 11. PROJECT FILE STRUCTURE

```
Shiv Automobiles/
  index.html              Main homepage
  car-service.html        General service page (targets Niphad)
  car-ac-repair.html      AC repair page (targets Pimpalgaon Baswant)
  denting-painting.html   Denting page (targets Niphad)
  engine-repair.html      Engine repair page (targets Lasalgaon)
  sitemap.xml             XML sitemap for Google
  robots.txt              Crawler instructions
  favicon.svg             Browser tab icon
  css/
    style.css             All styles (edit design here)
  js/
    data.js               Edit this to update services, reviews, FAQs
    main.js               All JS behaviour
  images/                 ADD YOUR PHOTOS HERE
    (9 image files listed in Section 1)
```

---

## 12. ONGOING LOCAL SEO

1. Post on GBP weekly with repair photos and before/after shots
2. Send every happy customer your review link on WhatsApp — ask for a review
3. Add new gallery photos to `images/` and update `js/data.js` links monthly
4. When you add new pages, add their URL to `sitemap.xml` and update the date
5. Use these keywords in GBP posts: "गाडी दुरुस्ती निफाड", "कार AC निफाड", "car garage Niphad Nashik", "car service Pimpalgaon Baswant"

---

*Share this guide with whoever is helping you manage the website.*
