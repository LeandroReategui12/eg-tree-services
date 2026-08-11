# EG Tree Services LLC — React Redesign

React (Vite) redesign of [egtreeservicesllc.com](https://egtreeservicesllc.com/) using the original brand logo, greens/gold palette, copy, project photos, and hero video.

## Routes

| Page | Path |
|------|------|
| Home | `/` |
| About Us | `/about` |
| Our Services | `/services` |
| Tree Services | `/tree-services` |
| Landscaping | `/landscaping` |
| Lot Clearing | `/lot-clearing` |
| Projects | `/projects` |
| Contact | `/contact` |

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually [http://localhost:5173](http://localhost:5173)).

## Build

```bash
npm run build
npm run preview
```

## Notes

- Assets are loaded from the live WordPress media URLs on the original site.
- The estimate form opens the visitor’s email client (`mailto:`) — wire it to a real backend or form service before production.
