/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONSTANTS_FILE = path.join(ROOT_DIR, 'src', 'constants', 'constants.js');
const IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadProjects() {
  const raw = fs.readFileSync(CONSTANTS_FILE, 'utf8');
  // Convert ESM exports to CJS-compatible for evaluation
  const transformed = raw
    .replace(/export const /g, 'const ')
    .replace(/export default [^;]+;/g, '');

  const moduleShim = { exports: {} };
  const func = new Function('module', 'exports', `${transformed}; module.exports = { projects };`);
  try {
    func(moduleShim, moduleShim.exports);
  } catch (err) {
    console.error('Failed to evaluate constants.js. Error:', err);
    throw err;
  }
  return moduleShim.exports.projects || {};
}

async function renderPlaceholder(page, titleText) {
  const bg = '#0f172a';
  const fg = '#e2e8f0';
  const accent = '#38bdf8';
  const safeTitle = (titleText || 'Project').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const html = `<!doctype html><html><head><meta charset="utf-8"/>
  <style>
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    html, body { margin: 0; padding: 0; height: 100%; }
    body { display: flex; align-items: center; justify-content: center; background: ${bg}; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; }
    .card { width: 1100px; height: 620px; border-radius: 16px; background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)); box-shadow: 0 12px 40px rgba(0,0,0,0.35); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.08); animation: fadeIn 400ms ease-out both; }
    .title { color: ${fg}; font-size: 48px; font-weight: 800; text-align: center; line-height: 1.2; padding: 0 48px; }
    .subtitle { margin-top: 16px; color: ${accent}; font-size: 18px; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.9; }
  </style></head>
  <body>
    <div class="card">
      <div class="subtitle">Preview Unavailable</div>
      <div class="title">${safeTitle}</div>
    </div>
  </body></html>`;
  await page.setContent(html, { waitUntil: 'load' });
}

async function tryScreenshotVisit(url, page) {
  try {
    await page.goto(url, { waitUntil: ['load', 'domcontentloaded', 'networkidle0'], timeout: 60000 });
  } catch (err) {
    console.warn(`Navigation warning for ${url}:`, err.message);
  }
  await sleep(2500);
}

async function run() {
  ensureDirSync(IMAGES_DIR);
  const projectsByCategory = loadProjects();
  const allProjects = Object.values(projectsByCategory).flat();

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-zygote',
      '--single-process'
    ]
  });

  let successCount = 0;
  let placeholderCount = 0;

  for (const project of allProjects) {
    const title = project.title || 'project';
    const slug = slugify(title);
    const outPath = path.join(IMAGES_DIR, `${slug}.png`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36');

    try {
      if (project.visit && typeof project.visit === 'string' && project.visit.trim().length > 0) {
        console.log(`Capturing: ${title} -> ${project.visit}`);
        await tryScreenshotVisit(project.visit, page);
      } else {
        console.log(`No visit URL for: ${title}. Generating placeholder.`);
        await renderPlaceholder(page, title);
        placeholderCount += 1;
      }

      await page.screenshot({ path: outPath, type: 'png' });
      successCount += 1;
    } catch (err) {
      console.warn(`Failed for ${title}. Falling back to placeholder. Error: ${err.message}`);
      try {
        await renderPlaceholder(page, title);
        await page.screenshot({ path: outPath, type: 'png' });
        placeholderCount += 1;
      } catch (innerErr) {
        console.error(`Failed to write placeholder for ${title}:`, innerErr.message);
      }
    } finally {
      await page.close().catch(() => {});
    }
  }

  await browser.close();
  console.log(`Done. Wrote ${successCount} screenshots (${placeholderCount} placeholders). Files in: ${IMAGES_DIR}`);
}

run().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
}); 