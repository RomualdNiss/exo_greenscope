/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Important pour les chemins relatifs
  assetPrefix: './', // Supprimez cette ligne si elle pose problème
};

module.exports = nextConfig;