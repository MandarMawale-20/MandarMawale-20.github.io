import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const htmlPath = path.join(root, 'dist', 'index.html');
const bundlePath = path.join(root, 'prerender-dist', 'entry.mjs');
const marker = '<div id="root"></div>';

const main = async () => {
  if (!existsSync(htmlPath) || !existsSync(bundlePath)) {
    console.warn('[prerender] skipped - dist/index.html or prerender-dist/entry.mjs is missing');
    return;
  }

  const { renderPortfolio } = await import(pathToFileURL(bundlePath).href);
  const markup = renderPortfolio();

  const html = readFileSync(htmlPath, 'utf8');

  if (!html.includes(marker)) {
    console.warn('[prerender] skipped - root container not found in dist/index.html');
    return;
  }

  writeFileSync(htmlPath, html.replace(marker, `<div id="root">${markup}</div>`), 'utf8');
  console.log(`[prerender] injected ${markup.length.toLocaleString()} characters of static HTML into dist/index.html`);
};

main().catch((error) => {
  // Prerendering is a progressive enhancement: never break a deployment because of it
  console.warn('[prerender] skipped -', error?.message ?? error);
});
