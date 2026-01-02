import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";
const site =
  process.env.SITE_URL ||
  (isProd
    ? "https://example.github.io/monet-v2-prototype"
    : "http://localhost:4321");
const base = isProd ? process.env.BASE_PATH || "/monet-v2-prototype" : "/";

export default defineConfig({
  site,
  base,
});
