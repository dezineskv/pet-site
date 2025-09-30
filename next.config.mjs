/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if necessary
        hostname: "*", // The exact hostname of your image domain
        // pathname: "/path/to/images/**", // Optional: restrict to specific paths, use ** for wildcard
      },
    ],
  },
};
export default nextConfig;