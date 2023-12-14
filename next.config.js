const withNextIntl = require('next-intl/plugin')(
    './src/config/i18n.ts'
);

/** @type {import('next').NextConfig} */
const config = {};

module.exports = withNextIntl(config);