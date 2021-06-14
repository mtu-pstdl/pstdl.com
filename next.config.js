// @ts-check

const path = require('path')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    productionBrowserSourceMaps: true
};

module.exports = nextConfig;