// import bundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// export default withBundleAnalyzer({
import path from 'node:path';

export default {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: `@use "${path.join(process.cwd(), '_mantine').replace(/\\/g, '/')}" as mantine;`,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};
// });
