const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
}

module.exports = withNextIntl(nextConfig);