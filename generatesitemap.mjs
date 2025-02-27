import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://thedragonslairwebdeveloper.com';
const ROUTER_PATH = path.join(__dirname, 'src', 'router', 'index.js');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');

console.log('Current directory:', __dirname);
console.log('Attempting to access router at:', ROUTER_PATH);

// Vérifier si le fichier existe avant de le lire
if (!fs.existsSync(ROUTER_PATH)) {
    console.error('Router file does not exist at path:', ROUTER_PATH);
    console.log('Listing directory contents of src/router:');
    try {
        const routerDir = path.join(__dirname, 'src', 'router');
        if (fs.existsSync(routerDir)) {
            console.log(fs.readdirSync(routerDir));
        } else {
            console.log('Router directory does not exist');
        }
    } catch (err) {
        console.error('Error listing directory:', err);
    }
}

const EXCLUDED_ROUTES = [
    // Routes à exclure
];

async function generateSitemap() {
  try {
    console.log('Reading router file from:', ROUTER_PATH);
    const routerContent = await fs.promises.readFile(ROUTER_PATH, 'utf-8');
    console.log('Router content length:', routerContent.length);
    const staticRoutes = extractRoutes(routerContent);
    
    // Récupérer les articles dynamiques
    const dynamicRoutes = await fetchDynamicRoutes();
    
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    console.log('All routes:', allRoutes);

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    allRoutes.forEach(route => {
      sitemap += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    });

    sitemap += '</urlset>';

    await fs.promises.writeFile(SITEMAP_PATH, sitemap);
    console.log('Sitemap generated successfully at:', SITEMAP_PATH);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

function extractRoutes(routerContent) {
  const routes = [];
  const regex = /path:\s*['"]([^'"]+)['"]/g;
  let match;
  let currentParentPath = '';

  while ((match = regex.exec(routerContent)) !== null) {
    let route = match[1];
    if (shouldIncludeRoute(route)) {
      if (route.startsWith('/')) {
        currentParentPath = route;
        routes.push(route);
      } else {
        routes.push(`${currentParentPath}/${route}`.replace('//', '/'));
      }
    }
  }

  routes.unshift('/');
  return routes;
}

function shouldIncludeRoute(route) {
  if (route.includes(':') || route.includes('*')) {
    return false;
  }
  
  for (const excludedRoute of EXCLUDED_ROUTES) {
    if (route.includes(excludedRoute)) {
      return false;
    }
  }
  
  return true;
}

async function fetchDynamicRoutes() {
    try {
        // Pour l'instant, retournons un tableau vide car nous n'avons pas d'API
        return [];
    } catch (error) {
        console.error('Error fetching dynamic routes:', error);
        return [];
    }
}

// Si le fichier router n'existe pas, utilisons des routes statiques par défaut
async function generateSitemapWithDefaultRoutes() {
    const defaultRoutes = [
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/contact'
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    defaultRoutes.forEach(route => {
        sitemap += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
    });

    sitemap += '</urlset>';

    // Créer le dossier public s'il n'existe pas
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    await fs.promises.writeFile(SITEMAP_PATH, sitemap);
    console.log('Sitemap generated successfully with default routes at:', SITEMAP_PATH);
}

// Modification de la logique principale
async function main() {
    try {
        if (fs.existsSync(ROUTER_PATH)) {
            await generateSitemap();
        } else {
            console.log('Router file not found, using default routes');
            await generateSitemapWithDefaultRoutes();
        }
    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main();