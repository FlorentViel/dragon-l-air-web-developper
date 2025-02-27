import fs from 'fs';

const BASE_URL = 'https://www.thedragonslairwebdeveloper.com';

// Liste des routes de votre site
const routes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/contact'
];

// Création du contenu XML du sitemap
const generateSitemap = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${route}</loc>\n`;
        xml += '    <lastmod>' + new Date().toISOString().split('T')[0] + '</lastmod>\n';
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
};

// Génération et sauvegarde du sitemap
const saveSitemap = () => {
    const sitemap = generateSitemap();
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap généré avec succès!');
};

// Exécution de la génération du sitemap
saveSitemap(); 