import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshots() {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  // 1. Screenshot Shiv Shakti General Store
  console.log('Navigating to Shiv Shakti General Store...');
  try {
    await page.goto('https://ssgs-delta.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    const ssgsPath = path.join(__dirname, '..', 'src', 'assets', 'ssgs-cover.jpg');
    await page.screenshot({ path: ssgsPath, type: 'jpeg', quality: 90 });
    console.log(`Saved ${ssgsPath}`);
  } catch (e) {
    console.error('Failed SSGS:', e);
  }

  // 2. Screenshot MediHope
  console.log('Navigating to MediHope...');
  try {
    await page.goto('https://medihope.vercel.app/', { waitUntil: 'networkidle2', timeout: 30000 });
    const medihopePath = path.join(__dirname, '..', 'src', 'assets', 'medihope-cover.jpg');
    await page.screenshot({ path: medihopePath, type: 'jpeg', quality: 90 });
    console.log(`Saved ${medihopePath}`);
  } catch (e) {
    console.error('Failed MediHope:', e);
  }

  // 3. For PropEase, we'll create a local HTML file since it's a desktop app without a live link
  // (We'll skip PropEase screenshot here and handle it differently or create a mock)

  await browser.close();
  console.log('Done.');
}

takeScreenshots().catch(console.error);
