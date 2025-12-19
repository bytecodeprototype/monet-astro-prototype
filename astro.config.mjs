import { defineConfig } from 'astro/config';

const normalizeSite = (value) => {
  if (!value) return 'https://example.com';
  return value.replace(/\/$/, '');
};

const normalizeBase = (value) => {
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}`;
};

const site = normalizeSite(process.env.SITE_URL);
const base = normalizeBase(process.env.BASE_PATH);

export default defineConfig({
  srcDir: 'src',
  site,
  base,
});
