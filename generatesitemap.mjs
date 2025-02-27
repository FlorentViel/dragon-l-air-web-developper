import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://thedragonslairwebdeveloper.com';
const ROUTER_PATH = path.join(__dirname, 'src', 'router.js');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');

const EXCLUDED_ROUTES = [

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

/*async function fetchDynamicRoutes() {
  try {
    const response = await axios.get('http://localhost:3000/api/pages'); // Ajustez l'URL selon votre configuration
    return response.data.map(page => `/articles/${page.url}`);
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
}*/

generateSitemap();