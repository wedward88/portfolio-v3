Personal Portfolio Website for William Dunn.

This page is deployed using GitHub Pages at https://www.wedward.com.

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form id from the endpoint (`https://formspree.io/f/<id>`).
3. Locally: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`.
4. For GitHub Pages deploys: add a repository secret named `NEXT_PUBLIC_FORMSPREE_ID` with the same value.
