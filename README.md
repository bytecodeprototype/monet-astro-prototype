# Monet Label (Astro)

Este proyecto reconstruye la landing de Monet Label usando [Astro](https://astro.build/) para permitir despliegues estáticos rápidos y fáciles en GitHub Pages.

## Scripts
- `npm run dev`: ejecuta el servidor de desarrollo.
- `npm run build`: genera la versión estática en `dist/`.
- `npm run preview`: previsualiza la build localmente.
- `npm run check`: valida el proyecto con `astro check`.

## Despliegue en GitHub Pages
El workflow [`deploy.yml`](.github/workflows/deploy.yml) construye el sitio en cada push a `main` y publica automáticamente en GitHub Pages. Las variables `SITE_URL` y `BASE_PATH` se calculan en tiempo de CI para apuntar al dominio correcto del repositorio.
