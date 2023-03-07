/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc"],
  },
};

module.exports = {
  nextConfig,
};
