# Jais Design — Website Premium

> **Quiet Luxury · Design Interior & Decor Evenimente**
>
> Website de prezentare premium pentru brandul **Jais Design**, construit cu HTML5, CSS3 și JavaScript Vanilla — zero dependențe, zero framework-uri.

---

## 📁 Structura Proiectului

```
jais-design/
├── index.html                        # Pagina principală (Home)
├── portfolio.html                    # Grilă portofoliu (masonry-like CSS Grid)
├── services.html                     # Detaliu complet servicii
├── about.html                        # Filozofia brandului
├── contact.html                      # Formular contact + info
├── politica-confidentialitate.html   # GDPR / Politică de Confidențialitate
├── style.css                         # Tot sistemul de design (variabile, layout, componente)
├── script.js                         # Interactivitate: navbar, IntersectionObserver, cookies
├── .gitignore                        # Fișiere ignorate de Git
├── README.md                         # Această documentație
└── assets/
    └── images/                       # ← Adaugă imaginile tale aici
        └── .gitkeep                  # Menține folderul în Git
```

---

## 🎨 Design System

### Paletă de Culori

| Variabilă CSS         | Hex       | Utilizare                    |
|-----------------------|-----------|------------------------------|
| `--clr-bg`            | `#F9F7F3` | Fundal principal (off-white) |
| `--clr-text`          | `#2D2D2D` | Text (charcoal)              |
| `--clr-accent`        | `#C5A059` | Accent (champagne gold)      |
| `--clr-white`         | `#FFFFFF` | Alb pur                      |

### Tipografie

- **Heading:** `Playfair Display` (serif) — eleganță clasică
- **Body:** `Inter` (sans-serif) — claritate modernă
- Ambele sunt încărcate de pe Google Fonts via `@import` în `style.css`

### Butoane (Ghost Style)

Butoanele folosesc un efect de umplere animat via `::after` pseudo-element:

```css
.btn          /* ghost dark */
.btn--accent  /* ghost gold */
.btn--white   /* ghost alb */
.btn--filled  /* solid gold */
```

---

## ⚙️ Funcționalități JavaScript

### 1. Navbar Sticky cu Shrink
La scroll > 60px, navbar-ul primește clasa `.scrolled` care reduce înălțimea și adaugă umbra.

### 2. Fade-Up Animations (IntersectionObserver)
Orice element cu clasa `.fade-up` se animează discret când intră în viewport.
Elementele din grile primesc `.stagger` pe container pentru animații decalate.

### 3. Cookie Banner
- Apare după **1.5 secunde** de la încărcarea paginii
- Alegerea (`accepted` / `declined`) este salvată în `localStorage` cu cheia `jais_cookie_consent`
- Nu mai reapare după ce utilizatorul a ales

### 4. Hero Parallax
Imaginea de fundal din hero se mișcă subtil la scroll (`translateY * 0.25`).

### 5. Validare Formular
Validare client-side de bază înainte de submit — câmpuri obligatorii și format email.

---

## 🖼️ Cum Adaugi Imagini

Plasează imaginile tale în `/assets/images/`. Denumirile sugerate:

| Fișier                      | Utilizare                               |
|-----------------------------|-----------------------------------------|
| `hero-bg.jpg`               | Background hero homepage                |
| `about-teaser.jpg`          | Imagine secțiunea About (homepage)      |
| `portfolio-01.jpg` → `09.jpg` | Imagini portofoliu (format 3:4 recomandat) |

**Recomandări:**
- Format: `.jpg` sau `.webp` pentru performanță
- Rezoluție hero: minim **1920×1080px**
- Imagini portofoliu: minim **800×1067px** (proporție 3:4)
- Optimizare: folosește [Squoosh](https://squoosh.app/) sau [TinyPNG](https://tinypng.com/)

---

## 📮 Configurare Formspree

Formularul de contact trimite datele prin [Formspree](https://formspree.io/).

**Pași:**
1. Creează un cont gratuit pe [formspree.io](https://formspree.io/)
2. Creează un nou form și copiază ID-ul (ex: `xpzgkwqr`)
3. În `contact.html`, înlocuiește:

```html
<!-- Înainte -->
action="https://formspree.io/f/YOUR_ID"

<!-- După -->
action="https://formspree.io/f/xpzgkwqr"
```

---

## 🚀 Deploy

### Netlify (Recomandat)

**Varianta 1 — Drag & Drop:**
1. Mergi la [app.netlify.com](https://app.netlify.com/)
2. Trage folderul `jais-design/` în zona de deploy
3. Site-ul este live instant cu URL temporar

**Varianta 2 — Git Deploy:**
1. Conectează repo-ul GitHub la Netlify
2. Build command: *(gol — nu există build step)*
3. Publish directory: `.` (rădăcina repo-ului)
4. Orice push pe `main` face deploy automat

### Vercel

```bash
npm i -g vercel
cd jais-design
vercel --prod
```

### GitHub Pages

1. În repo → **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / folder: `/ (root)`
4. Site disponibil la `https://username.github.io/jais-design/`

---

## 🔗 Conectare GitHub Remote

După ce ai creat repo-ul pe GitHub (`jaisdesign-website`):

```bash
cd jais-design
git remote add origin https://github.com/USERNAME/jaisdesign-website.git
git branch -M main
git push -u origin main
```

---

## 📝 Checklist Pre-Launch

- [ ] Adaugă imaginile în `/assets/images/`
- [ ] Actualizează ID-ul Formspree în `contact.html`
- [ ] Actualizează numărul de telefon WhatsApp (toate paginile)
- [ ] Actualizează link-ul Instagram (`@jaisdesign` → handle real)
- [ ] Adaugă `og:image` (meta tag Open Graph) cu imaginea hero
- [ ] Testează pe mobil (iOS Safari + Android Chrome)
- [ ] Verifică performanța cu [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Adaugă `favicon.ico` în rădăcina proiectului
- [ ] Configurează un domeniu custom în Netlify/Vercel

---

## 🛠️ Tehnologii Utilizate

- **HTML5** — Markup semantic (article, section, header, nav, main, footer, aside)
- **CSS3** — Custom Properties, CSS Grid, Flexbox, Animations, Backdrop Filter
- **JavaScript (ES6+)** — IntersectionObserver API, localStorage, Event Delegation
- **Google Fonts** — Playfair Display + Inter
- **Formspree** — Backend form (no server needed)

---

## 📄 Licență

Proiect creat pentru uz comercial exclusiv al brandului **Jais Design**.
Toate drepturile rezervate © 2025 Jais Design.
